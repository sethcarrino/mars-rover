import React, { Component } from 'react';

let GetImageButton = (props) => {
    return(
      <div>
        <button onClick={props.search}>
          Submit
        </button>
      </div>
    )
  }

export default GetImageButton;
