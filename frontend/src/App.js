import Header from "./components/Header";
import Footer from "./components/Footer";
import { Container } from "react-bootstrap";
import Main from "./components/Main";

const App = () => {
  return (
    <div>
      <Header/>
      <Main/> 
      <Footer/>
    </div>
  );
}

export default App;
