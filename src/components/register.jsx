import React from 'react';

import { Button,Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../styles/register.css';
import alerta from '../static/alerta'
import axios from 'axios';


class Register extends React.Component{

    constructor(props){
        super(props)
        this.state={
            firstname:'',
            lastname:'',
            username:'',
            password:'',
            down:'alumno'
        }
    }
    /*validateData=(e)=>{
        e.preventDefault()
        const form = e.currentTarget;
        console.log(e)
        if (form.checkValidity() === false) {
            console.log('INGRESE LOS DATOS')
          }
        else{
            console.log('Ingresando..');
            this.peticionPost();
        }
    }*/
    
    changeState=(e)=>{
        
            e.persist()
            this.setState({
             
                 ...this.state.form,
               [e.target.name]:e.target.value
               })    
    }
    gestion=(e)=>{
        this.setState({
          down:e.target.value
        })
    }

    peticionPost=(e)=>{
        e.preventDefault();
        const data=this.state;
        const url=`http://localhost:3001/api/register`;
        let formula=new FormData();
        formula.append('nombre',data.firstname);
        formula.append('apellido',data.lastname);
        formula.append('rol',data.down);
        formula.append('password',data.password);
        axios.post(url,formula,{
            headers:{'Content-Type':'multipart-data'}
        });
        console.log('Usuario creado');

        this.setState({
            firstname:'',
            lastname:'',
            username:'',
            password:'',

        })

        alerta('Usuario Creado','success');
        
    }


    render(){
        return(
            <div className="body">
                  <h1 className="heading">Happy Learning!</h1>
                  <div className="loginform">
                  <Form action="" onSubmit={(e)=>this.peticionPost(e)} className="bordenuevo">
                    <h5 className="cabecera">Register</h5>
                    
                    <div className="cuerpo">
                    <Form.Group >
                        <Form.Label htmlFor="firstname">FirstName:</Form.Label>
                        <Form.Control required id="firstname" name="firstname" value={this.state.firstname} onChange={(e)=>this.changeState(e)} type="text"  />
                    </Form.Group>
                    <Form.Group >
                        <Form.Label htmlFor="lastname">Last Name:</Form.Label>
                        <Form.Control id="lastname" name="lastname" required value={this.state.lastname} onChange={(e)=>this.changeState(e)} type="text"  />
                    </Form.Group>
                    <Form.Group >
                        <Form.Label htmlFor="username">Username:</Form.Label>
                        <Form.Control id="username" name="username" required value={this.state.username} onChange={(e)=>this.changeState(e)} type="text"  />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label htmlFor="password">Password:</Form.Label>
                        <Form.Control  id="password" name="password" required value={this.state.password} onChange={e=>this.changeState(e)} type="password"  />
                    </Form.Group>
                    
                    <Form.Group>
                        <Form.Label>Rol: </Form.Label>{" "}
                        <select style={{padding:"5px",borderRadius:"5px"}} value={this.state.down} onChange={this.gestion.bind(this)}>
                        <option value="alumno">Alumno</option>
                        <option value="profesor">Docente</option>
                        
                        </select>
                    </Form.Group>
                    <Form.Group>
                        <Link to="/">Go back to the Login</Link>
                    </Form.Group>
                    <Button type="submit" variant="info" >Register </Button>
                    </div>
                </Form>
                
                  </div>
                  
            </div>
          
        );
    }

}
export default Register;