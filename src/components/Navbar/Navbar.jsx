import { Button } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
    const navigate = useNavigate()
    return (
        <div style={{ position: 'relative', left: '50%', transform: 'translate(-10%,0)' }}>
            <Button variant="outlined" sx={{ margin: '1rem' }} onClick={() => navigate('/')}>Employee List</Button>
            <Button variant="outlined" sx={{ margin: '1rem' }} onClick={() => navigate('/hierarchy')}>Hierarchy</Button>
        </div>
    )
}

export default Navbar