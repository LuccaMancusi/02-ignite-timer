import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'
import { Router } from './Router'
export function App() {
  return (
    // todos componentes styled filhos de themeProvider vão
    // poder acessar o defaultTheme através das props
    <ThemeProvider theme={defaultTheme}>
      {/* BrowserRouter precisa encapsular a rota */}
      <BrowserRouter>
        <Router />
      </BrowserRouter>
      {/* GlobalStyle é chamado no app */}
      <GlobalStyle />
    </ThemeProvider>
  )
}
