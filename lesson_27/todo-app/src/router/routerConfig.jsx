import { ErrorPage } from '../components/ErrorPage';
import { HomePage } from '../components/HomePage';
import { About } from '../components/About,';
import { Contacts } from '../components/Contacts';
import { createBrowserRouter } from 'react-router-dom'

const routerConfig = [
    {
        path: "/",
        Component: HomePage,
        errorElement: <ErrorPage />,
        id: 'root',
        childen: [
            { index: true, Component: HomePage },
            { path: 'contacts', Component: Contacts },
            {path: 'about', Component: About} ,
            {path: '/*', Component: ErrorPage}

       ]
    }
];

export const router = createBrowserRouter(routerConfig)