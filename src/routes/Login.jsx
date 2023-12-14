import { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { DefaultLayout } from '../layout/DefaultLayout'
import { useAuth } from '../auth/AuthProvider';
import { Navigate } from 'react-router-dom';


export const Login = () => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [login, setLogin] = useState('');
  const [clave, setClave] = useState('');
  const auth = useAuth()

  const onInputEmail = ({ target }) => {
    
    setEmail(target.value);
    
  };
  
  const onInputPassword = ({ target }) => {

    setPassword(target.value);
    
  };
  const onInputLogin = ({ target }) => {
    
    setLogin(target.value);
    
  };
  const onInputClave = ({ target }) => {
    
    setClave(target.value);
    
  };
  if ( auth.isAuthenticated ) {
    return < Navigate to="/dashboard" />
  }

  
  const handleLogin = async () => {
    try {
      const response = await fetch('http://localhost:4600/login', {
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


  return (
        < DefaultLayout >
        
             <Container className="d-flex align-items-center justify-content-center" style={{ height: '100vh' }}>
               <Row>
                 <Col>
                   <Form>
                     <Form.Group controlId="formUsername">
                       <Form.Label>Usuario</Form.Label>
                       <Form.Control 
                       type="text" 
                       placeholder="Ingrese su correo Usuario"
                       value={ login }
                       onChange={onInputLogin}
                       />
                     </Form.Group>
    
                     <Form.Group controlId="formPassword">
                       <Form.Label>Contraseña</Form.Label>
                       <Form.Control 
                       type="password" 
                       placeholder="Ingrese su contraseña"
                       value={ clave }
                       onChange={onInputClave}
                       />
                     </Form.Group>
    
                     <Button onClick={handleLogin} variant="primary" type="submit"> Login </Button>
                   </Form>
                 </Col>
               </Row>
             </Container>
        </DefaultLayout>
  );
};