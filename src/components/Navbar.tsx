
import { useState, useEffect } from 'react';
import Styles from '../styles/navbar.module.css';
import logo from '../assets/logo.jpg';
import { MenuOutlined } from '@ant-design/icons';

const Navbar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [activeTab, setActiveTab] = useState('/');

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  useEffect(() => {
    const path = window.location.pathname;
    setActiveTab(path);
  }, []);

  const isActive = (path: string) => {
    return activeTab === path ? Styles.active : '';
  };

  return (
    <>
      <div className={Styles.navbar}>
        <div className={Styles.navbar_left_content}>
          <img src={logo} alt="logo" className={Styles.navbar_img} />
        </div>
        <div className={Styles.navbar_left_heading}>
          <h2 className={Styles.navbar_left_heading_content1}>Environment Conservation Group</h2>
          <h5 className={Styles.navbar_left_heading_content2}>Feel the pulse of nature</h5>
        </div>
        <div className={Styles.navbar_right_content}>
          <a href='/' className={isActive('/')}>Home</a>
          <a href='/projects' className={isActive('/projects')}>Our Projects</a>
          <a href='/gallery' className={isActive('/gallery')}>Our Gallery</a>
          <a href='/aboutus' className={isActive('/aboutus')}>About Us</a>
          <a href='/contactus' className={isActive('/contactus')}>Contact Us</a>
        </div>
        <div className={Styles.menu}>
          <MenuOutlined onClick={toggleCollapsed} />
        </div>
      </div>
      {collapsed === true ? (
        <div className={Styles.menu_content}>
          <a href='/' className={isActive('/')}>Home</a>
          <a href='/projects' className={isActive('/projects')}>Our Projects</a>
          <a href='/gallery' className={isActive('/gallery')}>Our Gallery</a>
          <a href='/aboutus' className={isActive('/aboutus')}>About Us</a>
          <a href='/contactus' className={isActive('/contactus')}>Contact Us</a>
        </div>
      ) : ""}
    </>
  )
};

export default Navbar;
