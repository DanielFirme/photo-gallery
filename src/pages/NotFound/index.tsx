import { Navigate, useMatch } from "react-router-dom";

export const NotFound = ()=>{
    const home = useMatch('/');

    if (home){
        return <Navigate to="/albums"/>
    }
    return (
        <div>Página não encontrada</div>
    );
}