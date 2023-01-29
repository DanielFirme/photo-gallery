import * as C from './styles';
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { api } from '../../api/api';
import { AlbumType } from '../../types/AlbumType';
import { PhotoItem } from '../../components/PhotoItem';
import { PhotoType } from '../../types/PhotoType';

export const Photos = ()=>{
    const [photos, setPhotos] = useState<PhotoType[]>([]);
    const [album, setAlbum] = useState<AlbumType | null>(null);
    const params = useParams();
    const navigate = useNavigate();

    useEffect(()=>{
        const getAlbumAndPhotos = async ()=>{
            const tmpAlbum =  await api.getAlbumPhoto(`/albums/${params.slug}`);
            const tmpPhotos = await api.getAlbumPhoto(`/albums/${params.slug}/photos`);
            setAlbum(tmpAlbum);
            setPhotos(tmpPhotos);
        }

        getAlbumAndPhotos();
    }, [params]);

    

    const handleBackButton = ()=>{
        navigate(-1);
    }
    return (
        <C.Container>
            <button onClick={handleBackButton}>voltar</button>
            {album && 
                <h2>{album.title}</h2>
            }
            <C.PhotosGallery>
                {photos &&
                    photos.map((photo, index)=>(
                        <PhotoItem 
                            key={index} 
                            photoId={photo.id} 
                            thumbnailUrl={photo.thumbnailUrl} 
                            title={photo.title}
                        /> 
                    ))
                }
            </C.PhotosGallery>   
        </C.Container>
    );
}