import React from 'react'
import '../styles/cuarto.css'
import {Table} from 'react-bootstrap'
import telefono from '../img/telefono.png'
import teatro from '../img/teatro.png'
import sorpresa from '../img/sorpresa.png'
import bicicleta from '../img/bicicleta.png'
import {Button} from 'react-bootstrap'
import axios from 'axios'
import alerta from '../static/alerta2'

class fourthgame extends React.Component{
    constructor(props){
        super(props)
        this.state={
            data:[],
            a1:'',
            a2:'',
            a3:'',
            a4:'',
            a5:'',
            a6:'',
            a7:'',
            a8:'',
            a9:'',
            a10:'',
            a11:'',
            a12:'',
            a13:'',
            a14:'',
            a15:'',
            a16:'',
            unidad:'auxiliar'
        }
    }
    changeState=(e)=>{
        e.persist();
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    capturar=(i)=>{
       console.log(this.state.data[i])
        if(this.state.a1===this.state.data[i].a1){
            if(this.state.a2===this.state.data[i].a2){
                if(this.state.a3===this.state.data[i].a3){
                    if(this.state.a4===this.state.data[i].a4){
                        alerta("You're awesome!!!","success")
                    }else{
                        alerta("Check 4 answer","error")
                    }
                }else{
                    alerta("Check 3 answer","error")
                }
            }else{
                alerta("Check 2 answer","error") 
            }

        }else{
            alerta("Check 1 answer","error")
        }
    }
    capturar2=(i)=>{
        console.log(this.state.data[i])
         if(this.state.a5===this.state.data[i].a1){
             if(this.state.a6===this.state.data[i].a2){
                 if(this.state.a7===this.state.data[i].a3){
                     if(this.state.a8===this.state.data[i].a4){
                         alerta("You're awesome!!!","success")
                     }else{
                         alerta("Check 4 answer","error")
                     }
                 }else{
                     alerta("Check 3 answer","error")
                 }
             }else{
                 alerta("Check 2 answer","error") 
             }
 
         }else{
             alerta("Check 1 answer","error")
         }
     }
     capturar3=(i)=>{
        console.log(this.state.data[i])
         if(this.state.a9===this.state.data[i].a1){
             if(this.state.a10===this.state.data[i].a2){
                 if(this.state.a11===this.state.data[i].a3){
                     if(this.state.a12===this.state.data[i].a4){
                         alerta("You're awesome!!!","success")
                     }else{
                         alerta("Check 4 answer","error")
                     }
                 }else{
                     alerta("Check 3 answer","error")
                 }
             }else{
                 alerta("Check 2 answer","error") 
             }
 
         }else{
             alerta("Check 1 answer","error")
         }
     }
     capturar4=(i)=>{
        console.log(this.state.data[i])
         if(this.state.a13===this.state.data[i].a1){
             if(this.state.a14===this.state.data[i].a2){
                 if(this.state.a15===this.state.data[i].a3){
                     if(this.state.a16===this.state.data[i].a4){
                         alerta("You're awesome!!!","success")
                     }else{
                         alerta("Check 4 answer","error")
                     }
                 }else{
                     alerta("Check 3 answer","error")
                 }
             }else{
                 alerta("Check 2 answer","error") 
             }
 
         }else{
             alerta("Check 1 answer","error")
         }
     }
    handleReset = (a) => {
        Array.from(document.querySelectorAll(a)).forEach(
          input => (input.value = "")
        );
        if("primera"){
            this.setState({
                a1:'',
                a2:'',
                a3:'',
                a4:''
              })
        }
        if("segunda"){
            this.setState({
                a5:'',
                a6:'',
                a7:'',
                a8:''
              })
        }
        if("tercera"){
            this.setState({
                a9:'',
                a10:'',
                a11:'',
                a12:''
              })
        }
        if("cuarta"){
            this.setState({
                a13:'',
                a14:'',
                a15:'',
                a16:''
              })
        }
       
      };
    componentDidMount(){
        const url=`http://localhost:3001/api/ejercicio/${this.state.unidad}`;
        axios.get(url).then(res=>{
            this.setState({
                data:res.data
            })
            console.log("Este es cuarto juego");
            console.log(this.state.data);
        })
    }
    render(){
        return(
            <div className="alma">
                <h1 className="titulo" style={{color:'#16697a'}}>Auxiliar Verb</h1>
                 <p  style={{width:'80%',fontSize:'19px',margin:'auto', fontFamily:"'Montserrat Alternates', sans-serif",color:'#495464'}}>Remember:</p>
                <Table style={{width:'35%',margin:'auto'}} striped bordered hover size="sm">
                    <thead>
                        <tr>
                        <th style={{width:'25%'}}>Affirmative</th>
                        <th style={{width:'25%'}}>Negative</th>
                        <th style={{width:'35%'}}>Subject</th>
                        
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td rowspan="4">Do</td>
                         <td rowspan="4">Don't</td>
                        <td>I</td>
                        </tr>
                        <tr>
                        <td>You</td>
                        </tr>
                        <tr>
                        <td>We</td>
                        </tr>
                        <tr>
                        <td>They</td>
                        </tr>
                        <tr>
                        <td rowspan="3">Does</td>
                        <td rowspan="3">Doesn't</td>
                        <td>He</td>
                        </tr>
                        <tr>
                            <td>She</td>
                        </tr>
                        <tr>
                            <td>It</td>
                        </tr>
                        
                    </tbody>
                </Table>
                <div className="general">
                    <p style={{fontSize:'19px', fontFamily:"'Montserrat Alternates', sans-serif",color:'#495464'}}>Excercises:</p>
                    <div className="poolpreguntas">
                        <div className="pregunta">
                            <div className="texto">
                                <span>A: Do you{" "}<input className="primera" value={this.state.a1} id="a1" name="a1" onChange={(e)=>this.changeState(e)} type="text"/> (talk)on the phone everyday ?</span><br/>
                                <span>B: No, I <input className="primera" value={this.state.a2} id="a2" name="a2" onChange={(e)=>this.changeState(e)} type="text"/>. Do you <input className="primera" value={this.state.a3} id="a3" name="a3" onChange={(e)=>this.changeState(e)} type="text"/> salsa?</span><br/>
                                <span>C: Yes, I <input className="primera" value={this.state.a4} id="a4" name="a4" onChange={(e)=>this.changeState(e)} type="text"/>.</span>


                            </div>
                            <div className="img">
                                <img src={telefono} alt="telefono" height="100px"/>
                            </div>

                        </div>
                        <div className="opciones" >
                        <Button onClick={()=>this.capturar(0)} variant="success">Review</Button>{' '}
                        <Button onClick={()=>this.handleReset("primera")} variant="warning" >Clear</Button>
                        </div>
                        <div className="pregunta">
                            <div className="texto">
                                <span>A: <input className="segunda" value={this.state.a5} id="a5" name="a5" onChange={(e)=>this.changeState(e)} type="text"/> your brother go the <input className="segunda" value={this.state.a6} id="a6" name="a6" onChange={(e)=>this.changeState(e)} type="text"/>?</span><br/>
                                <span>B: No, I <input className="segunda" value={this.state.a7} id="a7" name="a7" onChange={(e)=>this.changeState(e)} type="text"/>. Do you <input className="segunda" value={this.state.a8} id="a8" name="a8" onChange={(e)=>this.changeState(e)} type="text"/> the guitar?</span><br/>
                                <span>C: No, I don't.</span>
                            </div>
                            <div className="img">
                                <img src={teatro} alt="" height="100px"/>
                            </div>

                        </div>
                        <div className="opciones" >
                        <Button onClick={()=>this.capturar2(1)}variant="success">Review</Button>{' '}
                        <Button onClick={()=>this.handleReset("segunda")}variant="warning">Clear</Button>
                        </div>
                        <div className="pregunta">
                            <div className="texto">
                                <span>A:<input className="tercera" value={this.state.a9} id="a9" name="a9" onChange={(e)=>this.changeState(e)} type="text"/> your mother <input className="tercera" value={this.state.a10} id="a10" name="a10" onChange={(e)=>this.changeState(e)} type="text"/> presents for you?</span><br/>
                                <span>B: Yes, she <input className="tercera" value={this.state.a11} id="a11" name="a11" onChange={(e)=>this.changeState(e)} type="text"/>. Do you visit the National Park?</span><br/>
                                <span>C: No, I <input className="tercera" value={this.state.a12} id="a12" name="a12" onChange={(e)=>this.changeState(e)} type="text"/></span>
                            </div>
                            <div className="img">
                                <img src={sorpresa} alt="" height="100px"/>
                            </div>

                        </div>
                        <div className="opciones" >
                        <Button onClick={()=>this.capturar3(2)} variant="success">Review</Button>{' '}
                        <Button onClick={()=>this.handleReset("tercera")} variant="warning">Clear</Button>
                        </div>
                        <div className="pregunta">
                            <div className="texto">
                                <span>A:Do you <input className="cuarta" value={this.state.a13}id="a13" name="a13" onChange={(e)=>this.changeState(e)} type="text"/> a bike in the park?</span><br/>
                                <span>B: Yes, I <input className="cuarta" value={this.state.a14} id="a14" name="a14" onChange={(e)=>this.changeState(e)} type="text"/>. Do you <input className="cuarta" value={this.state.a15} id="a15" name="a15" onChange={(e)=>this.changeState(e)} type="text"/> fairy tales?</span><br/>
                                <span>C: No, I <input className="cuarta" value={this.state.a16} id="a16" name="a16" onChange={(e)=>this.changeState(e)} type="text"/></span>
                            </div>
                            <div className="img">
                                <img src={bicicleta} alt="" height="100px"/>
                            </div>

                        </div>
                        <div className="opciones" >
                        <Button onClick={()=>this.capturar4(3)} variant="success">Review</Button>{' '}
                        <Button onClick={()=>this.handleReset("cuarta")}variant="warning">Clear</Button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
   
}
export default fourthgame;