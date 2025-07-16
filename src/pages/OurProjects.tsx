import { useEffect, useState } from "react";
import CustomCard from "../components/CustomCard";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Styles from "../styles/projects.module.css";
import ourProjects1 from "../assets/image1.png";
import ourProjects2 from "../assets/img1.jpg";
import ourProjects3 from "../assets/study.jpg";
import ourProjects4 from "../assets/img8.jpg";
import ourProjects5 from "../assets/img4.jpg";
import Donation from "../components/donation/Donation";
import {
  
  carouselItems,
} from "../assets/data";
import CustomCarousel from "../components/CustomCarousel";
import { Button } from "antd";

interface CarouselItem {
  id: number;
  title: string;
  content: string;
  imageUrl: string;
}

const OurProjects: React.FC = () => {
  const [items, setItems] = useState<CarouselItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [wordings, setWordings] = useState<{ [key: string]: string }>({});

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

  const showDonation = () => {
    setIsModalOpen(true);
  };
  const handleCloseModal = (data: boolean) => {
    setIsModalOpen(data);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
      
        await new Promise((resolve) => setTimeout(resolve, 500));
        setItems(carouselItems);
        setError(null);
      } catch (err) {
        console.error("Error loading carousel data:", err);
        setError("Failed to load carousel data. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading data...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const heading = "Recent Projects";

  return (
    <>
      <Navbar />
      <div className={Styles.container}>
        <div className={Styles.headingCard}>
          <h1>{wordings.projectHeading}</h1>
          <p>{wordings.projectParagraph}</p>
          <div className={Styles.headingCard_button}>
            <Button className={Styles.headingCard_btn} onClick={showDonation}>
              <b>Donate Now</b>
            </Button>
          </div>
        </div>
        <Donation open={isModalOpen} close={handleCloseModal} />
        <CustomCard
          Card1_Heading={wordings.ourProjectsHeading1}
          card1_Paragraph={wordings.ourProjectsParagraph1}
          image1={ourProjects1}
          image2={ourProjects2}
          image3={ourProjects3}
          image4={ourProjects4}
          image5={ourProjects5}
          Card2_Heading={wordings.ourProjectsHeading2}
          Card2_Paragraph={wordings.ourProjectsParagraph2}
          Card3_Heading={wordings.ourProjectsHeading3}
          Card3_Paragraph={wordings.ourProjectsParagraph3}
          Card4_Heading={wordings.ourProjectsHeading4}
          Card4_Paragraph={wordings.ourProjectsParagraph4}
          Card5_Heading={wordings.ourProjectsHeading5}
          Card5_Paragraph={wordings.ourProjectsParagraph5}
          showOrNot={true}
        />
        <CustomCarousel heading={heading} items={items} />
      </div>
      <Footer />
    </>
  );
};

export default OurProjects;
