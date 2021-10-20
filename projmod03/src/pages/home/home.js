import React from "react";
import DoList from "../../components/structure/do-list/do-list";
import './home.scss'

const Home = () =>{
    return (
        <section className="content">
        <h1 className="content-title">TO-DOLIST</h1>
        <div className="content-list">
          <h1>Projeto de TO-DOLIST</h1>
          <DoList/>
        </div>
      </section>
    )
  }
export default Home