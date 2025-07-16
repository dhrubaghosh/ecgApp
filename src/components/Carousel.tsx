import React, { useState } from 'react';
import { Carousel, Button } from 'antd';
import Styles from '../styles/carousel.module.css';
import Donation from './donation/Donation';


type Props = {
    image1: string;
    image2: string;
    image3: string;
    heading1: string;
    heading2: string;
    heading3: string;
}

const Carousels: React.FC<Props> = ({ image1, image2, image3, heading1, heading2, heading3 }) => {
    const onChange = (currentSlide: number) => {
        // console.log(currentSlide);
    };
    const paragraph = "Join our global mission to document climate change impacts and inspire actionable solutions through scientific expeditions.Contrary to popular belief, Lorem Ipsum is not simply random text.";
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showDonation = () => {
        setIsModalOpen(true);
    };
    const handleCloseModal = (data: boolean) => {
        setIsModalOpen(data)
    }

    return (
        <div className={Styles.carousel_container}>
            <Carousel afterChange={onChange} autoplay autoplaySpeed={2000}>
                <div className={Styles.carousel_item}>
                    <img src={image1} alt='first image' className={Styles.carousel_img} />
                    <div className={Styles.carousel_content}>
                        <h4>WHAT WE DO</h4>
                        <h1>{heading1}</h1>
                        <p>{paragraph}</p>
                        <div>
                            <Button className={Styles.carousel_btn2} onClick={showDonation}><b>Donate Now</b></Button>
                        </div>
                    </div>
                </div>

                <div className={Styles.carousel_item}>
                    <img src={image2} alt='second image' className={Styles.carousel_img} />
                    <div className={Styles.carousel_content}>
                        <h4>WHAT WE DO</h4>
                        <h1>{heading2}</h1>
                        <p>{paragraph}</p>
                        <div>
                            <Button className={Styles.carousel_btn2} onClick={showDonation}><b>Donate Now</b></Button>
                        </div>
                    </div>
                </div>

                <div className={Styles.carousel_item}>
                    <img src={image3} alt='third image' className={Styles.carousel_img} />
                    <div className={Styles.carousel_content}>
                        <h4>WHAT WE DO</h4>
                        <h1>{heading3}</h1>
                        <p>{paragraph}</p>
                        <div>
                            <Button className={Styles.carousel_btn2} onClick={showDonation}><b>Donate Now</b></Button>
                        </div>
                    </div>
                </div>
            </Carousel>
            <Donation open={isModalOpen} close={handleCloseModal} />
        </div>
    );
};

export default Carousels;














