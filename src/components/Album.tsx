import React, { useEffect, useState } from 'react'
import { IAlbum } from '../Models/IAlbum'

const Album: React.FC<{ userAlbums: IAlbum[] }> = (props) => {
    const [albums, setAlbums] = useState<IAlbum[]>([] as IAlbum[]);
    const [errMsg, setErrMsg] = useState<string>("");

    useEffect(() => {
        setAlbums(props.userAlbums);
    }, [props.userAlbums])
    return (
        <div className="container">
            <div className="row mt-3">
                {albums.map((album, index) => {
                    return (
                        <div className="col-sm-4" key={index}>
                            <div className="card shadow-lg">
                                <div className="card-body">
                                    <h3>{album.title}</h3>
                                    <p>{album.id}</p>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Album