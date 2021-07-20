import React from "react";
import style from "./Title.module.css";

const Title = () => {
  return (
    <div className={style.title}>
      <img
        className={style.image}
        src="https://g5-assets-cld-res.cloudinary.com/image/upload/x_1,y_0,h_405,w_719,c_crop/q_auto,f_auto,fl_lossy,c_fill,g_center,h_406,w_720/v1584372428/g5/g5-c-ipqdog8b-a1-self-storage-client/g5-cl-575bxuoln-a1-self-storage/services/covid-19_press_image_cihzhh.png"
        alt="covid title"
      />
    </div>
  );
};

export default Title;
