import { NavBar } from "../components/NavBar";
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
        <NavBar />
        <div className="container-fluid d-flex justify-content-center align-items-center" style={{color:'white',minHeight: '100vh' , marginLeft: '10%vw', marginRight: '10%vw', justifyContent: 'space-around'}}>
              <div class="row text-center" style={{marginTop:'4em',flexFlow: 'row', flex: 'row', flexShrink: 'inherit'}}>
                    <div class="col col-lg-4 col-md-4 col-sm-4 col-xsm-4" style={{ borderColor: 'white', borderStyle: 'solid', borderWidth: '2px', paddingTop: '4px',borderRadius: '15px', width: "250px", height: "250px", marginRight: '30px'}}>
                      <form onSubmit={handleSubmit}>
                        <h5><blockquote style={{ paddingTop: '4px'}}>Input CT Scan</blockquote></h5><br />
                        <div className="form-group">
                          <input className="btn btn-light"
                            type="file"
                            onChange={handleChange}
                            
                            id="imageFormControlInput1"
                            required={true} style={{textAlign: 'center', width: '228px',
                            color:'white',
                            backgroundColor: 'black'}}
                          />
                        </div><br /><br/>
                        <button type="submit" className="btn btn-outline-success">
                          Convert
                        </button>
                      </form>
                    </div>
                    <div class="col col-lg-4 col-md-4 col-sm-4 col-xsm-4" style={{ borderColor: 'white', borderStyle: 'solid', borderWidth: '2px',  paddingTop: '4px', borderRadius: '15px', width: "250px", height: "250px", marginLeft: '30px'}}>
                      <h5><blockquote style={{ paddingTop: '4px'}}>Output MRI Scan</blockquote></h5><br />
                      <form>
                        <img src={outputImage} className="rounded" style={{width: "100px", height: "100px", marginBottom: '42px' }} alt="Output" /><br /><br />
                        <button type="button" className="btn btn-outline-success" onClick={handleDownload}>Download</button>
                      </form>
                    </div>
              </div>
        </div>
    </>
  );
};

export default Formpage;
