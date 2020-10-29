import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

const ButtonDelete = styled.button`
color: red;
margin: 1vw;
`
const Container = styled.p`
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
        const confirm = window.confirm("Deseja mesmo deletar?")
        if(confirm === true) {
        axios.delete(`${baseUrl}/${idUser}`, axiosConfig)
        .then((response) => {
            alert("Usuário Deletado! Yeeaaah");
            this.getUsers();
        }).catch(error => {
            alert("Não deu certo, tente denovo!")
            console.log(error.message)
        })
    }
}

userDetails = () => {
    return 
}

render() {
    const nameList = this.state.users.map((user) => {
        return <Container key={user.id}>{user.name}
        <ButtonDelete onClick={() => this.toDeleteUser(user.id)}>Deletar</ButtonDelete>
        </Container>;
    });

    return <div>
        <p onClick={this.userDetails}>{nameList}</p>
    </div>

}

}
export default Users;