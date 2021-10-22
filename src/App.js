import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from "./components/Header/Header";
import CurrencyTableContainer from "./components/Main/CurrencyTableContainer";
import ConverterContainer from "./components/Main/ConverterContainer";
import React from "react";
import Footer from "./components/Footer/Footer";


function App() {

    return <>
<Header/>
<CurrencyTableContainer />
<ConverterContainer/>
<Footer/>
</>
}

export default App;
