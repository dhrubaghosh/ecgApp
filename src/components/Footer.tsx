import React from "react";
import Styles from '../styles/footer.module.css';
import { FacebookOutlined, TwitterOutlined, LinkedinOutlined } from "@ant-design/icons";


const Footer: React.FC = () => {
    return (
        <div className={ Styles.footer}>
            <p>Copyright © 2025 <strong>www.ecgwild.org.</strong>All rights reserved</p>
            <div className={ Styles.footer_icons}>
            <FacebookOutlined style={{fontSize: 26}}/>
            <TwitterOutlined style={{fontSize: 26}}/>
            <LinkedinOutlined style={{fontSize: 26}}/>
            </div>
        </div>
    )
};

export default Footer;