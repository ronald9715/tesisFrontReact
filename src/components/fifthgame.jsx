import React from 'react'
import {useState} from 'react'
import {Button} from 'react-bootstrap'
import '../styles/quinto.css'

import hospital from '../img/hospital.png'
import colegio from '../img/colegio.png'
import edificio from '../img/edificios.png'
import alerta from '../static/alerta3'
const Speech=window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition=new Speech();

const Fifthgame =()=>{
    /*constructor(props){
        super(props)
        this.state={
            a1:'',
            a2:'',
            a3:''
        }
    }*/
    const[a1,setState]=useState('');
    const [a2,setImg]=useState('');
    const[a3,setImg2]=useState('');
    const getVoice=()=>{
        let transcript;
        //alerta("Start talking","info");
        
            recognition.start();
        //On start
        recognition.onstart= ()=>{
            console.log("Hello");
            
        }
        //Do something when get the result
        recognition.onresult=(e)=>{
            let current =e.resultIndex;
             transcript=e.results[current][0].transcript;
             if(transcript==="Hospital"){
                setState(transcript)
                alerta("Great","success")
             }
             if(transcript=="School"){
                setImg(transcript) ;
                alerta("Great","success")
             }
             if(transcript==="building"){
                
                setImg2(transcript)
                alerta("Great","success")
             }
            
            console.log(transcript)
            
        }
          
    }

    return(
        <div className="generalon">
            <h1 className="titulo">Speaking !! </h1>
            <div className="contenido">
            <div className="tarjeta">
                <div className="image">
                    <img src={hospital} alt=""/>
                </div>
                <div>
                <p>{a1}</p>
                </div>
                <div>
                <Button onClick={getVoice} variant="warning">Review</Button>
                </div>
                
            </div>
            <div className="tarjeta">
            <div className="image">
                    <img src={colegio} alt=""/>
                </div>
                <div>
                <p>{a2}</p>
                </div>
                <div>
                <Button onClick={getVoice} variant="warning">Review</Button>
                </div>
            </div>
            <div className="tarjeta">
                <div className="image">
                    <img src={edificio} alt=""/>
                </div>
                <div>
                <p>{a3}</p>
                </div>
                <div>
                <Button onClick={getVoice} variant="warning">Review</Button>
                </div>
            </div>
            </div>
            
            

        </div>
    );

}
export default Fifthgame;