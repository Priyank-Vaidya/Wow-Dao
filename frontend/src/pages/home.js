import React from 'react';
import { NavBar } from '../components/NavBar';
import imginput from '../images/mri1.jpg'
import imgexpected from '../images/mri8.jpg'
import imgoutput from '../images/predicted.jpg'
export const Home = () => {
    return (
        <>
            <NavBar />
            <br />
            {/* <div className='container'>
                <div className='row'>
                    <div className='col-lg-6'>
                        <blockquote className='blockquote'>
                            <p className='mb-0' style={{paddingLeft: '4em'}}>ImaginAI</p>
                        </blockquote>
                        <p>A revolutionary tech aimed at improving the lives of those who can't afford modern healthcare!</p>
                    </div>
                    <div className='col-lg-8'>
                        <p>An example of the input and output:</p>
                        <img src={imginput} style={{marginTop:"40px", marginRight:"40px"}} className='img-fluid float-left' alt='...' />
                        <img src={imgexpected} style={{marginTop:"40px"}} className='img-fluid float-left' alt='...' />
                        <img src={imgoutput} width={"260px"} style={{marginTop:"40px"}} className='img-fluid rounded float-right' alt='...' />
                    </div>
                    <div className='col-lg-12 text-center'>
                        <blockquote className='blockquote'>
                            <p className='mb-0 '>Made By:</p>
                            <footer className='blockquote-footer my-2'>Team <cite title='Source Title'>Byte Hogs</cite></footer>
                        </blockquote>
                    </div>
                </div>
            </div> */}
            <div className='container-fluid' style={{marginTop: '2em', paddingTop: '3em'}}>
                <div class="container text-center">
                    <div class="row">
                        <h1><blockquote>ImaginAI</blockquote></h1>
                    </div><br></br>
                    <div class="row">
                        <h2>We convert CT Scans - MRI Scans with help of Generative AI</h2>
                    </div><br></br><br></br>

                    <div class="row text-center">
                        <div class="col">
                            <h5>Input Image</h5>
                            <img src={imginput} style={{marginTop:"20px", marginRight:"40px", marginLeft:"30px"}} className='img-fluid rounded' alt='...' />
                        </div>
                        <div class="col">
                            <h5>Expected Image</h5>
                            <img src={imgexpected} style={{marginTop:"20px"}} className='img-fluid rounded' alt='...' />
                        </div>
                        <div class="col">
                            <h5>Output Image</h5>
                            <img src={imgoutput} width={"260px"} style={{marginTop:"20px"}} className='img-fluid rounded' alt='...' />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;
