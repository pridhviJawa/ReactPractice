import React, { ChangeEvent, FormEvent, useState } from 'react'

function BasicForm() {
    interface IUser {
        userName: string
        password: string
    }

    const [user, setUser] = useState<IUser>({
        userName:"",
        password:"",
    })
    
    const handleInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
        const {name, value} = event.target;
        setUser({
            ...user,
            [name]: value,
    })

    }

    const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
        event.preventDefault();
        console.log(user);
    }

  return (
    <div className="container mt-3">
        <div className="row">
            <div className="col-sm-4">
                <div className="card">
                    <div className="card-body">
                        <form action="" onSubmit={handleSubmit}>
                            <label htmlFor="name">User Name</label>
                            <input type="text" placeholder='username' id='name' name='userName' onChange={handleInputChange}/>
                            <label htmlFor="password">Password</label>
                            <input type="text" placeholder='password' id='password' name='password' onChange={handleInputChange}/>
                            <button type='submit'>Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default BasicForm