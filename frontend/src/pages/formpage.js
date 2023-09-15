import { NavBar } from "../components/NavBar";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import axios from "axios";

export const Formpage = () => {
  const [imageFile, setImageFile] = useState();
  const [outputImage, setOutputImage] = useState();

  function handleChange(e) {
    setImageFile(URL.createObjectURL(e.target.files[0]));
  }

  const handleDownload = (e) => {
    if (outputImage != null) {
      const imageUrl = outputImage;
      fetch(imageUrl)
        .then((response) => response.blob())
        .then((blob) => {
          const url = URL.createObjectURL(blob);
          const link = document.createElement("a");
          link.href = url;
          link.download = "downloaded_image.jpg";
          document.body.appendChild(link);
          link.click();
          URL.revokeObjectURL(url);
          document.body.removeChild(link);
        });
    }
  };

  const handleSubmit = async (e) => {
    let data = new FormData();
    e.preventDefault();
    data.append("image", imageFile);
    axios
      .post("http://localhost:5000/api/acts/pst")
      .then(
        (response) => {
          console.log(response);
          setImageFile(null);
          setOutputImage(response.image);
        },
        (error) => {
          console.log(error);
        }
      );
  };

  return (
    <>
      <NavBar />
      {/* <div className="container mt-5">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="imageFormControlInput1">Image</label>
                <input
                  type="file"
                  onChange={handleChange}
                  id="imageFormControlInput1"
                  required={true}
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <div className="outputDisplay">
              <div className="row">
                <div className="col">
                  <p>Output:</p>
                </div>
                <div className="col">
                  <img
                    src={outputImage}
                    className="rounded float-right"
                    alt="Output Image"
                  />
                </div>
              </div>
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleDownload}
              >
                Download
              </button>
            </div>
          </div>
        </div>
      </div> 
      
      <div class="card" style="width: 18rem;">
        <img src="..." class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
      */}
        <div class="container text-center" style={{marginTop: '2em', paddingTop: '3em'}}>
          <div class="row text-center">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="imageFormControlInput1">Image</label><br></br>
                <input
                  type="file"
                  onChange={handleChange}
                  id="imageFormControlInput1"
                  required={true}
                />
              </div><br></br>
              <button type="submit" className="btn btn-primary">
                Submit
              </button><br></br>
            </form>
          </div>

          <div class="row">
            <form>
              <img src={outputImage} className="rounded text-center" style={{marginTop:"20px"}} alt="Output Image"/><br></br><br></br>
              <button type="button" className="btn btn-primary" onClick={handleDownload}>Download</button>
            </form>
          </div>
        </div>
    </>
  );
};

export default Formpage;
