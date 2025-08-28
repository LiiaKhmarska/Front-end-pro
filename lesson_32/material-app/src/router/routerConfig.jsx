import { ErrorPage } from '@components/ErrorPage';
import { HomePage } from '@components/HomePage';
import {TodoList} from '@todo/TodoList'
import { createBrowserRouter } from 'react-router-dom'
import { Swapi } from '../swapi/Swapi';


const routerConfig = [
{
path: "/",
errorElement: <ErrorPage />,
id: "root",
children: [
{ index: true, Component: HomePage },
    { path: "/swapi", Component: Swapi },
{path:"/todo", Component: TodoList},
{ path: "/*", Component: ErrorPage },
],
},
];


export const router = createBrowserRouter(routerConfig)