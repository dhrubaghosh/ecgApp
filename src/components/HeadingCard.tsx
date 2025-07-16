import React from 'react';
import Styles from '../styles/headingcard.module.css';

type Props = {
    children?: React.ReactNode;
    heading?: string;
    paragraph?: string;
    backgroundColor?: string
}

const HeadingCard: React.FC<Props> = ({ heading, paragraph, backgroundColor, children }) => {

    const background_color = {
        backgroundColor: backgroundColor,
      };

    return (
        <div className={Styles.heading} style={background_color}>
            <h2>{ heading }</h2>
            <div className={ Styles.underline }></div>
            <div className={ Styles.paragraph }><p><strong>{ paragraph }</strong></p></div>
            <>
                {children}
            </>
        </div>
    )
};

export default HeadingCard;
