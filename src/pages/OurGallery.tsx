import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import CustomCarousel from "../components/CustomCarousel";
import Styles from "../styles/gallery.module.css";
import { carouselItems } from "../assets/data";
import { ourGalleryHeading, ourGalleryParagraph } from "../assets/data";
import Donation from "../components/donation/Donation";
import Footer from "../components/Footer";
import { Button } from "antd";
import MediaGallery from "../components/MediaGallery";


interface CarouselItem {
  id: number;
  title: string;
  content: string;
  imageUrl: string;
}

const OurGallery: React.FC = () => {
  const [items, setItems] = useState<CarouselItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showDonation = () => {
    setIsModalOpen(true);
  };
  const handleCloseModal = (data: boolean) => {
    setIsModalOpen(data);
  };

  const heading = "Recent Activities";

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        await new Promise((resolve) => setTimeout(resolve, 500));
        setItems(carouselItems);
        setError(null);
      } catch (err) {
        console.error("Error loading data:", err);
        setError("Failed to load data. Please try again later.");
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

  return (
    <>
      <Navbar />
      <div className={Styles.container}>
      <div className={Styles.headingCard}>
          <h1>{ourGalleryHeading}</h1>
          <p>{ourGalleryParagraph}</p>
          <div className={Styles.headingCard_button}>
            <Button className={Styles.headingCard_btn} onClick={showDonation}>
              <b>Donate Now</b>
            </Button>
          </div>
        </div>
        <Donation open={isModalOpen} close={handleCloseModal} />
        <CustomCarousel heading={heading} items={items} />
        <MediaGallery />
      </div>
      <Footer />
    </>
  );
};

export default OurGallery;
