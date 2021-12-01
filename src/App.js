import './App.css';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Header from './components/header';
import Button from './components/button';

function App() {
  return (
    <div className="App">
      <Grid xs={11} md={12} sx={{ mx: 'auto' }}>
        <Container maxWidth="sm" sx={{ my: 3, mx: 'auto', border: 1, borderRadius: '16px' }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', my: 4 }}>
            <Typography variant="h5" component="div" gutterBottom>
              <Header title='Task Runner' />
            </Typography>
            <Button ctatext='Add' />
          </Box>
        </Container>
      </Grid>
    </div>
  );
}

export default App;
