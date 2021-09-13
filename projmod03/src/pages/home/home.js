import React from "react";
import Card from "../../components/structure/card/card";
import './home.scss'

const Home = () =>{
    return (
        <section className="content">
        <h1 className="content-title">Listagem de Musicas</h1>
        <div className="content-list">
          <h1>Projeto de TO-DOLIST</h1>
          <Card/>
        </div>
      </section>
    )
  }
export default Home