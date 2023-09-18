import React, { useEffect, useState } from 'react'
import { IUser } from "../Models/IUsers";
import { UserService } from '../Services/UserService';

const UserList: React.FC = () => {
    const [users, setUsers] = useState<IUser[]>([] as IUser[]);
    const [errMsg, setErrMsg] = useState<string>("");

    useEffect(() => {
        UserService.getAllUsers()
            .then((resp) => {
                setUsers(resp.data)
            })
            .catch((e) => setErrMsg(e.message))
    }, [])

    const handleUserClick = (id: number) => {
        window.open(`/userprofile?userId=${id}`, '_blank')
    }

    return (
        <><div className='container'>
            <div className="row">
                <div className="col">
                    <p className="h3 text-info">User List</p>
                    <p className="fst-italic">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur omnis sunt consequuntur odit, iure voluptatibus modi. Ducimus possimus nesciunt placeat ex, nobis ea voluptatibus cupiditate, accusantium quisquam quis nulla quasi.
                    </p>
                </div>
            </div>
        </div>
            {/* <pre>{JSON.stringify(users)}</pre> */}
            <div className="container">
                <div className="row">
                    <div className="col">
                        <table className='table table-striped table-hover'>
                            <thead className='bg-dark text-white'>
                                <tr >
                                    <th>SNo</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Company</th>
                                    <th>City</th>
                                    <th>Website</th>
                                </tr>
                            </thead>
                            <tbody>
                                {users.length > 0 ?
                                    users.map((user, index) => {
                                        return (
                                            <tr key={index} onClick={() => handleUserClick(user.id)}>
                                                <td>{index + 1}</td>
                                                <td>{user.name}</td>
                                                <td>{user.email}</td>
                                                <td>{user.company.name}</td>
                                                <td>{user.address.city}</td>
                                                <td>{user.website}</td>
                                            </tr>
                                        )
                                    }) :
                                    <tr className='text-center'>
                                        {errMsg}
                                    </tr>
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UserList