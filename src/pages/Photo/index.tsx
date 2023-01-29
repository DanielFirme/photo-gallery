import * as C from './styles';
import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { api } from '../../api/api';
import { PhotoType } from '../../types/PhotoType';

export const Photo = ()=> {
    const [photo, setPhoto] = useState<PhotoType>()
    const navigate = useNavigate();
    const params = useParams();

    useEffect(()=>{
        const getPhoto = async ()=>{
            const tmpPhoto = await api.getAlbumPhoto(`/photos/${params.slug}`);
            setPhoto(tmpPhoto);
        }
        getPhoto();
    }, [params]);

    

    const handleBackButton = ()=>{
        navigate(-1)
    }

    return (
        <C.Container>
            <button onClick={handleBackButton}>voltar</button>
            {photo && 
                <>
                    <img src={photo.url} alt={photo.title} width={400} />
                    <h3>{photo.title}</h3>
                </>
            }
        </C.Container>
    );
}