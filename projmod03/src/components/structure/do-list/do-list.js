import React, {useEffect, useState} from "react";
import Card from "../card/card";
import './do-list.scss';

const DoList = () => {
    const[tarefas, setTarefas] = useState([]);
    const url = 'http://localhost:3002/';

    const getTarefa = async () => {
        const response = await fetch(url);
        const data = await response.json();
        setTarefas(data);}

     useEffect(()=>{getTarefa()},[]);

    return (
        <div className='list'>
            {tarefas.map((tarefa, index) => (
                <Card tarefa ={tarefa} key={tarefa._id}/>
            ))}
        </div>)
}
export default DoList