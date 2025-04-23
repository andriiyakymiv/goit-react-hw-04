import ImageCard from "../ImageCard/ImageCard";
import Grid from "../Grid/Grid";

// import style from "./ImageGallery.module.css";
import { useEffect, useRef } from "react";


const ImageGallery = ({ pictures, openModal }) => {
  const galleryRef = useRef(null);

  useEffect(() => {
    if (galleryRef.current) {
      const lastItem = galleryRef.current.lastElementChild;
      const height = lastItem.getBoundingClientRect().height;

      if (pictures.length > 12) {
        window.scrollBy({
          top: height * 1.8,
          behavior: "smooth",
        });
      }
    }
  }, [pictures]);

  return (
    <Grid ref={galleryRef}>
      {pictures.map((picture) => {
        return (
          <ImageCard
            openModal={openModal}
            key={picture.id}
            picture={picture}
          />
        );
      })}
    </Grid>
  );
};

export default ImageGallery;