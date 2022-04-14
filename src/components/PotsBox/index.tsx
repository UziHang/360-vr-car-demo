/*
 * @Author: your name
 * @Date: 2021-09-09 16:55:42
 * @LastEditTime: 2021-09-13 16:27:37
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \h5_template\src\components\PotsBox\index.tsx
 */
import { useState } from 'react';

import ProductDetail from '../ProductDetail';

import styles from './index.less';
const PotsBox = (props: any) => {
  const { pointsData, CarDetail } = props;

<<<<<<< HEAD
    const [popVisible, setPopVisible] = useState(false)
    const [orientation,setOrientation] =useState(document.documentElement.clientWidth>document.documentElement.clientHeight)
    const [Id, setId] = useState(1)
=======
  const [popVisible, setPopVisible] = useState(false);
  const [orientation, setOrientation] = useState(
    window.orientation == 90 || window.orientation == -90,
  );
  const [Id, setId] = useState(1);
>>>>>>> f153ead6b34b39c21cb18721a4f87b1839a401b7

  const onClose = (e: boolean) => {
    setPopVisible(false);
  };

  return pointsData ? (
    <div
      className={styles.pointsBox}
      style={{
        width: !orientation
          ? document.documentElement.clientWidth * 1.5
          : document.documentElement.clientHeight * 1.5,
        height: !orientation
          ? document.documentElement.clientWidth
          : document.documentElement.clientHeight,
      }}
    >
      {pointsData.map((item: any, index: number) => {
        return (
          <div
            key={index}
            className={styles.point}
            style={{
              position: 'absolute',
              top: item.T,
              left: item.L,
            }}
            onClick={() => {
              setId(item.id);
              setPopVisible(true);
            }}
          >
            <div className={styles.pointFlicker}></div>
          </div>
        );
      })}
      {popVisible && (
        <ProductDetail
          isVisible={popVisible}
          onClose={onClose}
          Id={Id}
          CarDetail={CarDetail}
        />
      )}
    </div>
  ) : null;
};

export default PotsBox;
