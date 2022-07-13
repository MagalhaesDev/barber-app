import { Outlet } from 'react-router-dom'
import { Header } from '../../components/Header'
import { LayoutContainer, Background } from './styles'

import backgroundImg from '../../assets/background.jpg'

export function DefaultLayout() {
  return (
    <LayoutContainer>
      <Background src={backgroundImg} alt="" />
      <Header />
      <Outlet />
    </LayoutContainer>
  )
}
