import React from "react";
import Converter from "./Converter";
import {compose} from "redux";
import {connect} from "react-redux";


const ConverterContainer = (props) => {
    // 0: {ccy: 'USD', base_ccy: 'UAH', buy: '26.05000', sale: '26.45000'}
    // 1: {ccy: 'EUR', base_ccy: 'UAH', buy: '30.00000', sale: '30.60000'}
    // 2: {ccy: 'RUR', base_ccy: 'UAH', buy: '0.35500', sale: '0.38500'}
    // 3: {ccy: 'BTC', base_ccy: 'USD', buy: '58707.3590', sale: '64887.0810'}
const usdIndex = 0;
const eurIndex = 1;
const btcIndex = 3;
let ratio = {};

if(!props.currencyRates) return null;
if(props.currencyRates.length) ratio = {
        UAH: {
            UAH: 1,
            USD: 1 / props.currencyRates[usdIndex].sale,
            EUR: 1 / props.currencyRates[eurIndex].sale,
            BTC: 1 / props.currencyRates[usdIndex].sale / props.currencyRates[btcIndex].sale
        },
        USD: {
            UAH: +props.currencyRates[usdIndex].buy,
            USD: 1,
            EUR: props.currencyRates[usdIndex].buy / props.currencyRates[eurIndex].sale,
            BTC: 1 / props.currencyRates[btcIndex].sale
        },
        EUR: {
            UAH: +props.currencyRates[eurIndex].buy,
            USD: props.currencyRates[eurIndex].buy / props.currencyRates[usdIndex].sale,
            EUR: 1,
            BTC: props.currencyRates[eurIndex].buy / props.currencyRates[usdIndex].sale / props.currencyRates[btcIndex].sale
        },
        BTC: {
            UAH: props.currencyRates[btcIndex].buy * props.currencyRates[usdIndex].buy,
            USD: +props.currencyRates[btcIndex].buy,
            EUR: props.currencyRates[btcIndex].buy * props.currencyRates[usdIndex].buy / props.currencyRates[eurIndex].sale,
            BTC: 1
        }
    }


return <Converter ratio = {ratio} />
}

let mapStateToProps = (state) => ({
    currencyRates: state.currencyRatesReducer.currencyRates
});

export default compose(connect(mapStateToProps, {}))(ConverterContainer);
