import './App.scss';
import { ThemeProvider } from 'styled-components'
import theme from './theme'
import Box from './Box';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <header className="App-header">
          <Box color="black" bg="base.green">
            <p className="hello-world">
              Hello world!
            </p>
          </Box> 
        </header>
      </div>
    </ThemeProvider>
  );
}

export default App;
