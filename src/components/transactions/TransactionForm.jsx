
import { Form } from "react-bootstrap"
import { Button } from "react-bootstrap"
import { useState } from "react"
import { useGlobalState } from "../../hooks/useGlobalState"


export const TransactionForm = () => {
  const { addTransaction } = useGlobalState();
  const [ description, setDescription ] = useState('');
  const [ amount, setAmount ] = useState('');

  const onInputChangeDescription = ({ target }) => {
    setDescription(target.value);
  };

  const onInputChangeAmount = ({ target }) => {
    setAmount(target.value);
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    if (amount.length === 0 || amount === 0) return;
    if (description.trim().length <= 1) return;

    // Llamada al servicio '/ingitem'
    try {
      const authorizationHeader = "Bearer YOUR_ACCESS_TOKEN"; // Reemplaza con el token de autenticación válido
      const response = await fetch('http://localhost:4600/ingitem', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: authorizationHeader,
        },
        body: JSON.stringify({
          id_ppto_ingreso: 1, // Reemplaza con la lógica para obtener el ID correcto
          fecha: new Date().toISOString(), // Puedes ajustar la lógica para obtener la fecha correcta
          monto_item: parseFloat(amount),
          descripcion: description,
        }),
      });

      if (!response.ok) {
        throw new Error('Error en la solicitud');
      } else {
        console.log('Presupuesto actualizado correctamente');
      }
    } catch (error) {
      console.error('Error al enviar la solicitud:', error);
    }

    // Añade la transacción localmente
    addTransaction({
      id: window.crypto.randomUUID(),
      description,
      amount: parseInt(amount),
    });

    // Restablece los campos del formulario después de enviar la solicitud
    setDescription('');
    setAmount('');
  };


  return (
    <div className="form">
      <Form onSubmit={onSubmit}>
        <Form.Group className="mb-3" controlId="formDescription">
          <Form.Control
            type="text"
            placeholder="Ingresa una descripción"
            onChange={onInputChangeDescription}
            value={description}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formAmount">
          <Form.Control
            type="number"
            placeholder="Ingresa un monto"
            onChange={onInputChangeAmount}
            value={amount}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Ingresar
        </Button>
      </Form>
    </div>
  );
};  