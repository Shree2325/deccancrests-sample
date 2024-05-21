import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Hero';
import Contact from './components/Contact';
import Card from './components/Card';
import About from './components/About';
function App() {

  const menuItems = [
    {
      label:"Home",
      link:"/"
    },
    {
      label:"About",
      link:"/abt"
    },
    {
      label:"Services",
      link:"/servces"
    },
    {
      label:"Contact",
      link:"/cntact"
    }
  ];
  

  return (
    <>
   <Header menuItems={menuItems}/>
    <Main/>
    
   <Footer/>
    </>
  );
}

export default App;
