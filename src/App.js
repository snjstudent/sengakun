import React from "react";
import "./App.css";
import Header from "./Header";
import Explainbox from "./Explainbox";
import Mainbox from "./Mainbox";
import Photobox from "./photobox";
import Sidebar from "./sidebar";
import Footer from "./Footer";
import db from "./firebase";

var dousiyoumonai =
  '<img src={{images}} style="margin-top: 10px; vertical-align: bottom; width: 200px;"/>';

const App = () => (
  <React.Fragment>
    <div>
      <Header />
      <Explainbox />
      <script src="/__/firebase/6.5.0/firebase-app.js"></script>
      <script src="/__/firebase/init.js"></script>
      <Photobox />
      <Mainbox />
      {/*
      <div dangerouslySetInnerHTML={{ __html: dousiyoumonai }}></div>
      <img src={newimage}></img>
      */}
      <Sidebar />
      <Footer />
    </div>
  </React.Fragment>
);

export default App;
