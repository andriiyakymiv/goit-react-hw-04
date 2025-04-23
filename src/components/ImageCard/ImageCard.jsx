import Description from "../Description/Description";

import style from "./ImageCard.module.css";

const ImageCard = ({ picture, openModal }) => {
  return (
    <li>
      <div className={style.imageWrapper}>
        <img onClick={() => {openModal({src: picture.urls.regular,alt: picture.alt_description,})}}
          src={picture.urls.small}
          alt={picture.alt_description}
        />
        {/* <Description picture={picture} /> */}
      </div>
    </li>
  );
};

export default ImageCard;