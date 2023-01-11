import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from 'react-image-gallery';
import { GalleryLink } from "./Gallery.styled";
import { data } from "data/data";

export const GallerySlider = () => {

  return (
    <div>
      <ImageGallery
        items={data}
        showThumbnails={false}
        showFullscreenButton={false}
        showPlayButton={false}
        autoPlay={true}
      />
      <GalleryLink to="portfolio">See all</GalleryLink>
    </div>
  );
};