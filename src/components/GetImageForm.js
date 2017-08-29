import React, { Component } from 'react';
import ImageDisplay from './ImageDisplay.js';
import GetImageButton from './GetImageButton';

const API_KEY = 'wurfOmQ962ksBNTDFbHj7rrJ6QN4t6JWiBwx3yKE';


class GetImageForm extends Component {
  constructor(props) {
    super(props);

    this.handleRover = this.handleRover.bind(this);
    this.handleCamera = this.handleCamera.bind(this);
    this.handleSol = this.handleSol.bind(this);
    this.fetchRoverImage = this.fetchRoverImage.bind(this);


    this.state = {
      rover: "Curiosity",
      camera: "FHAZ",
      images: [],
      sol: 0,
    }

  }


  handleRover(e) {
    this.setState({rover: e.target.value});
  }

  handleCamera(e) {
    this.setState({camera: e.target.value});
  }

  handleSol(e) {
    this.setState({sol: e.target.value});
  }

  fetchRoverImage = () => {

    this.setState({
      camera: this.state.camera,
      rover: this.state.rover,
      sols: this.state.sols,
      images: []
    });

    let cam = this.state.camera;
    let rove = this.state.rover;
    let num = this.state.sol;


    let imageUrl = `https://api.nasa.gov/mars-photos/api/v1/rovers/${rove}/photos?sol=${num}&camera=${cam}&api_key=${API_KEY}`;


      fetch(imageUrl)
      .then(results => results.json())
      .then(data => {
        console.log(data);
        this.setState({camera: this.state.camera, rover: this.state.rover, sol: this.state.sol, images: data.photos});
      })
      .catch((error) => {
        console.log("Error with Fetching : ", error);
      });

    }


  render() {
    return (

      <div>
        <div className="form">
        <label htmlFor="rover">Rover</label>
        <select onChange={this.handleRover} id="rover" className="form-control">
          <option value="Curiosity">Curiosity</option>
          <option value="Opportunity">Opportunity</option>
          <option value="Spirit">Spirt</option>
        </select>
        <label htmlFor="camera">Camera Type</label>
        <select onChange={this.handleCamera} id="rover" className="form-control">
          <option value="fhaz">FHAZ (Front Hazard)</option>
          <option value="rhaz">RHAZ (Rear Hazard)</option>
          <option value="navcam">NAVCAM (Navigation Cam)</option>
        </select>
        <label htmlFor="sol">Martian Sol: 1000-2000</label>
        <input type="number" onChange={this.handleSol} max="2000" min="1000" className="form-control"/>
        <GetImageButton search={this.fetchRoverImage}/>
        </div>
        <h1 className="roverName">{this.state.rover}</h1>
        <ImageDisplay photos={this.state.images}/>
      </div>

    );
  }
}

export default GetImageForm;
