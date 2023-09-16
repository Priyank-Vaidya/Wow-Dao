import React from 'react';
import { NavBar } from '../components/NavBar';
import imginput from '../images/mri1.jpg'
import imgexpected from '../images/mri8.jpg'
import imgoutput from '../images/predicted.jpg'
export const Home = () => {
    return (
        <>
            <NavBar /><br />
            <div className='container-fluid' style={{marginTop: '2em', paddingTop: '3em'}}>
                <div class="container text-center">
                    <div class="row">
                        <h1><blockquote>ImaginAI</blockquote></h1>
                    </div><br></br>
                    <div class="row">
                        <h2>We convert CT Scans - MRI Scans with help of Generative AI</h2>
                    </div><br></br><br></br>

                    <div class="row text-center" style={{flexFlow: 'row', flex: 'row', flexShrink: 'inherit'}}>
                        <div class="col">
                            <h5 style={{marginTop:"2vh", marginLeft: "3vw"}}>Input Image</h5>
                            <img src={imginput} width={"230px"} style={{marginTop:"2vh", marginLeft:"3vw", borderRadius: '10px'}} className='img-fluid rounded' alt='...' />
                        </div>
                        <div class="col">
                            <h5 style={{marginTop:"2vh", marginLeft: "3vw"}}>Expected Image</h5>
                            <img src={imgexpected} width={"230px"} style={{marginTop:"2vh", marginLeft:"3vw", borderRadius: '10px'}} className='img-fluid rounded' alt='...' />
                        </div>
                        <div class="col">
                            <h5 style={{marginTop:"2vh", marginLeft: "3vw", marginRight: "3vw"}}>Output Image</h5>
                            <img src={imgoutput} width={"230px"} style={{marginTop:"2vh", marginLeft:"3vw", marginRight: "3vw", borderRadius: '10px'}} className='img-fluid rounded' alt='...' />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;
