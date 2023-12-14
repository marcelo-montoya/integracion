import { useCalculate } from "../hooks/useCalculate"

export const Balance = () => {

    const { total } = useCalculate()

    return (
        <div className="balance">
            <h3>Saldo</h3>
            {
                total < 0 ? (
                    <div>
                        <h1 style={{ color: 'red' }} > $ {total} </h1>
                        <strong style={{ color: 'red' }}> Tu saldo es negativo 😥 </strong>
                    </div>
                ) : (
                    <h1> $ {total} </h1>
                )
            }

        </div>
    )
}
