import { Scissors, User } from 'phosphor-react'
import { AccountContainer, RadioBox, TypeUserContainer } from './styles'

import undrawBarber from '../../assets/undraw-barber.svg'
import { useState } from 'react'

export function CreateAccount() {
  const [type, setType] = useState('barber')

  return (
    <AccountContainer>
      <h1>Criar uma nova conta</h1>

      <img src={undrawBarber} alt="" />

      <p>Digite seus dados:</p>

      <TypeUserContainer>
        <RadioBox
          onClick={() => setType('barber')}
          isActive={type === 'barber'}
          activeColor="green"
        >
          <Scissors size={16} weight="bold" />
          Barbeiro
        </RadioBox>
        <RadioBox
          onClick={() => setType('client')}
          isActive={type === 'client'}
          activeColor="yellow"
        >
          <User size={16} weight="bold" />
          Cliente
        </RadioBox>
      </TypeUserContainer>

      <form>
        <div>
          <label htmlFor="name">Nome:</label>
          <input type="text" id="name" />
        </div>

        <div>
          <label htmlFor="email">Email:</label>
          <input type="text" id="email" />
        </div>

        <div>
          <label htmlFor="password">Senha:</label>
          <input type="text" id="password" />
        </div>

        <button type="submit">Cadastrar</button>
      </form>
    </AccountContainer>
  )
}
