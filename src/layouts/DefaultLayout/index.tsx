import { Outlet } from 'react-router-dom'
import { Header } from '../../components/Header'
import { LayoutContainer } from './styles'

// Criando um layout fixo para as rotas
export function DefaultLayout() {
  return (
    <LayoutContainer>
      <Header />
      {/* Outlet = 
      Espaço para um novo conteúdo ser inserido */}
      <Outlet />
    </LayoutContainer>
  )
}
