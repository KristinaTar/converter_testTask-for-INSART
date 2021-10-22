import React, {useEffect} from 'react';
import App from "./App";
import {getCurrencyRates} from "./components/redux/currencyRates-reducer";
import {connect} from "react-redux";
import {compose} from "redux";

const AppContainer= (props) => {
    useEffect(()=>{
        props.getCurrencyRates();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return  <App />
}


let mapStateToProps = (state) => ({});

export default compose (connect(mapStateToProps, {getCurrencyRates}))(AppContainer);
