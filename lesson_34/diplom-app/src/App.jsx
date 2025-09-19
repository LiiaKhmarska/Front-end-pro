import { RouterProvider } from 'react-router-dom';
import {router} from './router/routerConfig' 
import './App.css';
import {Box} from '@mui/material' 
import { Footer } from '@components';
import { ErrorBoundary } from '@components/ErrorBoundary'

function App() {

  return (
    <>
      <Box sx={{ display: 'flex', minHeight: "100vh", flexDirection: 'column' }}>
        <Box sx={{flexGrow:1}}>
        <ErrorBoundary>
                  <RouterProvider router={router} />
           </ErrorBoundary>
      </Box>
      <Footer/>
    </Box> 
    </>
  )
}

export default App
