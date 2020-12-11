import React from 'react';
import { withRouter } from 'react-router-dom';
import { useEffect } from 'react';

const UserDetail = (props) => {

    let detail = props.detail.data


    useEffect((() => {
        props.getDetail(`https://api.github.com/users/${props.match.params.username}`)
    }), [])

    return (
        <div>
            <ul>
                <li>{detail.name}</li>
                <li>{detail.location}</li>
            </ul>
        </div>
    )

}

export default withRouter(UserDetail);