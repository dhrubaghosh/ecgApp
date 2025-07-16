import { Button } from "antd";
import { useEffect, useState } from "react";
import Carousel from "../components/Carousel";
import img1 from "../assets/carousel_img1.jpg";
import img2 from "../assets/birds.jpg";
import img3 from "../assets/tree.jpg";
import Navbar from "../components/Navbar";
import CustomHeading from "../components/HeadingCard";
import Styles from "../styles/home.module.css";
import getInvolved from "../assets/getInvolved.svg";
import Footer from "../components/Footer";
import Donation from "../components/donation/Donation";
import CustomCard from "../components/CustomCard";
import aboutus1 from "../assets/aboutus1.png";
import aboutus2 from "../assets/aboutus2.jpg";
import aboutus3 from "../assets/aboutus3.jpg";

const Home: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [wordings, setWordings] = useState<{ [key: string]: string }>({});
  const [loading, setLoading] = useState(true);

  const showDonation = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = (data: boolean) => {
    setIsModalOpen(data);
  };

  useEffect(() => {
    async function fetchWordings() {
      try {
        const res = await fetch('/api/wordings');
        const data = await res.json();
        const map: { [key: string]: string } = {};
        data.forEach((item: { KeyName: string; Value: string }) => {
          map[item.KeyName] = item.Value;
        });
        setWordings(map);
      } catch (error) {
        console.error('Error fetching wordings:', error);
      } finally {
        setLoading(false);
      }
    }
    fetchWordings();
  }, []);

  if (loading) {
    return <></>;
  }

  return (
    <>
      <div className={Styles.container}>
        <Navbar />
        <Carousel
          image1={img1}
          image2={img2}
          image3={img3}
          heading1={wordings.heading1 || ''}
          heading2={wordings.heading2 || ''}
          heading3={wordings.heading3 || ''}
        />
        <CustomHeading
          heading="About Us"
          paragraph={wordings.paragraph || ''}
          backgroundColor="white"
        >
          <CustomCard
            Card1_Heading={wordings.aboutusHeading1 || ''}
            card1_Paragraph_Bold={wordings.aboutusParagraph1Bold || ''}
            card1_Paragraph={wordings.aboutusParagraph1 || ''}
            image1={aboutus1}
            image2={aboutus2}
            image3={aboutus3}
            Card2_Heading={wordings.aboutusHeading2 || ''}
            card2_Paragraph_Bold={wordings.aboutusParagraph2Bold || ''}
            Card2_Paragraph={wordings.aboutusParagraph2 || ''}
            Card3_Heading={wordings.aboutusHeading3 || ''}
            Card3_Paragraph={wordings.aboutusParagraph3 || ''}
            showOrNot={false}
          />
        </CustomHeading>
        <CustomHeading
          heading="Get Involved"
          paragraph={wordings.paragraph || ''}
          backgroundColor="#F9FAFB"
        >
          <div className={Styles.getinvolved}>
            <div className={Styles.getinvolved_text}>
              <div className={Styles.getinvolved_text_inner}>
                <h2>Donate Now !</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
                  sapiente culpa asperiores quas dolores.
                </p>
                <Button
                  className={Styles.getinvolved_text_btn}
                  onClick={showDonation}
                >
                  <b>Donate Now</b>
                </Button>
              </div>
            </div>
            <img
              className={Styles.getinvolved_svg}
              src={getInvolved}
              alt="get involved"
              width="100"
              height="100"
            />
            <div className={Styles.getinvolved_img} />
          </div>
        </CustomHeading>
        <Donation open={isModalOpen} close={handleCloseModal} />
        <Footer />
      </div>
    </>
  );
};

export default Home;
