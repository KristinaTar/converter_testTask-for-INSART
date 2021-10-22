import CurrencyTable from "./CurrencyTable";
import React from "react";
import {compose} from "redux";
import {connect} from "react-redux";
import ErrorMessage from "./ErrorMessage";

const CurrencyTableContainer = (props) => {
    if (props.currencyRates)
    return <CurrencyTable currencyRates={props.currencyRates} />
    else return <ErrorMessage/>
}

let mapStateToProps = (state) => ({
    currencyRates: state.currencyRatesReducer.currencyRates
});

export default  compose(connect(mapStateToProps,{}))(CurrencyTableContainer);

