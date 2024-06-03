import React from "react";
import ReactDOM from "react-dom";
import Header from './src/components/Header/Header';
import "bootstrap/dist/css/bootstrap.min.css";
// import Images from './src/components/Images/image';
import Body from "./src/components/Body/Body";
import Footer from "./src/components/Footer/Footer";


var htmlRoot = document.getElementById("root");
var RootReact = ReactDOM.createRoot(htmlRoot);

const Run = () => {
  return (
    <>
      <Header/>
      <Body/>
      <Footer/>
    </>
  );
};

RootReact.render(<Run />);
