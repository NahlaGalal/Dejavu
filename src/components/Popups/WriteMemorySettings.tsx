import React, { useEffect, useRef } from "react";
import { BsGeoAlt, BsImage, BsCameraVideo } from "react-icons/bs";
import { AiOutlineUserAdd } from "react-icons/ai";

type Props = {
  onClose: () => void;
};

const WriteMemorySettings: React.FC<Props> = ({ onClose }) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onCloseHandler = (event: any) => {
      if (ref.current && !ref.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener("click", onCloseHandler, true);

    return () => {
      document.removeEventListener("click", onCloseHandler, true);
    };
  }, [onClose]);

  return (
    <div className="Popup Popup--list" ref={ref}>
      <ul
        onClick={(e) => e.stopPropagation()}
        className="Popup__container Write-memory"
      >
        <li>
          <button>
            <BsGeoAlt size={16} color="#2F0B4D" title="Add loacation" />
            Add memory location
          </button>
        </li>
        <li>
          <input type="file" accept="image/*" name="images" id="image" hidden />
          <label htmlFor="image">
            <BsImage size={16} color="#2F0B4D" title="Add image" />
            Add image
          </label>
        </li>
        <li>
          <input type="file" accept="video/*" name="videos" id="video" hidden />
          <label htmlFor="video">
            <BsCameraVideo size={16} color="#2F0B4D" title="Add video" />
            Add video
          </label>
        </li>
        <li>
          <button>
            <AiOutlineUserAdd size={16} color="#2F0B4D" title="Tag users" />
            Tag your friends
          </button>
        </li>
      </ul>
    </div>
  );
};

export default WriteMemorySettings;
