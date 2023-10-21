import React, { useState } from 'react';

import './index.css';






const AddTask = () => {
  const [list, setList] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleClick = () => {
    if (inputValue !== "") {
      setList([...list, { task: inputValue }]);
      setInputValue("");
    }
  };

  const handleDelete = (index) => {
    const updatedList = [...list];
    updatedList.splice(index, 1);
    setList(updatedList);
  };

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <>
      <div className='container'>
        <div className="mytask">
          {list.map((item, index) => (
            <div className='myt' key={index}>
              <div>{item.task}</div>
              
              <button onClick={() => handleDelete(index)}>o</button>
            </div>
          ))}
        </div>
        <div className="inputtask">
          <input type="text" value={inputValue} onChange={handleChange} />
          <button onClick={handleClick}> Add#{list.length + 1}</button>
        </div>
      </div>
    </>
  );
};


export default AddTask;