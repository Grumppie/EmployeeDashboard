import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import React, { useState } from 'react'
import ManagerTable from '../../components/ManagerTable/ManagerTable';
import classes from './Hierarchy.module.css'

const Hierarchy = ({ tableData }) => {
    console.log(tableData);
    const managers = tableData.map(manager => {
        const children = tableData.filter(emp => manager.id === emp.manager_id)
        manager.children = children
        return manager
    })

    const [query, setQuery] = useState('')

    const clearQuery = () => {
        setQuery('')
    }

    return (
        <>
            <div className={classes.searchBar}>
                <TextField id="outlined-basic" label="Search Employee" variant="outlined" sx={{ width: '100%', margin: '0 1rem' }}
                    onChange={(e) => setQuery(e.target.value.toLowerCase())}
                    value={query}
                />
                <Button variant="contained" sx={{ padding: '1rem', margin: '0 1rem', width: '100%' }} onClick={clearQuery}>Reset</Button>
            </div>
            <ManagerTable tableData={managers} query={query} />
        </>
    )
}

export default Hierarchy