import Header from './Components/Header/Header';
import Nav from './Components/Nav/Nav';
import About from './Components/About/About'
import Portfolio from './Components/Portfolio/Portfolio'
import Contact from './Components/Contact/Contact';


const App = () =>{

    return(
       <>
        <Header/>
        <Nav />
        <About/>
        <Portfolio/>
        <Contact/>
       </>
    );
}

export default App;