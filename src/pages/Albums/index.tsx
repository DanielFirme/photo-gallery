import { useEffect, useState } from 'react';
import * as C from './styles';
import { api } from '../../api/api';
import { Album } from '../../components/Album';
import { AlbumType } from '../../types/AlbumType';

export const Albums = ()=>{
    const [albums, setAlbums] = useState<AlbumType[]>([]);

    useEffect(()=>{
        getAlbums();
    },[]);

    const getAlbums = async ()=> {
        const tmpAlbums = await api.getAlbumPhoto("/albums");
        setAlbums(tmpAlbums);
    }
    return (
        <C.Container>
            { (albums.length > 0) &&
            albums.map((album, index)=>(
                <Album key={index} albumId={album.id} title={album.title}/>
            )) 
            }
        </C.Container>
    );
}