import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

const ButtonDelete = styled.button`
color: orange;
`
const baseUrl = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"

const axiosConfig = {
    headers: {
        Authorization: "wesley-aquino-dumont"
    }
}

class Users extends React.Component {
    state = {
        users: []
    }

    componentDidMount = () => {
        this.getUsers();
    };

    getUsers = () => {
        axios
        .get("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
        {
            headers: {
                Authorization: "wesley-aquino-dumont"
            }
        }
    )
    .then((response) => {
        this.setState({users: response.data});
    })
    .catch((error) => {
        console.log(error.message);
    });
    };

    toDeleteUser = (idUser) => {
        axios.delete(`${baseUrl}/${idUser}`, axiosConfig)
        .then((response) => {
            alert("Usuário Deletado! Yeeaaah");
            this.getUsers();
        }).catch(error => {
            alert("Não deu certo, tente denovo!")
            console.log(error.message)
        })
    }

render() {
    const nameList = this.state.users.map((user) => {
        return <p key={user.id}>{user.name}
        <ButtonDelete onClick={() => this.toDeleteUser(user.id)}>Deletar</ButtonDelete>
        </p>;
    });

    return <div>
        {nameList}
    </div>

}

}
export default Users;