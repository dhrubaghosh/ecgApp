import React from 'react';
import { Button } from 'antd';
import Styles from '../../styles/transaction.module.css';
import QRCode from '../../assets/UPI.png';

type Props = {
  prevBtn: (data: boolean) => void,
}

const Transaction: React.FC<Props> = ({prevBtn}) => {

  const prevBtnHandler = () => {
    prevBtn(true);
  }

  return (
    <div className={Styles.container}>
      <img src={QRCode} className={Styles.qrCode}  width='70%'/>
      <div className={Styles.border}></div>
      <div className={Styles.btn_container}>
      <Button className={Styles.btn}>UPI Payment</Button>
      <Button className={Styles.btn} onClick={prevBtnHandler}>Go Back</Button>
      </div>
    </div>
  );
};

export default Transaction;