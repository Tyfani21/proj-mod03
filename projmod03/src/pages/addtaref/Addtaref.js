import './addtaref.scss'
import React from 'react'


const NovaTarefa = () => {
    return (<section className='add'>

        <h1>Adicione uma nova Tarefa</h1>
    <div className='group-form'>
        <form className='add-form' /*onSubmit={handleSubmit}*/>
        <label htmlFor='descricao' className='add-form-group-label'>Descrição da Tarefa</label>
        <textarea type='text' id='describe' name='describe' className='add-form-group-area'></textarea>
        <label htmlFor='data' className='add-form-group-label'>Data da Tarefa:</label>
        <input type='date' className='input'></input>
        <label htmlFor='hora' className='add-form-group-label'>Horário</label>
        <input type='time' className='input'></input>
        <label htmlFor='cor' className='add-form-group-label'>Escolha um cor para o nível de importância do card</label>
        <input type='color' className='input'></input>
        <label htmlFor='lembrete' className='add-form-group-label'>Adicionar um lembrente?</label>
        <input type='checkbox' ></input>
        <button type='submit' className='button-form'>Adicionar nova tarefa</button>
    </form>
    </div>
    </section>)

}

export default NovaTarefa