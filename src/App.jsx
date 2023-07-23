import React from "react";
import styles from './App.module.css'

function App() {


  
  return (
    <div className={styles.app}>
      <h1 className={styles.header} >The Strawhats</h1>
      <div className={styles.gallery}>
        <button>◀</button>
        <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-SvEJolIfuHTjEe3sBAVxfLmxF4Xv0IbjqQ&usqp=CAU"} alt="" />
        <button>▶</button>
      </div>
    </div>
  );
}

export default App;
