import React from 'react';
import {Col, Container, Table} from "react-bootstrap";

const CurrencyRate= (props) => {



    return <>
        <Container >
            <Col sm={3} md={2}>
            <Table striped bordered hover variant="dark">
            <thead>
            <tr>
                <th>Currency<br/>
                    Current Date</th>
                <th>Buy</th>
                <th>Sell</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                 <td>USD/UAH</td>
            <td></td>
            <td></td>
            </tr>
            <tr>
                <td>EUR/UAH</td>
                <td></td>
                <td></td>

            </tr>
            <tr>
                <td>BTC/USD</td>
                <td> </td>
                <td> </td>
            </tr>

            </tbody>
        </Table>
            </Col>
    </Container>



    </>
}
export default CurrencyRate;