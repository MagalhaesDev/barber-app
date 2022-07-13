import { NavLink } from 'react-router-dom'
import { HeaderContainer } from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <nav>
        <NavLink to="/" title="Timer" className="nav-link">
          Entrar
        </NavLink>

        <NavLink to="/account" title="Criar usuário" className="nav-link">
          Criar usuário
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
