import { useState } from "react";
import { Modal, Steps, Flex, message, theme } from "antd";
import Styles from "../../styles/donation.module.css";
import donationlogo from "../../assets/donationlogo.svg";
import DonationForm from "./DonationForm";
import jsPDF from "jspdf";

type Props = {
  open: boolean;
  close: (data: boolean) => void;
};

const Donation: React.FC<Props> = ({ open, close }) => {
  const { token } = theme.useToken();
  const [current, setCurrent] = useState(0);
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [donorData, setDonorData] = useState<any>({});

  const handleCancel = () => {
    close(false);
  };

  const verifyPayment = async (paymentDetails: any, donor: any) => {
    try {
      await fetch("/api/payments/verify-payment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...paymentDetails, donorData: donor }),
      });
      setDonorData(donor);
      setPaymentSuccess(true);
      setCurrent(current + 1);
    } catch (err) {
      message.error("Payment verification failed");
    }
  };

  const downloadReceipt = () => {
    const doc = new jsPDF();
    doc.setFontSize(18);
    doc.setFont("helvetica", "bold");
    doc.text("Environment Conservation Group - Donation Receipt", 105, 20, { align: "center" });

    doc.setLineWidth(0.5);
    doc.rect(20, 8, 170, 20);

    doc.setFontSize(10);
    doc.setFont("helvetica", "normal");

    doc.text(`Name: ${donorData.name}`, 20, 50);
    doc.text(`Email: ${donorData.email}`, 20, 60);
    doc.text(`Phone: ${donorData.phone}`, 20, 70);
    doc.text(`Amount: ${donorData.amount}.00`, 20, 80);
    doc.text(`Cause: ${donorData.cause}`, 20, 90);
    doc.text("Thank you for supporting our mission!", 20, 100);
    doc.save("ECG-donation-receipt.pdf");
  };

  const steps = [
    {
      title: "Donate",
      content: (
        <div className={Styles.container}>
          <div className={Styles.left_container}>
            <img
              src={donationlogo}
              className={Styles.donation_svg}
              width={100}
              height={100}
            />
            <h2>Save Nature and Life</h2>
            <p>
              Join our mission to document and address climate change through
              various participation options
            </p>
          </div>
          <div className={Styles.right_container}>
            <DonationForm verifyPayment={verifyPayment} />
          </div>
        </div>
      ),
    },
    {
      title: "Success",
      content: (
        <div
          className={Styles.receiptContainer}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            padding: "20px",
          }}
        >
          {paymentSuccess ? (
            <>
              <div
                style={{
                  width: "80px",
                  height: "80px",
                  borderRadius: "50%",
                  backgroundColor: "#28a745",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginBottom: "20px",
                }}
              >
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>

              <p
                style={{
                  fontSize: "22px",
                  fontWeight: "bold",
                  color: "green",
                  marginBottom: "30px",
                }}
              >
                Your payment was successful.
              </p>

              <button
                className={Styles.downloadButton}
                onClick={downloadReceipt}
                style={{
                  backgroundColor: "#007bff",
                  color: "white",
                  border: "none",
                  padding: "12px 24px",
                  borderRadius: "5px",
                  cursor: "pointer",
                  fontSize: "16px",
                  fontWeight: "bold",
                  display: "block",
                  margin: "0 auto",
                }}
              >
                Download Receipt (PDF)
              </button>
            </>
          ) : (
            <p>Payment not yet completed. Please try again.</p>
          )}
        </div>
      ),
    },
  ];

  const items = steps.map((item) => ({ key: item.title, title: item.title }));
  const contentStyle: React.CSSProperties = {
    color: token.colorTextTertiary,
    backgroundColor: token.colorFillAlter,
    borderRadius: token.borderRadiusLG,
    border: `1px dashed ${token.colorBorder}`,
    marginTop: 16,
  };

  return (
    <Flex vertical gap="middle" align="flex-start">
      <Modal
        open={open}
        onCancel={handleCancel}
        footer={null}
        width={{
          xs: "90%",
          sm: "80%",
          md: "70%",
          lg: "60%",
          xl: "50%",
          xxl: "40%",
        }}
      >
        <Steps current={current} items={items} style={{ marginTop: 20 }} />
        <div style={contentStyle}>{steps[current].content}</div>
      </Modal>
    </Flex>
  );
};

export default Donation;
