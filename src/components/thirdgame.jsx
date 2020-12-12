import '../styles/thirdgame.css'
import { Link } from 'react-router-dom';
import {Button} from 'react-bootstrap';
import React from 'react'
import image from '../img/horapng.png';
import axios from 'axios';
import alerta from '../static/alerta2'
class thirdgame extends React.Component{
    constructor(props){
        super(props);
        this.state={
            data:[],
            a1:'',
            a2:'',
            a3:'',
            a4:'',
            a5:'',
            a6:'',
            unidad:'tiempo'
        }

    }

    changeState=(e)=>{
        e.persist();
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    capturar=()=>{
       /* if(this.state.a1==this.state.data.a1 && this.state.a2==this.state.data.a2 && this.state.a3==this.state.data.a3
            && this.state.a4==this.state.data.a4 && this.state.a5==this.state.data.a5&& this.state.a6==this.state.data.a6
            ){
            console.log('Correcto');
            alerta("Awesome !!","success");
            this.setState({
                score:100
            })
        
        }*/
        if(this.state.a1===this.state.data.a1){
            alerta("Awesome","success");
        }
        else{
            alerta("Do it better","error")
        }

    }
    componentDidMount(){
        const url=`http://localhost:3001/api/ejercicio/${this.state.unidad}`;
        axios.get(url).then(res=>{
            this.setState({
                data:res.data[0]
            })
            console.log(res.data[0]);
            //console.log(this.state.data);
            console.log("Aqui")
        })
        
    }
    render(){
        return(
            <div className="almacen">
                <div className="principal">
                <h1 style={{color:'white'}}>What time do you .......?</h1>
                <h4>Unscramble the sentences</h4>
                <div className="everything">
                
                    <div className="info">
                        
                        <div className="bloque">
                            <div className="question">
                                1.- <span>you </span> <span>What</span> <span>get</span> <span>do</span> <span>time</span> <span>up?</span>
                            </div>
                            <div className="answer">
                                <input id="a1" name="a1" onChange={(e)=>this.changeState(e)} style={{border:'none'}} type="text" placeholder=""/>
                            </div>
                        </div>
                        <div className="bloque">
                            <div className="question">
                                2.- <span>gets</span> <span>at</span> <span>He</span> <span>dressed</span> <span>7:00 A.M</span>
                            </div>
                            <div className="answer">
                                <input id="a2" name="a2" onChange={(e)=>this.changeState(e)} style={{border:'none'}} type="text" placeholder=""/>
                            </div>
                        </div>
                        <div className="bloque">
                            <div className="question">
                                3.- <span>up</span> <span>at</span> <span>I</span> <span>6:30 A.M</span> <span>get</span>
                            </div>
                            <div className="answer">
                                <input id="a3" name="a3" onChange={(e)=>this.changeState(e)} style={{border:'none'}} type="text" placeholder=""/>
                            </div>
                        </div>
                    </div>
                    <div className="maspreguntas">
                        <div className="bloque">
                            <div className="question">
                                4.- <span>breakfast</span> <span>She</span> <span>has</span> <span>7:15 A.M</span> <span>at</span>
                            </div>
                            <div className="answer">
                                <input id="a4" name="a4" onChange={(e)=>this.changeState(e)} style={{border:'none'}} type="text" placeholder=""/>
                            </div>
                        </div>
                        <div className="bloque">
                            <div className="question">
                                5.- <span>at</span> <span>does</span> <span>homework</span> <span>Fiorella</span> <span>her</span><span>3:00P.M</span>
                            </div>
                            <div className="answer">
                                <input id="a5" name="a5"  onChange={(e)=>this.changeState(e)}style={{border:'none'}} type="text" placeholder=""/>
                            </div>
                        </div>
                        <div className="bloque">
                            <div className="question">
                                6.- <span>to</span> <span>goes</span> <span>at</span> <span>John</span> <span>7:20 A.A</span><span>school</span>
                            </div>
                            <div className="answer">
                                <input  id="a6" name="a6"  onChange={(e)=>this.changeState(e)} style={{border:'none'}} type="text" placeholder=""/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grafico">
                <img src={image} alt="image cool" width="220px" height="200px"/>
                </div>
                <div className="boton" style={{width:'15%',margin:'20px auto'}}>
                <Button style={{padding:'10px'}} variant="info" onClick={()=>this.capturar()} >Revisar</Button>
                </div>
               
                </div>
                
            </div>
            
            
        );
    }
   

}

export default thirdgame;