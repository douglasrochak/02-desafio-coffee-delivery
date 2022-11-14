import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/global";
import { Header } from "./components/header";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Header />
      <div>teste</div>
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
