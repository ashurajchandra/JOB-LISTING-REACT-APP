// @flow
import * as React from 'react';

 function ListItem(props) {
    const{list,handleDelete,index}= props;
    console.log('list',list);
    const{name,job} = props.list;
    console.log('name',name);
    console.log('job',job);
    console.log('index',index);
    console.log('handleDelete', handleDelete);

    function handleOnClick (e){
         e.preventDefault();
        console.log('on click fired')
         handleDelete(index)
    }
  return (
    <div>
          <p  id="h1-tag">
        {name} 
        <span id="job-id">{job}</span>
        <span><button id="remove-id" onClick={handleOnClick }>Delete</button></span>
        </p> 
    </div>
  );
};
export default ListItem;