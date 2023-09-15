import React from 'react';

export const NavBar = () => {

    return(
      //   <nav class="navbar navbar-dark bg-dark">
      //   <div class="container-fluid">
      //     <a class="navbar-brand" href="/">ImaginAI</a>
      //     <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar">
      //       <span class="navbar-toggler-icon"></span>
      //     </button>
      //     <div class="offcanvas offcanvas-end text-bg-dark" tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel" style={{width: '21em'}}>
      //       <div class="offcanvas-header">
      //         <h5 class="offcanvas-title" id="offcanvasDarkNavbarLabel">ImaginAI</h5>
      //         <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      //       </div>
      //       <div class="offcanvas-body">
      //         <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
      //           <li class="nav-item">
      //             <a class="nav-link active" aria-current="page" href="/">Home</a>
      //           </li>
      //           <li class="nav-item">
      //             <a class="nav-link" href="/formpage">Submit Scan</a>
      //           </li>
      //         </ul>
      //       </div>
      //     </div>
      //   </div>
      // </nav>
    //   <div class='container-fluid'>
    //     <div class="collapse" id="navbarToggleExternalContent">
    //       <div class="bg-dark">
    //         <h5><a class="nav-link active" style={{color: 'white'}} aria-current="page" href="/">Home</a></h5>
    //         <h5><a class="nav-link" style={{color: 'white'}} href="/formpage">Submit Scan</a></h5>
    //       </div>
    //     </div>
    //     <nav class="navbar navbar-dark bg-dark">
    //       <div class="container-fluid">
    //         <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
    //           <span>ImaginAI</span>
    //         </button>
    //       </div>
    //     </nav>
    // </div>
    <nav class="navbar bg-dark">
      <form class="container-fluid justify-content-start">
        <button class="btn btn-success me-2" type="button"><a class="nav-link" aria-current="page" href="/">ImaginAI</a></button>
        <button class="btn btn-success me-2" type="button"><a class="nav-link" aria-current="page" href="/formpage">Submit Scan</a></button>
      </form>
    </nav>
    )
}

export default NavBar;