
import './App.css';
function App() {
    return ( 
        <>

<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="google.com">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="google.com">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="google.com">Link</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="google.com" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="google.com">Action</a></li>
            <li><a className="dropdown-item" href="google.com">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="google.com">Something else here</a></li>
          </ul>
        </li>
     
      </ul>
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
<div className="container">
<div className="d-grid gap-3 col-8 mx-auto">
  <button className="btn btn-primary" type="button">Add files&nbsp;&nbsp;&nbsp;  <img className='icon' src="add_photo.svg" alt="icon" /></button>
  <button className="btn btn-primary" type="button">Gallery &nbsp;&nbsp;&nbsp; <img src="photo_library.svg" alt="icon" /></button>
</div>
</div>

    
         </>
    );
}

export default App;