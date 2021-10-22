import React from 'react';
import {Container, Form, Row, Col} from "react-bootstrap";

const currencyList = ['UAH', 'USD', 'EUR', 'BTC'];

function Converter(props) {
    let inputRight = React.useRef();
    let inputLeft = React.useRef();
    let formSelectLeft = React.useRef();
    let formSelectRight = React.useRef();


    function changeInputRight() {
        if (formSelectRight.current.value==='BTC'){
            inputRight.current.value = inputLeft.current.value * props.ratio[formSelectLeft.current.value][formSelectRight.current.value];
        } else {
            inputRight.current.value = Math.round(inputLeft.current.value * props.ratio[formSelectLeft.current.value][formSelectRight.current.value] * 100) / 100;

        }
    }

    function changeInputLeft() {
        if (formSelectLeft.current.value==='BTC'){
            inputLeft.current.value = inputRight.current.value * props.ratio[formSelectRight.current.value][formSelectLeft.current.value];
        }else {
            inputLeft.current.value = Math.round(inputRight.current.value * props.ratio[formSelectRight.current.value][formSelectLeft.current.value] * 100) / 100;
        }
    }


    function switchCurrency() {
        let selectedIndexLeft = formSelectLeft.current.selectedIndex;
        let selectedIndexRight = formSelectRight.current.selectedIndex;

        formSelectLeft.current.selectedIndex = selectedIndexRight;
        formSelectRight.current.selectedIndex = selectedIndexLeft;
        changeInputRight();
    }


    return <Container>
            <Row className="justify-content-md-center">
                <Col md={9}>
                    <Container style={{marginTop: 30, justifyContent: 'center'}}>
                        <Row className="justify-content-md-center">

                            <Col xs={6} lg={3}>

                                <Form.Control ref={inputLeft} onInput={changeInputRight} type="number"
                                              placeholder="Amount"/>
                                <Form.Text>Change</Form.Text>
                            </Col>
                            <Col xs={6} lg={2}><Form.Select ref={formSelectLeft} onChange={changeInputRight}
                                                            aria-label="Default select example">
                                {currencyList.map(item => <option key={item}>{item}</option>)}
                            </Form.Select> </Col>

                            <Col xs={12} lg={2} style={{textAlign: 'center'}}><i className="fas fa-exchange-alt"
                                                                                 style={{
                                                                                     paddingLeft: 20,
                                                                                     paddingRight: 20,
                                                                                     fontSize: 30
                                                                                 }}
                                                                                 onClick={switchCurrency}/></Col>

                            <Col xs={6} lg={3}>
                                <Form.Control ref={inputRight} onInput={changeInputLeft} type="number"
                                              placeholder="Amount"/>
                                <Form.Text>Get</Form.Text>
                            </Col>
                            <Col xs={6} lg={2}><Form.Select ref={formSelectRight} onChange={changeInputRight}
                                                            aria-label="Default select example">
                                {currencyList.map(item => <option key={item}>{item}</option>)}
                            </Form.Select></Col>
                        </Row>

                    </Container>
                </Col>
            </Row>
        </Container>
}

export default Converter;