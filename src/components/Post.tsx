import React, { useEffect, useState } from 'react'
import { PostService } from '../Services/PostService';
import { IPost } from '../Models/IPost';

const Post: React.FC<{ userPosts:IPost [] }> = (props) => {
    const [posts, setPosts] = useState<IPost[]>([] as IPost[]);
    const [errMsg, setErrMsg] = useState<string>("");

    useEffect(() => {
        setPosts(props.userPosts);
    }, [props.userPosts])
    return (
        <>
            <div className="container">
                <div className="row mt-3">
                    {posts.map((post, index) => {
                        return (
                            <div className="col-sm-4" key={index}>
                                <div className="card shadow-lg">
                                    <div className="card-body">
                                        <h3>{post.title}</h3>
                                        <p>{post.body}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default Post