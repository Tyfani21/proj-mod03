import React from "react";
import './card.scss';

const Card = () => {
    const tarefa = props.tarefa;

    return(
        <div className='card'>
            <div className='card-img'>
                <img src={tarefa.cor} alt=''/>
            </div>

        <p className='card-text'>{tarefa.descrição}</p>
        <span className='card-inf'>{tarefa.hora}</span>
        </div>
    )
}
export default Card