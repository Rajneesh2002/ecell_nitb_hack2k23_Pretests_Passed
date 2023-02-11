import React from "react";

function Home()
{
    return(
        
 <nav className="navbar navbar-expand-lg navbar-dark bg-primary ">
  <a className="navbar-brand p-xl-2" href="/">Home</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" >
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link navbar-brand" href="/">Login</a>
      </li>
      <li className="nav-item">
        <a className="nav-link navbar-brand" href="/">New User</a>
      </li>
      <li className="nav-item">
        <a className="nav-link navbar-brand" href="/">Contact Us</a>
      </li>
      <li className="nav-item">
        <a className="nav-link navbar-brand" href="/">Logout</a>
      </li>
    </ul>
  </div>
</nav>
    );
}

export default Home