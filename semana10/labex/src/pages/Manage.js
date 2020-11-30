import React, { useState, useEffect } from 'react'
import axios from 'axios';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

function Manage() {
    const [trips, setTrips] = useState([])
    const history = useHistory()

    useEffect(() => {
        const token = localStorage.getItem('token')

        if (token === null) {
            history.push('/login')
        } else {
        getTrips()
        }
    }, [])

    const getTrips = () => {
        axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labeX/wesley-dumont/trips")
        .then((response) => {
            setTrips(response.data.trips)
        })
        .catch((error) => {
            console.log(error)
        })
    }
    return(    
        <div>
            {trips && trips.map((trip) => {
            return <button>{trip.name}</button>
        })}
        </div>
    )
}
export default Manage;