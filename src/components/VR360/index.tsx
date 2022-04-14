/*
 * @Author: your name
 * @Date: 2021-09-08 11:57:13
 * @LastEditTime: 2021-09-13 17:04:42
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \h5_template\src\components\VR\vr.tsx
 */
import { useEffect, useState, useRef } from 'react';
//@ts-ignore
import * as SpriteSpin from 'spritespin';
import PotsBox from '../PotsBox';
import styles from './index.less';

const VR360 = (props: any) => {
  const [boxStyles, setBoxStyles] = useState<any>();
  const [current, setcurrent] = useState(0);
  const VRBox = useRef(null);
  const { VRList, CarDetail } = props;

  const imageList: any = [];

  useEffect(() => {
<<<<<<< HEAD
    let orientation
    let w = document.documentElement.clientWidth
    let h = document.documentElement.clientHeight

    if(document.documentElement.clientWidth>document.documentElement.clientHeight)  {
      orientation=true
=======
    for (let i = 0; i < VRList.length; i++) {
      imageList.push(process.env.imageUrl + VRList[i].image);
    }
    let orientation;
    // let w = 600;
    // let h = 400;
    let w = !orientation
      ? (document.documentElement.clientHeight / 2) * 3
      : document.documentElement.clientWidth;
    let h = !orientation
      ? document.documentElement.clientHeight
      : (document.documentElement.clientWidth / 2) * 3;

    if (window.orientation == 90 || window.orientation == -90) {
      orientation = true;
>>>>>>> f153ead6b34b39c21cb18721a4f87b1839a401b7
    } else {
      orientation = false;
    }
    console.log(orientation);
    //@ts-ignore
    let VRcar = SpriteSpin.create({
      target: '#VRBox',
      source: imageList,
      animate: false,
      frameTime: 40,
      frames: 36,
<<<<<<< HEAD
      width: (!orientation?h:w),
      height:(!orientation?w:h),
      orientation:(orientation?'horizontal':'vertical'),
     
=======
      // width: !orientation ? h : w,
      // height: !orientation ? w : h,
      orientation: !orientation ? 'vertical' : 'horizontal',
>>>>>>> f153ead6b34b39c21cb18721a4f87b1839a401b7
      onLoad: () => {
        //当所有源文件都已加载并且 spritespin 准备好更新和绘制时发生。
        setBoxStyles({
          width: VRcar.state.canvas.clientWidth,
          height: VRcar.state.canvas.clientHeight,
        });
        // console.log(document.getElementsByClassName('spritespin-stage')[0]);
      },
      onFrameChanged: (evnet, data: any) => {
        //帧数改变时候
        setcurrent(data.frame);
      },
    });
    return () => {
      VRcar.destroy();
    };
  }, [VRList]);

  return VRList ? (
    <div className={styles.VRbody}>
<<<<<<< HEAD
      <PotsBox pointsData={VRList[current].hotsPotList}  />
      <div className={styles.VRBox} ref={VRBox} id='VRBox' >
      </div>
=======
      <div className={styles.VRBox} ref={VRBox} id="VRBox"></div>
      <PotsBox pointsData={VRList[current].hotsPotList} CarDetail={CarDetail} />
>>>>>>> f153ead6b34b39c21cb18721a4f87b1839a401b7
    </div>
  ) : null;
};

export default VR360;
