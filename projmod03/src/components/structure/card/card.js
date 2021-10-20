import React from "react";
import './card.scss';

const Card = (props) => {
    const tarefa = props.tarefa
    return(
        <div className='card'>
        <p className='color'>Cor</p>
        <p className='card-text' type='text'>{tarefa.Tarefa}</p>
        <p className='card-data' type='date'>{tarefa.Data}</p>
        <p className='card-hora' type='time'>{tarefa.Hora}</p>

        </div>
    )
}
export default Card