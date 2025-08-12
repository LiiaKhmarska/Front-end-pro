
import { useContext } from 'react';
import { RouterProvider } from 'react-router-dom';
import {router} from './router/routerConfig'
import './App.css';
import { themeContext } from './context/theme.context'

function App() {
  const { theme } = useContext(themeContext);
  return (    
    <div className={`wrapper ${theme}`}>
         <RouterProvider router={router}  />
    </div>
      )
}

export default App;