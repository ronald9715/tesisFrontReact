 import React from 'react'
import { Link } from 'react-router-dom';
 import '../styles/dashboard.css'
 //const abc=this.props.location.state.usernombre;
  //const id= this.props.location.state.userid;
 class Index extends React.Component{

    constructor(props){
        super(props);
        this.state={
            nombre:props.location.state.usernombre,
            idusuario:props.location.state.userid
        }
        console.log(this.state.nombre);
        console.log(this.state.idusuario)
        
    }
    redirectDashboard=()=>{
        this.props.history.push({
          pathname:`/dashboard/juego1`,
          state:{nombre:this.state.nombre,idusuario:this.state.idusuario}
        }
        ); 
      }
      redirectDashboard2=()=>{
        this.props.history.push({
          pathname:`/dashboard/juego2/`,
          state:{nombre:this.state.nombre,idusuario:this.state.idusuario}
        }
        ); 
      }
    
    
     render(){return(
        
    
        <div className="dashboard">
           
            <h1 >Welcome {this.state.nombre}!</h1>
            <div className="superior">
                <div className="carta">
                    <div className="contenedor">
                    <img src="https://www.freepnglogos.com/uploads/cloud-clipart/clipart-clouds-picture-images-0.png" width="300" height="300" alt="clipart clouds picture images" />
                    <p onClick={()=>this.redirectDashboard()} style={{cursor:'pointer'}}>First Level</p>
                    
                    </div>
                   
               </div>
                <div className="carta">
                    <div className="contenedor">
                    <img src="https://www.freepnglogos.com/uploads/cloud-clipart/clipart-clouds-picture-images-0.png" width="300" height="300" alt="clipart clouds picture images" />
                    <p onClick={()=>this.redirectDashboard2()} style={{cursor:'pointer'}}>Second Level</p>
                    </div>
                   
                </div>
            </div>
            <div className="superior">
                <div className="carta">
                    <div className="contenedor">
                    <img src="https://www.freepnglogos.com/uploads/cloud-clipart/clipart-clouds-picture-images-0.png" width="300" height="300" alt="clipart clouds picture images" />
                    <p><Link to="/dashboard/lista" style={{textDecoration:'none'}} >Third Level</Link></p>
                    </div>
                </div>
                <div className="carta">
                <div className="contenedor">
                    <img src="https://www.freepnglogos.com/uploads/cloud-clipart/clipart-clouds-picture-images-0.png" width="300" height="300" alt="clipart clouds picture images" />
                    <p><Link to="/dashboard/cuartojuego" style={{textDecoration:'none'}} >Fourth Level</Link></p>
                    </div>
                </div>
                <div className="carta">
                <div className="contenedor">
                    <img src="https://www.freepnglogos.com/uploads/cloud-clipart/clipart-clouds-picture-images-0.png" width="300" height="300" alt="clipart clouds picture images" />
                    <p><Link to="/dashboard/quintojuego" style={{textDecoration:'none'}} >Fifth Level</Link></p>
                    </div>
                </div>
            </div>
        </div>
    
    
    );}
 
}
export default Index;