import React from 'react';
import { BrowserRouter, Route, Switch,Link } from "react-router-dom";
import Register from './register';
import { Button,Form } from 'react-bootstrap';
import '../styles/login.css'
import axios from 'axios';
import alerta from '../static/alerta'

class Login extends React.Component{

    constructor(props){
        super(props)
        this.state={
            usuario:'',
            password:''
        }
    }
    peticionPost=(e)=>{
        e.preventDefault();
        const data=this.state;
        const url=`http://localhost:3001/api/login`;
        let formula=new FormData();
        formula.append('apellido',data.usuario);
        formula.append('password',data.password);
        axios.post(url,formula,{
            headers:{'Content-Type':'multipart-data'}
        }).then(resp=>{
            console.log(resp);
            if(resp.data.length===0){
                console.log('NO LOGEADO');
                alerta("Usuario incorrecto","error")
    
            }else{
                alerta("Correcto","success")
                console.log('LOGEADO CORRECTAMENTE')
                let usernombre=resp.data.nombre;
                let userid=resp.data.id;
                /*userdata= {...userdata}
                sessionStorage.setItem('userID', usuario.data[0].id);
                sessionStorage.setItem('userName', usuario.data[0].nombre);
                sessionStorage.setItem('userSurname', usuario.data[0].apellido);
                sessionStorage.setItem('userContra', usuario.data[0].contra);
                sessionStorage.setItem('userUsuario', usuario.data[0].usuario);
                sessionStorage.setItem('userDNI',usuario.data[0].dni)
                // agregarUsuarioStore(usuario.data[0])*/
                this.props.history.push({
                    pathname:`/dashboard`,
                    state:{usernombre,userid}
                   
                });    
            }
        });
        
        
        
        /*if(usuario.data.length===0){
            console.log('NO LOGEADO');
            alerta("Usuario incorrecto","error")

        }else{
            alerta("Correcto","success")
            console.log('LOGEADO CORRECTAMENTE')
            let userdata=usuario.data[0]
            /*userdata= {...userdata}
            sessionStorage.setItem('userID', usuario.data[0].id);
            sessionStorage.setItem('userName', usuario.data[0].nombre);
            sessionStorage.setItem('userSurname', usuario.data[0].apellido);
            sessionStorage.setItem('userContra', usuario.data[0].contra);
            sessionStorage.setItem('userUsuario', usuario.data[0].usuario);
            sessionStorage.setItem('userDNI',usuario.data[0].dni)
            // agregarUsuarioStore(usuario.data[0])
            this.props.history.push("/dashboard");    
        }*/
        
    }
    validateData=(e)=>{
        e.preventDefault()
        const form = e.currentTarget;
        console.log(e)
        if (form.checkValidity() === false) {
            console.log('INGRESE LOS DATOS')
          }
        else{
            console.log('Ingresando..')
        }
    }
    
    changeState=(e)=>{
        e.persist()
        this.setState({
         
             ...this.state.form,
           [e.target.name]:e.target.value
           })
    }

    render(){
        return(
          
              <div className="body">
                  <h1 className="heading">Happy Learning!</h1>
                  <div className="loginform">
                  <Form action="" onSubmit={(e)=>this.peticionPost(e)} className="borde">
                    <h5 className="cabecera">LOG IN </h5>
                    
                    <div className="cuerpo">
                    <Form.Group >
                        <Form.Label htmlFor="usuario">Username:</Form.Label>
                        <Form.Control id="usuario" name="usuario" required onChange={(e)=>this.changeState(e)} type="text"  />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label htmlFor="password">Password:</Form.Label>
                        <Form.Control id="password" name="password" required  onChange={e=>this.changeState(e)} type="password"  />
                    </Form.Group>
                    <Form.Group>
                        
                        <Link to="/register">Create an account</Link>
                    </Form.Group>
                    <Button type="submit" variant="info">Have Fun </Button>
                    </div>
                </Form>
                
                  </div>
                  
            </div>
         

        
          
        );
    }

}
export default Login;