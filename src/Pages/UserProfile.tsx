import React, { useEffect, useState } from 'react'
import Post from '../components/Post'
import TodoList from '../components/TodoList'
import { useLocation, useParams, useSearchParams } from 'react-router-dom';
import { UserService } from '../Services/UserService';
import { IUser } from '../Models/IUsers';
import { PostService } from '../Services/PostService';
import { IPost } from '../Models/IPost';
import Album from '../components/Album';
import { AlbumService } from '../Services/AlbumService';
import { IAlbum } from '../Models/IAlbum';
import { TodoService } from '../Services/TodoService';
import { Itodo } from '../Models/ITodo';

const UserProfile: React.FC = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const userId = searchParams.get("userId")

    const [activeTab, setActiveTab] = useState("post")
    const [currentUser, setCurrentUser] = useState<IUser>({} as IUser);
    const [userPosts, setUserPosts] = useState<IPost[]>([] as IPost[]);
    const [userAlbums, setUserAlbums] = useState<IAlbum[]>([] as IAlbum[]);
    const [userTodos, setUserTodos] = useState<Itodo[]>([] as Itodo[]);
    const [errMsg, setErrMsg] = useState<string>("");

    useEffect(() => {
        UserService.getCurrentUser(userId)
            .then((resp) => {
                setCurrentUser(resp.data)
            })
            .catch((e) => setErrMsg(e.message))

        PostService.getUserPosts(userId)
            .then((resp) => {
                setUserPosts(resp.data)
            })
            .catch((e) => setErrMsg(e.message))
    }, [])

    const openContent = (tab: string) => {
        if (tab === "album"){
            AlbumService.getUserAlbums(userId)
            .then((resp) => {
                setUserAlbums(resp.data)
            })
            .catch((e) => setErrMsg(e.message))
        } else if (tab === "todo") {
            TodoService.getUserTodos(userId)
            .then((resp) => {
                setUserTodos(resp.data)
            })
            .catch((e) => setErrMsg(e.message))
        }

        setActiveTab(tab);
    }

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <p className="h3 text-info">{currentUser.name}</p>
                        <p className="fst-italic">
                            {`${currentUser.email} | ${currentUser.phone} | ${currentUser.website}`}
                        </p>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <ul className="nav nav-tabs">
                            <li className="nav-item" onClick={() => setActiveTab("post")}>
                                <a className="nav-link">Posts</a>
                            </li>
                            <li className="nav-item" onClick={() => openContent("album")}>
                                <a className="nav-link">Albums</a>
                            </li>
                            <li className="nav-item" onClick={() => openContent("todo")}>
                                <a className="nav-link" >Todos</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            {activeTab === "post" ?
                <Post
                    userPosts={userPosts}
                /> :
                activeTab === "album" ?
                    <Album userAlbums={userAlbums}/> :
                    <TodoList userTodos={userTodos}/>
            }
        </>
    )
}

export default UserProfile