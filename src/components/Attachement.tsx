import React from "react";
import { BsCameraVideo } from "react-icons/bs";

interface Props {
  attachment: {
    type: string;
    url: string;
  };
  data_num?: string;
  style?: any;
}

const Attachement: React.FC<Props> = ({ attachment, data_num, style }) => {
  return (
    <div
      className={
        attachment.type === "Video"
          ? `Memory__attachments__video`
          : `Memory__attachments__image`
      }
      data-num={data_num || ""}
    >
      {attachment.type === "Video" ? (
        <>
          <video src={attachment.url} style={style} />
          <BsCameraVideo size={100} title="Video" color="#FFFFE7" />
        </>
      ) : (
        <img src={attachment.url} alt="" style={style ? style : {}} />
      )}
    </div>
  );
};

export default Attachement;
