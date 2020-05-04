import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';

const ProfileImage = ({ image }) => (
  <LazyLoadImage
    id="main-box-image"
    effect="blur"
    src={image} // use normal <img> attributes as props
  />
);

export default ProfileImage;
