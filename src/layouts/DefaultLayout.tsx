import { Outlet } from 'react-router-dom'
import { Header } from '../components/Header'

// Criando um layout fixo para as rotas
export function DefaultLayout() {
  return (
    <div>
      <Header />
      {/* Outlet = 
      Espaço para um novo conteúdo ser inserido */}
      <Outlet />
    </div>
  )
}
