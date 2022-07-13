import { Scissors } from 'phosphor-react'
import { LoginContainer, LoginForm } from './styles'

export function LonginPanel() {
  return (
    <LoginContainer>
      <h1>
        <span>Bem vindo</span>
        <Scissors size={64} weight="bold" />
        <span>Cut</span>
        <small>Cuidando do seu visual com os melhores</small>
      </h1>

      <LoginForm>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="text" id="email" />
        </div>

        <div>
          <label htmlFor="password">Senha:</label>
          <input type="password" id="password" />
        </div>

        <button type="submit">Entrar</button>
      </LoginForm>

      <a href="#">Esqueci minha senha</a>
    </LoginContainer>
  )
}
