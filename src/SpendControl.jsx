import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { GlobalProvider } from "./context/GlobalState"

import { Balance, Chart, IncomeExpenses } from "./components"
import { TransactionForm, TransactionList } from "./components/transactions"


function SpendControl() {

  return (

    <GlobalProvider>
      <Container>
        <Row >
          <Col> < TransactionForm /> </Col>
          <Col> < Chart /> </Col>
        </Row>
        <Row className="cifras">
          <Col> < Balance /> </Col>
          <Col> < IncomeExpenses /> </Col>
          <Col> < TransactionList /> </Col>
        </Row>
      </Container>
    </GlobalProvider>
  )
}

export default SpendControl
