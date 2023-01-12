import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from 'react-image-gallery';
import { useTranslation } from "react-i18next";
import { GalleryLink } from "./Gallery.styled";
import { data } from "data/data";

export const GallerySlider = () => {
  const { t } = useTranslation();  

  return (
    <div>
      <ImageGallery
        items={data}
        showThumbnails={false}
        showFullscreenButton={false}
        showPlayButton={false}
        autoPlay={true}
      />
      <GalleryLink to="portfolio">
        {t('see_all')}
      </GalleryLink>
    </div>
  );
};