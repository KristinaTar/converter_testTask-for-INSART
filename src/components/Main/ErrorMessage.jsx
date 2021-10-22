import React from 'react';


const ErrorMessage=()=>{
    return<div style={{textAlign:'center', paddingTop:'10%', fontSize:'xx-large'}}>

        <i className="far fa-tired" style={{fontSize:'100px', color:'#ff8c00'}}></i>
        <p> Opps, an server error has occurred! We are working hard to fix the problem.<br/>
        Please try again later.</p>

        </div>

}
export default ErrorMessage;
