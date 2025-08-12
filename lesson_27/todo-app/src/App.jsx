
import { useContext } from 'react';
import { RouterProvider } from 'react-router-dom';
import {router} from './router/routerConfig'
import './App.css';
import { themeContext } from './context/theme.context';
import { ErrorBoundary } from './components/ErrorBoundary/ErrorBoundary';

function App() {
  const { theme } = useContext(themeContext);
  return (    
    <div className={`wrapper ${theme}`}>
         <ErrorBoundary>
        <RouterProvider router={router} />
           </ErrorBoundary>

    </div>
      )
}

export default App;