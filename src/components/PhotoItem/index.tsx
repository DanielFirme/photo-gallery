import * as C from './styles';
import { Link } from 'react-router-dom';

type Props = {
    photoId: number,
    thumbnailUrl: string,
    title: string
}

export const PhotoItem = ({ photoId, thumbnailUrl, title }: Props)=>{
    return (
        <C.PhotoWrapper>
            <Link to={`/photo/${photoId}`}>
                <C.PhotoImage src={thumbnailUrl} width={150} alt={title}/>
            </Link>
        </C.PhotoWrapper>
    );
}