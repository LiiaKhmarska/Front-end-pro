
// import { useContext } from 'react';
// import { RouterProvider } from 'react-router-dom';
// import {router} from './router/routerConfig'
import './App.css';
import { ErrorBoundary } from './components/ErrorBoundary/ErrorBoundary';
import {Box} from '@mui/material'
import { Footer } from './components/Footer';
import { TodoList } from './todo-list/TodoList'
import {Header} from './components/Header'

function App() {
   
  return (    
    <Box sx={{ display: 'flex', minHeight: "100vh", flexDirection: 'column' }}>
      <Header />
        <Box sx={{flexGrow:1}}>
        <ErrorBoundary>
          <TodoList />
           </ErrorBoundary>
      </Box>
      <Footer/>
    </Box>
               )
}

export default App;