import { useEffect, useState } from 'react';
import request from 'umi-request';
import styles from './index.less';
import VR360 from '@/components/VR360';
import VRTour from '@/components/VRTour';
import carDetail from '@/assets/js/carDetail';
import videojs from 'video.js';
import 'video.js/dist/video-js.css';

import 'video.js/dist/video-js.css';

var player: any;
const index = (props: any) => {
  const [carData, setCarData] = useState<any>();
  const [btnList, setBtnList] = useState(['车身', '内饰', '视频']);
  const [btnCurrent, setBtnCurrent] = useState(0);
  const [tourVisible, setTourVisible] = useState(false);
  const [videoVisible, setVideoVisibleVisible] = useState(false);
  const carId = props.location.query.carId;
  const handleContent = (index: number) => {
    if (index === 0) {
      setTourVisible(false);
    } else if (index === 1) {
      setTourVisible(true);
    } else if (index === 2) {
      setVideoVisibleVisible(true);
      setTimeout(() => {
        player = videojs('myvideo', {
          autoplay: true,
        });
      }, 100);
    }
  };

  useEffect(() => {
    request
      .get(`${process.env.baseUrl}/car/vr?carId=${carId}`)
      .then((res) => {
        if (res.code == 200) {
          setCarData(res.data);
          localStorage.setItem('carData', JSON.stringify(res.data));
        }
      })
      .catch((err) => {
        console.log('网络错误');
      });
    // setCarData(carDetail);
  }, []);

  const videoStyle = {
    width:
      window.orientation == 90
        ? document.documentElement.clientWidth
        : document.documentElement.clientHeight,
    height:
      window.orientation == 90
        ? document.documentElement.clientHeight
        : document.documentElement.clientWidth,
  };

  return carData ? (
    <div>
      {tourVisible && <VRTour tourVisible={tourVisible} CarDetail={carData} />}

      <div className={styles.title}>{carData.detail.title}</div>
      <VR360 VRList={carData.VRList} CarDetail={carData} />
      <div className={styles.btnList}>
        {btnList.map((item: any, index: number) => {
          return (
            <div
              key={index}
              style={{ color: btnCurrent === index ? '#FFFFFF' : '#C0C0C2' }}
              className={styles.btnItem}
              onClick={() => {
                setBtnCurrent(index);
                handleContent(index);
              }}
            >
              {item}
            </div>
          );
        })}
      </div>

      {videoVisible ? (
        <div className={styles.carVideo} style={videoStyle}>
          <div
            className={styles.closeBtn}
            onClick={() => {
              setVideoVisibleVisible(false);
              player.dispose();
            }}
          ></div>
          <video
            id="myvideo"
            style={videoStyle}
            className="video-js vjs-default-skin "
            controls
            poster=""
          >
            <source
              src={process.env.imageUrl + carData.videoList[0].image}
              type="video/mp4"
            ></source>
          </video>
        </div>
      ) : null}
    </div>
  ) : null;
};

export default index;
