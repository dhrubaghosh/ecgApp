import React from "react";
import Styles from "../styles/customcard.module.css";

type Props = {
  Card1_Heading?: string;
  card1_Paragraph_Bold?: string;
  card1_Paragraph?: string;
  image1?: string;
  image2?: string;
  image3?: string;
  Card2_Heading?: string;
  card2_Paragraph_Bold?: string;
  Card2_Paragraph?: string;
  Card2_Heading1?: string;
  Card2_Paragraph1?: string;
  Card2_Heading2?: string;
  Card2_Paragraph2?: string;
  Card2_Heading3?: string;
  Card2_Paragraph3?: string;
  Card2_Heading4?: string;
  Card2_Paragraph4?: string;
  Card3_Heading?: string;
  Card3_Paragraph?: string;
  image4?: string;
  Card4_Heading?: string;
  Card4_Paragraph?: string;
  image5?: string;
  Card5_Heading?: string;
  Card5_Paragraph?: string;
  showOrNot?: boolean;
};

const CustomCard: React.FC<Props> = ({
  Card1_Heading,
  card1_Paragraph_Bold,
  card1_Paragraph,
  image1,
  image2,
  image3,
  Card2_Heading,
  card2_Paragraph_Bold,
  Card2_Paragraph,
  Card3_Heading,
  Card3_Paragraph,
  image4,
  Card4_Heading,
  Card4_Paragraph,
  image5,
  Card5_Heading,
  Card5_Paragraph,
  showOrNot,
}) => {
  return (
    <>
      <div className={Styles.card_content}>
        <div id="card_item1" className={Styles.card_item}>
          <div className={Styles.card_item_text}>
            <h3>{Card1_Heading}</h3>
            <p>
              <strong>{card1_Paragraph_Bold}</strong>
              <br />
              {card1_Paragraph}
            </p>
          </div>
          <div className={Styles.card_item_img}>
            <img
              className={Styles.card_item_image}
              src={image1}
              alt="our vision"
            />
          </div>
        </div>

        <div id="card_item2" className={Styles.card_item2}>
          <div className={Styles.card_item_img}>
            <img
              className={Styles.card_item_image}
              src={image2}
              alt="our mission"
            />
          </div>
          <div className={Styles.card_item_text2}>
            <h3>{Card2_Heading}</h3>
            <p>
              <strong>
                {card2_Paragraph_Bold}
                <br />
              </strong>
              {Card2_Paragraph}
            </p>
          </div>
        </div>

        <div id="card_item3" className={Styles.card_item}>
          <div className={Styles.card_item_text}>
            <h3>{Card3_Heading}</h3>
            <p>{Card3_Paragraph}</p>
          </div>
          <div className={Styles.card_item_img}>
            <img
              className={Styles.card_item_image}
              src={image3}
              alt="our story"
            />
          </div>
        </div>

        <div
          id="card_item4"
          className={showOrNot ? Styles.card_item : Styles.showOrNot}
        >
          <div className={Styles.card_item_img}>
            <img
              className={Styles.card_item_image}
              src={image4}
              alt="our story"
            />
          </div>
          <div className={Styles.card_item_text}>
            <h3>{Card4_Heading}</h3>
            <p>{Card4_Paragraph}</p>
          </div>
        </div>
        <div id="card_item5" className={showOrNot ? Styles.card_item : Styles.showOrNot}>
          <div className={Styles.card_item_text}>
            <h3>{Card5_Heading}</h3>
            <p>{Card5_Paragraph}</p>
          </div>
          <div className={Styles.card_item_img}>
            <img
              className={Styles.card_item_image}
              src={image5}
              alt="our story"
            />
          </div>
        </div>
      </div>
      <div className={Styles.card_content_mobile}>
        <div className={Styles.card_item_mobile}>
          <h3>{Card1_Heading}</h3>
          <p>{card1_Paragraph}</p>
          <div className={Styles.card_img_mobile}>
            <img
              className={Styles.card_item_image}
              src={image1}
              alt="our vision"
            />
          </div>
        </div>
        <div className={Styles.card_item_mobile_border} />
        <div className={Styles.card_item_mobile}>
          <h3>{Card2_Heading}</h3>
          <p>{Card2_Paragraph}</p>
          <div className={Styles.card_img_mobile}>
            <img
              className={Styles.card_item_image}
              src={image2}
              alt="our mission"
              height={300}
            />
          </div>
        </div>
        <div className={Styles.card_item_mobile_border} />
        <div className={Styles.card_item_mobile}>
          <h3>{Card3_Heading}</h3>
          <p>{Card3_Paragraph}</p>
          <div className={Styles.card_img_mobile}>
            <img
              className={Styles.card_item_image}
              src={image3}
              alt="our story"
            />
          </div>
        </div>
        <div className={Styles.card_item_mobile_border} />
        <div
          id="card_item4"
          className={showOrNot ? Styles.card_item_mobile : Styles.showOrNot}
        >
          <div className={Styles.card_item_mobile}>
            <h3>{Card4_Heading}</h3>
            <p>{Card4_Paragraph}</p>
          </div>
          <div className={Styles.card_img_mobile}>
            <img
              className={Styles.card_item_image}
              src={image4}
              alt="our story"
            />
          </div>
        </div>
        <div className={showOrNot ? Styles.card_item_mobile_border : Styles.showOrNot} />
        <div id="card_item5" className={showOrNot ? Styles.card_item_mobile : Styles.showOrNot}>
          <h3>{Card5_Heading}</h3>
          <p>{Card5_Paragraph}</p>
          <div className={Styles.card_img_mobile}>
            <img
              className={Styles.card_item_image}
              src={image5}
              alt="our story"
            />
          </div>
        </div>
        <div
          className={
            showOrNot ? Styles.card_item_mobile_border : Styles.showOrNot
          }
        />
      </div>
    </>
  );
};

export default CustomCard;
