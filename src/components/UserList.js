import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';

const UserList = (props) => {

    let list = props.users.data

    useEffect((
        () => props.getUser('https://api.github.com/users?per_page=100')
    ), [])

    const handleClick = (username) => {
        props.history.push(`/user/${username}`)
    }

    return (
        <div>
            <h1>User List</h1>
            {props.users.isFatching ? <div>Loading...</div> : null}
            {props.users.error ? <div>Error...</div> : null}
            <table>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>username</th>
                        <th>image</th>
                    </tr>
                </thead>
                <tbody>
                    {list.map(({ id, login, avatar_url }) => {
                        return (
                            <tr key={id} onClick={() => handleClick(login)}>
                                <td>{id}</td>
                                <td>{login}</td>
                                <td><img src={avatar_url} alt={login} style={{ height: 50, width: 50 }} /></td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default withRouter(UserList);


