import './App.scss';
import { ThemeProvider } from 'styled-components'
import theme from './theme'
import Box from './Box';

function App() {
  console.log(theme)
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <header className="App-header">
          <Box color="black" bg="green.900">
            <p className="hello-world">
              Hello world!
            </p>
            <Box bg="purple.400" border-radius="xl" m="l" sizing="xl"></Box>
          </Box> 
        </header>
      </div>
    </ThemeProvider>
  );
}

export default App;
