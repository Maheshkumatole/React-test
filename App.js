import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class  App extends  Component {
  constructor(props){
    
    super(props)
    this.state = {
      personName:'',
      stateName:'',
      items:[]
     }
  }

onChangeValue = (e) =>{
  
    this.setState({
       [e.target.name]:e.target.value
    })
}

onFlexiSubmit = (e) => {
   e.preventDefault();
    const newItem = {
      personName:this.state.personName,
      stateName:this.state.stateName
    } 
    var myarray = this.state.items.slice()
    myarray.push(newItem)
    this.setState({
      items:myarray
    })
  }
  render(){
    const {items} = this.state
    return(
  <div className="main">
   <Flexi  onchangeValue={this.onChangeValue} onSubmit={this.onFlexiSubmit} config={items}/>
    </div>
    )
  }
}

class Flexi extends Component{
 render(){
  const { personName , onSubmit,onchangeValue,stateName,config } = this.props;
   
   return(
     <div className="container">
       <form onSubmit={onSubmit}>
         
       <input name="personName" value={personName} type="text" onChange={onchangeValue} /><br/>
      
       <select name="stateName" value={stateName} onChange={onchangeValue} >
       <option value=""></option> 
        <option value="karnataka">karnataka</option> 
        <option value="maharastra">maharastra</option> 
        <option value="kerala">kerala</option> 
       </select><br/>
       <button type='submit'>Submit</button>
       </form>
       {
     config.map((data,i)=>{
       
         return <div key={i}>
              <p>{data.personName}, {data.stateName}</p>
         </div>
      
       })
       }
      
     </div>
   )
 }
}

export default App;
