
import About from './About';
import './App.css';
import Navbar from './Component/Navbar';
// import Password from './Component/Password';
import Textform from './Component/Textform';
function App() {

    return ( 
        <>
<Navbar title = {7 } home ='Go to home'/>

{/* <div className="container my-4" style={mystyle}>
{/* <Password/> */}
<Textform title= "Props from main file i.e App.js"/>
{/* <div className="d-grid gap-3 col-6 mx-auto">
  <button className="btn btn-primary" type="button" id = 'but'>Add files&nbsp;&nbsp;&nbsp;  <img className='icon' src="add_photo.svg" alt="icon" /></button>
  <button className="btn btn-primary" type="button">Gallery &nbsp;&nbsp;&nbsp; <img src="photo_library.svg" alt="icon" /></button>
</div> */}

{/* </div> */}
 {/* /} */}

<About/>
    
         </>
    );
}

export default App;