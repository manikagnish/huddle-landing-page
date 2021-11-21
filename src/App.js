import { Container } from "./components/styles/Container.styled";
import Header from "./components/Header";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./components/styles/Global";

const theme = {
  colors: {
    header: "#ebfbff",
    body: "#fff",
    footer: "#003333",
  },
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <Header />
        <Container>
          <p>hello</p>
        </Container>
      </>
    </ThemeProvider>
  );
}

export default App;
