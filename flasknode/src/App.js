import React from "react";
import "./App.css";
import Header from "./Header";
import Explainbox from "./Explainbox";
import Mainbox from "./Mainbox";
import Photobox from "./photobox";
import Sidebar from "./sidebar";

import db from "./firebase";


const App = () => (
  <React.Fragment>
    <div>
      
      <Header />
      <Explainbox />
      <script src="/__/firebase/6.5.0/firebase-app.js"></script>
      <script src="/__/firebase/init.js"></script>
      <Photobox />
      <Mainbox />
      <Sidebar />
    </div>
  </React.Fragment>
);

export default App;
