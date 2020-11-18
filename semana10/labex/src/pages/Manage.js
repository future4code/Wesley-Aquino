import React, { useState, useEffect } from 'react'
import axios from 'axios';
import styled from 'styled-components';

function Manage() {
    const [trip, setTrip] = useState({})

    useEffect(() => {

    }, [])

    const getTrips = () => {
        axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labeX/wesley-dumont/trips")
        .then((response) => {
            console.log(response)
        })
    }

    return(
    <div>
        Manage
    </div>
    )
}
export default Manage;