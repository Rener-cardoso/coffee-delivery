import { ThemeProvider } from "styled-components";
import { BrowserRouter } from "react-router-dom";

import { defaultThemes } from "./styles/themes/default";
import { GlobalStyle } from "./styles/global";
import { Router } from "./Router";
import { CoffeeContextProvider } from "./contexts/CoffeeContext";


export function App() {
  return (
    <ThemeProvider theme={defaultThemes}>
      <BrowserRouter>
        <CoffeeContextProvider>
          <Router />
        </CoffeeContextProvider>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}

