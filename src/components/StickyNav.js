import React, {useState, useEffect} from 'react'
import Navbar from '../components/Navbar'

export default () => {
    const [fixed, setFixed] = useState(false)
    useEffect(() => {
        setTimeout(() => setFixed(true), 1000)
    })
    return (
        <Navbar {...{fixed}} />
    )
}
