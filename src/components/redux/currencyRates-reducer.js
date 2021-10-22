const SET_CURRENCY = "SET_CURRENCY";


let initialState = {
    currencyRates: []

}

const currencyRatesReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CURRENCY:
            return {
                ...state,
                currencyRates: action.currencyRates
            }
        default:
            return state;
    }
}

export const setCurrency = (currencyRates) => ({type: SET_CURRENCY, currencyRates});

export const getCurrencyRates = () => async (dispatch) => {
    errorImitation();
    let response, json;
    try{
        response = await fetch('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5');
        json = await response.json();
        if (+localStorage.getItem('countRequests') === 5)  {
            json = undefined;
            throw new Error();
        }
    }catch{
        console.log('API error');
    }
    dispatch(setCurrency(json));

}

function errorImitation() {
    let n = localStorage.getItem('countRequests');
    if (n === null) n = 0;
    if (n >= 5) n = 0;
    n++;

    localStorage.setItem("countRequests", n);
}


export default currencyRatesReducer;