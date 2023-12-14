import { Button, ListGroup } from "react-bootstrap"
import { useGlobalState } from "../../hooks/useGlobalState"


export const TransactionList = () => {

    const { transactions, deleteTransaction } = useGlobalState()

  return (
    <div className="transaction-list" >
        <h3>Historial</h3>
        {
          <ListGroup style={{ maxHeight: '200px', overflowY: 'auto' }}>                  
                {transactions.map((transaction) => (
                  <ListGroup.Item key={transaction.id} className="d-flex justify-content-between align-items-center">
                    <span>{transaction.description}</span>
                    <span>${transaction.amount}</span>
                    <Button
                      variant="danger"
                      onClick={() => {
                        deleteTransaction(transaction.id);
                      }}
                    >
                      Borrar
                    </Button>
                  </ListGroup.Item>
                ))}
              </ListGroup>
        }
    </div>
  )
}
