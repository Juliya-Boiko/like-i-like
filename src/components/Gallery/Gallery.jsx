import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from 'react-image-gallery';
import { GalleryLink } from "./Gallery.styled";
import galImg1 from '../../images/gallery/gal-1.png';
import galImg2 from '../../images/gallery/gal-2.png';
import gallImg3 from '../../images/gallery/gal-3.png';

export const GallerySlider = () => {
  
  const images = [
    {
      original: galImg1,
      originalHeight: '550px',
    },
    {
      original: galImg2,
      originalHeight: '550px',
    },
    {
      original: gallImg3,
      originalHeight: '550px',
    },
  ];

  return (
    <div>
      <ImageGallery
        items={images}
        showThumbnails={false}
        showFullscreenButton={false}
        showPlayButton={false}
        autoPlay={true}
      />
      <GalleryLink to="portfolio">See all</GalleryLink>
    </div>
  );
};