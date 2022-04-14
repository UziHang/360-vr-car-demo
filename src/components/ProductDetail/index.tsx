/*
 * @Author: your name
 * @Date: 2021-09-09 18:14:40
 * @LastEditTime: 2021-09-13 11:10:07
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \h5_template\src\components\Productdetail\index.tsx
 */
import request from 'umi-request';
import { useEffect, useState } from 'react';
import styles from './index.less';
// import carDetail from '@/assets/js/carDetail';

const ProductDetail = (props: any) => {
  const [hotsType, setHotsType] = useState<any>();

  const { isVisible, Id, onClose, CarDetail } = props;
  useEffect(() => {
    console.log('CarDetail', CarDetail);

    // const carDetail = JSON.parse(localStorage.getItem('carData'));
    for (let i = 0; i < CarDetail.hotsType.length; i++) {
      if (Id == CarDetail.hotsType[i].id) {
        setHotsType(CarDetail.hotsType[i]);
      }
    }
  }, []);

  return isVisible && hotsType ? (
    <div className={styles.popBody}>
      <div className={styles.popBox}>
        <div className={styles.imgBox}>
          <img src={process.env.imageUrl + hotsType.image} alt="" />
        </div>
        <div className={styles.detailBox}>
          <div className={styles.title}>{hotsType.title}</div>
          <div className={styles.summary}>{hotsType.summary}</div>
        </div>
        <div
          className={styles.back}
          onClick={() => {
            onClose(false);
          }}
        >
          <img src={require('../../assets/images/index/back.png')} alt="" />
        </div>
      </div>
    </div>
  ) : null;
};
export default ProductDetail;
