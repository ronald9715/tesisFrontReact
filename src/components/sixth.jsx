import React from 'react'
import {Table, Button} from 'react-bootstrap'
import '../styles/sexto.css'
import axios from 'axios'
import alerta from '../static/alerta3'
class Six extends React.Component{
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
        unidad:'possesive'
    }
}
changeState=(e)=>{
    e.persist();
    this.setState({
        [e.target.name]:e.target.value
    })
}
capturar=()=>{

    if(this.state.a1==this.state.data.a1 && this.state.a2==this.state.data.a2 && this.state.a3==this.state.data.a3
        && this.state.a4==this.state.data.a4 && this.state.a5==this.state.data.a5&& this.state.a6==this.state.data.a6
        ){
        console.log('Correcto');
        alerta("Awesome !!","success");
        this.setState({
            score:100
        })

    }else{
        alerta("Do it better","error")
    }



}
handleReset=()=>{
    Array.from(document.querySelectorAll('input')).forEach(
        input => (input.value = "")
      );
     this.setState({
         a1:'',
         a2:'',
         a3:'',
         a4:'',
         a5:'',
         a6:''
     })
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
        <div className="interfaz">
            <h1 style={{color:'#0077A9'}} >Possesive Adjectives</h1>
            <p  style={{color:'#006CBB',width:'80%',fontSize:'19px',margin:'auto', fontFamily:"'Montserrat Alternates', sans-serif"}}>Remember:</p>
            <Table style={{width:'35%',margin:'auto'}} striped bordered hover size="sm">
                    <thead>
                        <tr>
                        <th style={{width:'25%'}}>Subject</th>
                        <th style={{width:'25%'}}>Possesive</th>
                        
                        
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>I</td>
                            <td>My</td>
                        </tr>
                        <tr>
                            <td>You</td>
                            <td>Your</td>
                        </tr>
                        <tr>
                            <td>We</td>
                            <td>Our</td>
                        </tr>
                        <tr>
                            <td>They</td>
                            <td>Their</td>
                        </tr>
                        <tr>
                        <td>He</td>
                        <td>His</td>
                       
                        </tr>
                        <tr>
                            <td>She</td>
                            <td>Her</td>
                        </tr>
                        <tr>
                            <td>It</td>
                            <td>Its</td>
                        </tr>
                        
                    </tbody>
                </Table>
                <div className="general">
                    <p style={{fontSize:'19px', fontFamily:"'Montserrat Alternates', sans-serif",color:'#006CBB'}}>Excercises:</p>
                    <div className="pool">
                        <ul>
                            <li><div style={{fontSize:'25px'}} className="texto">

                                <span>When is your birthday ? </span><br/>
                                <span>{" "}<input className="primera" value={this.state.a1} id="a1" name="a1" onChange={(e)=>this.changeState(e)} type="text"/> birthday is in July.</span><br/>
                            </div></li>
                            <li><div style={{fontSize:'25px'}} className="texto">

                                <span>When is <input className="primera" value={this.state.a2} id="a2" name="a2" onChange={(e)=>this.changeState(e)} type="text"/> birthday ? </span><br/>
                                <span>My birthday is in August.</span><br/>
                            </div></li>
                           < li><div style={{fontSize:'25px'}} className="texto">

                                <span>When is  Susan's birthday ? </span><br/>
                                <span>{" "}<input className="primera" value={this.state.a3} id="a3" name="a3" onChange={(e)=>this.changeState(e)} type="text"/> birthday is in December.</span><br/>
                            </div></li>
                            <li><div style={{fontSize:'25px'}} className="texto">

                                <span>When is the twins' birthday ? </span><br/>
                                <span>{" "}<input className="primera" value={this.state.a4} id="a4" name="a4" onChange={(e)=>this.changeState(e)} type="text"/> birthday is in May.</span><br/>
                            </div></li>
                            <li><div style={{fontSize:'25px'}} className="texto">

                                <span>When is Shakira's birthday ? </span><br/>
                                <span>{" "}<input className="primera" value={this.state.a5} id="a5" name="a5" onChange={(e)=>this.changeState(e)} type="text"/> birthday is in October.</span><br/>
                            </div></li>
                            <li><div style={{fontSize:'25px'}} className="texto">

                                <span>When is Gian Marco's birthday ? </span><br/>
                                <span>{" "}<input className="primera" value={this.state.a6} id="a6" name="a6" onChange={(e)=>this.changeState(e)} type="text"/> birthday is in July.</span><br/>
                            </div></li>
                            
                        </ul>
                        
                            
                            
                            
                            
                    
                    </div>
                </div>
                <div className="pool">
                        <div className="opciones" style={{justifyContent:'space-between'}} >
                        <Button onClick={()=>this.capturar()} variant="success">Review</Button>{' '}
                        <Button onClick={()=>this.handleReset()} variant="warning" >Clear</Button>
                        </div>

                </div>
        </div>
    );
}
}

export default Six