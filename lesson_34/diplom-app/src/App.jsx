import { RouterProvider } from 'react-router-dom';
import {router} from './router/routerConfig' 
import './App.css';
import {Box} from '@mui/material' 
import { Header, HomePage, Footer } from '@components';
import {ErrorBoundary} from '@components/ErrorBoundary'

function App() {

  return (
    <>
      <Box sx={{ display: 'flex', minHeight: "100vh", flexDirection: 'column' }}>
      <Header />
        <Box sx={{flexGrow:1}}>
        <ErrorBoundary>
          {/* <HomePage /> */}
                  <RouterProvider router={router} />
           </ErrorBoundary>
      </Box>
      <Footer/>
    </Box> 
    </>
  )
}

export default App
