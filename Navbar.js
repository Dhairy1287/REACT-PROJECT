function Navbar(){
    return(
        <>
 <nav class="navbar navbar-expand-lg navbar-custom">
    <div class="container-fluid">
      {/* <!-- Logo --> */}
      <a class="navbar-brand d-flex align-items-center" href="#">
        <img src="https://openweathermap.org/themes/openweathermap/assets/img/logo_white_cropped.png" alt="Logo"/>
      </a>

      {/* <!-- Search --> */}
      <form class="d-flex ms-3 search-box">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
          <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001l3.85 
          3.85a1 1 0 0 0 1.415-1.415l-3.85-3.85zm-5.242.656a5 5 0 1 1 
          0-10 5 5 0 0 1 0 10z"/>
        </svg>
        <input class="form-control form-control-sm" type="search" placeholder="Weather in your city" aria-label="Search"/>
      </form>


      <button class="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
        <span class="navbar-toggler-icon"></span>
      </button>

      {/* <!-- Menu --> */}
      <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul class="navbar-nav align-items-center">
          <li class="nav-item"><a class="nav-link" href="#">Guide</a></li>
          <li class="nav-item"><a class="nav-link" href="#">API</a></li>
          <li class="nav-item"><a class="nav-link" href="#">Dashboards</a></li>
          <li class="nav-item"><a class="nav-link" href="#">Marketplace</a></li>
          <li class="nav-item"><a class="nav-link" href="#">Pricing</a></li>
          <li class="nav-item"><a class="nav-link" href="#">Maps</a></li>
          <li class="nav-item"><a class="nav-link" href="#">Our Initiatives</a></li>
          <li class="nav-item"><a class="nav-link" href="#">Blog</a></li>
          <li class="nav-item"><a class="btn btn-business" href="#">For Business</a></li>
          <li class="nav-item"><a class="nav-link" href="#">Sign in</a></li>
          <li class="nav-item"><a class="nav-link" href="#">Support centre</a></li>
        </ul>
      </div>
    </div>
  </nav>
</>
    );
}
export default Navbar;