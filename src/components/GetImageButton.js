import React, { Component } from 'react';

let GetImageButton = (props) => {
    return(
      <div>
        <button onClick={props.search} className="btn btn-primary form-control">
          GET ROVER IMAGES
        </button>
      </div>
    )
  }

export default GetImageButton;
