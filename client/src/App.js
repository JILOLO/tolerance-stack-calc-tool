import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container, CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import Navbar from './components/Navbar';
import TreeList from './components/TreeList';
import TreeEditor from './components/TreeEditor';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1976d2',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Navbar />
        <Container sx={{ mt: 3 }}>
          <Routes>
            <Route path="/" element={<TreeList />} />
            <Route path="/editor" element={<TreeEditor />} />
            <Route path="/editor/:id" element={<TreeEditor />} />
          </Routes>
        </Container>
      </Router>
    </ThemeProvider>
  );
}

export default App; 