import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';
import { Banner } from './Pages/Home/Banner/banner';
import { Banner_2 } from './Pages/Home/Banner_2/banner_2';
// import {Cadastro} from './Pages/Cadastro/Cadastro/cadastro';
import { Header } from './Pages/Home/Header/header';
import { Footer } from './Pages/Home/Footer/footer';
import { Cardpr } from './Pages/Home/Card/Cardpr';


function App() {
  return (

    <div className="App">
      <Header />
      <Banner />
      <Banner_2 />
      <Cardpr />
      <Footer/>
    </div>
  );
}

export default App;
