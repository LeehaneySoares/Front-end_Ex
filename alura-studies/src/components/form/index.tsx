import React from 'react'
import Button from '../button'

class Form extends React.Component {
  render () {
    return (
      <form>
        <div>
        <label htmlFor='tarefa'>Adicione um novo estudo:</label>
        <input
          id='tarefa'
          name='tarefa'
          placeholder='O que você quer Estudar hoje ?'
          required
          type='text'
        />
        </div>
        <div>
          <label htmlFor='tempo'>
            Tempo
          </label>
          <input
            type='time'
            name='tempo'
            id='tempo'
            step='1'
            min='00:00:00'
            max='01:30:00'
            required
          />
        </div>
        <Button />
      </form>
    )
  }
}

export default Form
