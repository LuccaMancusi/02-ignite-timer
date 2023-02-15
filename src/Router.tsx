import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { History } from './pages/History'
import { DefaultLayout } from './layouts/DefaultLayout/index'

export function Router() {
  return (
    // Todas as rotas serão filhas do Routes
    <Routes>
      {/* Route do layout */}
      {/* Route tem duas props: path e element */}
      <Route path="/" element={<DefaultLayout />}>
        {/* Route dos componentes específicos */}
        <Route path="/" element={<Home />} />
        <Route path="/history" element={<History />} />
      </Route>
    </Routes>
  )
}
