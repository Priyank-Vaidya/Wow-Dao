import React from 'react';

export const NavBar = () => {

    return(
    <nav class="navbar bg-dark fixed-top">
      <form class="container-fluid justify-content-start">
        <button class="btn btn-success me-2" type="button"><a class="nav-link" aria-current="page" href="/">ImaginAI</a></button>
        <button class="btn btn-success me-2" type="button"><a class="nav-link" aria-current="page" href="/formpage">Submit Scan</a></button>
      </form>
    </nav>
    )
}

export default NavBar;