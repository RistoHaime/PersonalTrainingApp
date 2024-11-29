import './App.css';
import { Typography, AppBar, Container, CssBaseline, Toolbar } from '@mui/material';
import { Link, Outlet } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

function App() {

  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Container maxWidth="x1">
        <h1>Personal Training App</h1>
        <CssBaseline />
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6">
              <nav>
                <Link to={"/"}>Trainings</Link>
                <Link to={"/customers"}>customers</Link>
                <Link to={"/calendar"}>calendar</Link>
              </nav>
            </Typography>
          </Toolbar>
        </AppBar>
        <Outlet />
      </Container>
    </QueryClientProvider>
  )
}

export default App
