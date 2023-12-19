import React from 'react';

const Toolbar = () => {

 const handleButtonClick = () => {
    alert('Not implemented');
 };

 return (
    <div id="toolbar">
      <button id="btn1" onClick={handleButtonClick}>Open file</button>
      <button id="btn2" onClick={handleButtonClick}>Create File</button>
      <button id="btn3" onClick={handleButtonClick}>Update File</button>
      <button id="btn4" onClick={handleButtonClick}>Delete File</button>
    </div>
 );
};

export default Toolbar;