import { useState } from "react";
import { Button } from "antd";
import { EnvironmentOutlined, MailOutlined, PhoneOutlined } from "@ant-design/icons";
import Navbar from "../components/Navbar";
import Donation from "../components/donation/Donation";
import { contactusHeading, contactusParagraph } from "../assets/data";
import ContactForm from "../components/ContactForm";
import Styles from "../styles/contactus.module.css";
import Footer from "../components/Footer";
import locationImg from '../assets/location.jpeg';


const ContactUs: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showDonation = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = (data: boolean) => {
    setIsModalOpen(data);
  };
  return (
    <>
      <Navbar />
      <div className={Styles.container}>
        <div className={Styles.headingCard}>
          <h1>{contactusHeading}</h1>
          <p>{contactusParagraph}</p>
          <div className={Styles.headingCard_button}>
            <Button className={Styles.headingCard_btn} onClick={showDonation}>
              <b>Donate Now</b>
            </Button>
          </div>
        </div>
      </div>
      <Donation open={isModalOpen} close={handleCloseModal} />
      <div className={Styles.contact_form}>
        <ContactForm />
        <div className={Styles.detail}>
          <img src={locationImg} style={{ width: "50%" }} />
          <div className={Styles.details_text} style={{ width: "50%" }}>
            <div style={{display: 'flex', flexDirection: 'row', gap: '10px'}}>
              <PhoneOutlined style={{fontSize: '24px', color: '#4CAF50'}}/>
              <p>Call: +91 9787878910</p>
            </div>
            <div style={{display: 'flex', flexDirection: 'row', gap: '10px'}}>
              <MailOutlined style={{fontSize: '24px', color: '#4CAF50'}}/>
              <p>Email: Info@exaample.com</p>
            </div>
            <div style={{display: 'flex', flexDirection: 'row', gap: '10px'}}>
            <EnvironmentOutlined style={{fontSize: '24px', color: '#4CAF50'}}/>
            <p>103NH Road, Opp Naaz Theatre Coimbatore 641001</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactUs;
