import { useGlobalState } from "./useGlobalState"



export const useCalculate = () => {

    const { transactions } = useGlobalState()

    const amount = transactions.map(transaction => transaction.amount)

    const total = amount.reduce( ( acc, item ) => ( acc += item ), 0 )

    const ingreso = transactions.filter(transaction => transaction.amount > 0).reduce((acc, transaction) => (acc += transaction.amount), 0)

    const gasto = transactions.filter(transaction => transaction.amount < 0).reduce((acc, transaction) => (acc += transaction.amount), 0) * - 1

  return {
    total,
    ingreso,
    gasto
  }
}