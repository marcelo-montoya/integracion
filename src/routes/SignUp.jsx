import { Container, Form, Button } from 'react-bootstrap';
import { DefaultLayout } from '../layout/DefaultLayout';
import { useState } from 'react';
import { useAuth } from '../auth/AuthProvider';
import { Navigate } from 'react-router-dom';




export const SignUp = () => {

  const [login, setName] = useState("")
  const [surname, setSurname] = useState("")
  const [email, setEmail] = useState("")
  const [clave, setPassword] = useState("")
  const [formData, setFormData] = useState({
    login: "",
    clave: ""
  })
  const auth = useAuth()


  const onInputName = ({ target }) => {

    setName(target.value);

  };

  const onInputSurname = ({ target }) => {

    setSurname(target.value);

  };

  const onInputEmail = ({ target }) => {

    setEmail(target.value);

  };

  const onInputPassword = ({ target }) => {

    setPassword(target.value);

  };


  if (auth.isAuthenticated) {
    return < Navigate to="/dashboard" />
  }

  const CreaUsuario = async () => {
    try {
      const response = await fetch('http://localhost:4600/usuarios', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ login, clave }),
      });
  
      if (!response.ok) {
        throw new Error('Error en la solicitud');
        // Puedes agregar un bloque else aquí si lo necesitas
      } else {
        // Manejo específico cuando response.ok es verdadero
        const token = await response.text();
        console.log('Token recibido:', token);
        setAuth({ isAuthenticated: true });
        // Puedes hacer algo más con el token, como guardarlo en el estado del componente o en localStorage.
        // Ejemplo:
        // setToken(token);
      }
    } catch (error) {
      console.error('Error en la solicitud:', error);
      // Aquí puedes manejar errores, por ejemplo, mostrar un mensaje al usuario.
    }
  };
/*
  const CreaUsuario = async () => {
    try {
      const { login, clave } = formData
      const data = new FormData()
      data.append("login", login)
      data.append("clave", clave)
      const response = await fetch("http://localhost:4600/usuarios", {
        method: "POST",
        body: data
      })
      const post = await response.json()
      console.log(post);
    } catch (error) {
      console.log(error);
    }

  };*/

  return (

    <DefaultLayout>
      <Container className="d-flex align-items-center justify-content-center" style={{ height: '100vh' }}>
        <Form>
          <h1>Registro de Usuarios</h1>

          <Form.Group controlId="formFirstName">
            <Form.Label>Usuario</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ingrese su nombre"
              value={login}
              onChange={onInputName}
            />
          </Form.Group>



          <Form.Group controlId="formPassword">
            <Form.Label>Clave</Form.Label>
            <Form.Control
              type="password"
              placeholder="Ingrese su contraseña"
              value={clave}
              onChange={onInputPassword}
            />
          </Form.Group>

          <Button onClick={CreaUsuario} variant="primary" type="submit">Crear usuario</Button>
        </Form>
      </Container>
    </DefaultLayout>






    //     < DefaultLayout>

    // <h1>Sign Up</h1>

    // <form>
    //   <label>Nombre</label>
    //   <input type="text" />
    //   <label>Apellido</label>
    //   <input type="text" />

    //   <label>Correo</label>
    //   <input type="email" />

    //   <label>Contraseña</label>
    //   <input type="password" />

    //   <button>Crear usuario</button>



    // </form>
    // </DefaultLayout>
  )
}
