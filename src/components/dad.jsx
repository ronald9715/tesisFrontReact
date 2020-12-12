import React from 'react';
import '../styles/dad.css';
import mariposa from '../img/drag/mariposa.png'
import abeja from '../img/drag/abeja.svg'
import arana from '../img/drag/arana.svg'
import hormiga from '../img/drag/hormiga.svg'
import alerta from '../static/alerta2'

export default class AppDragDropDemo extends React.Component {     
state = {           
    tasks: [{name:mariposa,  category:"wip", bgcolor: "yellow",id:1,animal:"mariposa"}, 
            {name:abeja,  category:"wip", bgcolor:"pink",id:2,animal:"abeja"}, 
            {name:arana,category:"wip",  bgcolor:"skyblue",id:3,animal:"arana"},
            {name:hormiga,category:"wip",  bgcolor:"skyblue",id:4,animal:"hormiga"}   ],
mariposa:[]
    
                
        }
onDragOver=(ev)=>{
    ev.preventDefault();
}
onDragStart=(e,name)=>{
    console.log('dragstart:',name);
    e.dataTransfer.setData("name",name);
}
onDrop=(e,cat,animal)=>{
   
    let id=e.dataTransfer.getData("name");
    let tasks=this.state.tasks.filter(task=>{
        if(task.name===id && task.animal===animal){
            alerta("Great", "success")
            console.log(id);
            console.log(e.dataTransfer.getData("name"));
           
            task.category=cat;
          
        }else{
           // alerta("Oops","error")
        }
        return task
    });
    this.setState({
        ...this.state,
        tasks
    })
}
render() { 
    var tasks={
        wip:[],
       
        m:[],
        ar:[],
        h:[],
        a:[]
        
    } ;
 
    this.state.tasks.forEach(t=>{
        tasks[t.category].push(
            <div key={t.id}
            onDragStart={(e)=>{this.onDragStart(e,t.name)}}
           
            draggable
            className="draggable"
            style={{cursor:'pointer'}}
            >
                <img src={t.name} alt="" width="100px"/>
            </div>
        );
        
    })  
    
        return (     
        <div className="container-drag"> 
        <h2 className="header">DRAG AND DROP</h2>
        <div className="wip"
         onDrop={(e)=>{this.onDrop(e,"wip")}}>
            
            {tasks.wip}
        </div>

        <div className="cajitas">
        <div className="droppable" onDragOver={(e)=>this.onDragOver(e)}
        onDrop={(e)=>{this.onDrop(e,"m","mariposa")}} style={{cursor:'pointer'}}
        >
            Butterfly
            {tasks.m}
        </div>
        <div className="droppable" onDragOver={(e)=>this.onDragOver(e)}
        onDrop={(e)=>{this.onDrop(e,"a","abeja")}} style={{cursor:'pointer'}}
        >
           Bee
            {tasks.a} {console.log(tasks.complete)}
        </div>
        <div className="droppable" onDragOver={(e)=>this.onDragOver(e)}
        onDrop={(e)=>{this.onDrop(e,"ar","arana")}} style={{cursor:'pointer'}}
        >
            Spider
            {tasks.ar}
        </div>
        <div className="droppable" onDragOver={(e)=>this.onDragOver(e)}
        onDrop={(e)=>{this.onDrop(e,"h","hormiga")}} style={{cursor:'pointer'}}
        >
            Ant
            {tasks.h}
        </div>
        </div>
        
        
        
        </div>  
        
     );
          }

        
}