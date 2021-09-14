import React from "react";
import Card from "../../components/structure/card/card";
import './home.scss'

const Home = () =>{
    return (
        <section className="content">
        <h1 className="content-title">TO-DOLIST</h1>
        <div className="content-list">
          <h1>Projeto de TO-DOLIST</h1>
         <div className='cards'>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          </div>
        </div>
      </section>
    )
  }
export default Home