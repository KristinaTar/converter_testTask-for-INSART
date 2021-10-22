import React from 'react';
import {Col, Container, Table, Row} from "react-bootstrap";


const CurrencyTable = (props) => {
let date = new Date();

    return <Container>
            <Row className="justify-content-md-center mt-5" >
                <Col md={9} >
                    <Table className="currencyRatesTable" striped bordered hover variant="dark">
                        <thead>
                        <tr>
                            <th >Currency<br/>
                                {`${date.getFullYear()}/${date.getMonth()+1}/${date.getDate()}`}
                            </th>
                            <th >Buy</th>
                            <th >Sell</th>
                        </tr>
                        </thead>
                        <tbody>
                        {/* eslint-disable-next-line array-callback-return */}
                        {props.currencyRates.map(e=>{
                            if((e.ccy!=="RUR")){
                                return <tr key={e.ccy}>
                                        <td>{e.ccy + "/" + e.base_ccy}</td>
                                        <td>{(Math.round((e.buy) *100)/100)}</td>
                                        <td>{(Math.round((e.sale)*100)/100)}</td>
                                    </tr>
                            }
                            })}

                        </tbody>
                    </Table>
                </Col>
            </Row>
        </Container>
}
export default CurrencyTable;