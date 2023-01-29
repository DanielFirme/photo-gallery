import * as C from './styles';
import { Link } from 'react-router-dom';

type Props = {
    albumId: number;
    title: string;
}

export const Album = ({albumId, title}: Props)=>{
    return (
        <C.Container>
            <Link to={`/albums/${albumId}`}>{title}</Link>
        </C.Container>
    );
}