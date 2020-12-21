import React, { Component } from 'react';
import './App.css';
import List from './List';

class App extends Component {
  constructor(){
    super();
    this.state={
      lists: [],
    
        name:'',
        job:'',
        // toggle:false
      
    }
  }

  handleChange=(e)=>{
    this.setState({
  
    [e.target.id]:e.target.value
   
    })
    
  }

  handleSubmit=(e)=>{
    e.preventDefault();
    console.log('submit clicked')
    const{lists, name, job} = this.state;
    var obj={name:name,job:job}
    if(name | job !== '' ){
     lists.push(obj);
      this.setState({
        lists: lists,
        name:'',
        job:''
      })
    }
    else{
      alert('pliss fill input')
    }
  
    
  }
  handleDelete =(ind)=>{
    console.log('deleted');
    console.log('ind', ind);
    const{lists} = this.state;
    console.log('lists',lists)
    const filteredItems= lists.filter((list,index) =>
    list.index ===ind);
    console.log('filteredItems',filteredItems);
    this.setState({
      lists:filteredItems
    });
    

  }


  render() {
    const{lists, name, job} = this.state;
    console.log('lists', lists);
    console.log('name is:', name);
    console.log('job is:', job);
   
    return (
      <div className="App">
        <form className="form">
          <h1>Add New</h1>
          <p>Name</p>
          <input id="name" placeholder="enter your name" onChange={this.handleChange} type="text"/>

          <p>Job</p>
          <input id="job" placeholder="enter your job title" onChange={this.handleChange}  type="text"/>
          <button onClick={this.handleSubmit}>Submit</button>
          </form>
          {lists.map((list,index)=> <List index={index} list={list} handleDelete={this.handleDelete}/>)}
      </div>
    );
  }
}

export default App;
