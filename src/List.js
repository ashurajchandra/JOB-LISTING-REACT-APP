// @flow 
import * as React from 'react';
import './App.css';
import ListItem from './ListItem';

function List (props) {
    // const{list,handleDelete,index}= props;
    // console.log('list',list);
    // const{name,job} = props.list;
    // console.log('name',name);
    // console.log('job',job);
    const{lists, handleDelete} =props
    return (
        <div className="list">
          <h1 id="h1-tag">
              Name
               <span id="job-id">Job</span> 
               <span id="remove-id">Remove</span>
               </h1>
               {lists.map((list,index)=>
           <ListItem index={index} list={list} handleDelete={handleDelete}/>)} 

   
    {/* <p  id="h1-tag">
        {name} 
        <span id="job-id">{job}</span>
        <span><button id="remove-id" onClick={()=>handleDelete(index)}>Delete</button></span>
        </p> */}
    
        </div>
    );
};
export default List;