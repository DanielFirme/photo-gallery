import { useRoutes } from 'react-router-dom';
import { NotFound } from '../pages/NotFound';
import { Albums } from '../pages/Albums';
import { Photos } from '../pages/Photos';
import { Photo } from '../pages/Photo';

export const MainRouters = ()=>{
    return useRoutes([
       { path: "albums", element: <Albums/>},
       { path: "albums/:slug", element: <Photos/>},
       { path: "photo/:slug", element: <Photo/>},
       { path: "*", element: <NotFound/>} 
    ]);
}