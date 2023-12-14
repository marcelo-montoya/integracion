import { Table } from "react-bootstrap"

import { useCalculate } from "../hooks/useCalculate"


export const IncomeExpenses = () => {

    const { ingreso, gasto } = useCalculate()

    return (


      <div className="income-expenses">

        <Table striped>
        <thead>
          <tr>
            <th>Ingresos</th>
            <th>Gastos</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{ingreso}</td>
            <td>{gasto}</td>
          </tr>
        </tbody>
      </Table>
      </div>



    )

}


