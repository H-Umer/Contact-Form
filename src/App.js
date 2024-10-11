import './App.css';
import ContactForm from './components/ContactForm/ContactForm';
import ContactHeader from './components/ContactHeaderSection/ContactHeader';
import Navbar from './components/Navbar.css/Navbar';

function App() {
  return (
    <>
      <Navbar/> 
      <ContactHeader/>
      <ContactForm/>
    </>
  );
}

export default App;
