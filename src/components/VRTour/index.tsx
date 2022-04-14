/*
 * @Author: your name
 * @Date: 2021-09-10 16:50:35
 * @LastEditTime: 2021-09-13 15:57:30
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \h5_template\src\components\VRTour\index.tsx
 */

import { useEffect, useRef, useState } from 'react';

import { PanoViewer } from '@egjs/view360';

const VRTour = (props: any) => {
  const { tourVisible, CarDetail } = props;
  const tourRef = useRef(null);

  useEffect(() => {
    const panoViewer =
      tourRef.current &&
      new PanoViewer(tourRef.current, {
        image: process.env.imageUrl + CarDetail.inList[0].image,
        projectionType: 'equirectangular',
      });
    // panoViewer.setTouchDirection(PanoViewer.TOUCH_DIRECTION.ALL);
    return () => {};
  }, []);

  return tourVisible ? (
    <div
      ref={tourRef}
      id="tourBox"
      style={{
        position: 'fixed',
        zIndex: 99999,
        width: '100%',
        height: '100%',
        top: 0,
        left: 0,
        // transform: 'rotate(-90deg)'
      }}
    ></div>
  ) : null;
};

export default VRTour;
