import React from 'react';
import { Link,useLocation } from 'react-router-dom';
import '../styles/quiz.css'
class Quiz extends React.Component{
    constructor(props){
        super(props);
        this.state={
            nombre:props.location.state.nombre,
            idusuario:props.location.state.idusuario
        
        }
        console.log(this.state.nombre);
        console.log(this.state.idusuario)
    }

render(){
    return(
        <div className="quizv">
            <div className="centrado">
                <div className="marcador"></div>
                <h1 style={{paddingTop:'35px'}}>________ are you from ?</h1>
                <div class="choice-container">
                <p class="choice-prefix">A</p>
                <p class="choice-text" data-number="1">What</p>
            </div>
            <div class="choice-container">
                <p class="choice-prefix">B</p>
                <p class="choice-text" data-number="2">Which</p>
            </div>
            <div class="choice-container">
                <p class="choice-prefix">C</p>
                <p class="choice-text" data-number="3">Where</p>
            </div>
            <div class="choice-container">
                <p class="choice-prefix">D</p>
                <p class="choice-text" data-number="4">How</p>
            </div>
            </div>

        </div>
    );
}
}
export default Quiz