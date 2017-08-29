import React, { Component } from 'react';

const ImageDisplay = (props) => {

  const shots = props.photos.map((photo) => {
    return (
    <img src={photo.img_src} key={photo.id} alt='' className="img-responsive image"/>
    )
  });

  return (
    <div className="gallery">
      {shots}
    </div>
  )
}

export default ImageDisplay;
