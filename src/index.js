import React from "react"; 
import ReactDOM from "react-dom";

const el = document.getElementById("root");

const root = ReactDOM.createRoot(el);

function App() {
  return <div>Hello World</div>;
}

root.render(<App />);