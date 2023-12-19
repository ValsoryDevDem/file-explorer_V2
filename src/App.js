import React from "react";
import ToolBar from "./components/ToolBar";
import ContentArea from "./components/ContentArea";
import UploadFile from "./components/UploadFile";
import "./App.css";

const App = () => {
  return (
    <div className="container">
      <h2>📤 Files Explorer 📤</h2>
      <ToolBar />
      <br></br>
      <h2>📥 Fetching data from Dropbox: 📥</h2>
      <ContentArea />
      <br></br>
      <h2>📥 Upload a file from the device: 📥</h2>
      <UploadFile />
    </div>
  );
};

export default App;
