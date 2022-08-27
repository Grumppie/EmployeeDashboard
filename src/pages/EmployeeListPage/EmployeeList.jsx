import React, { useState } from 'react'
import EmployeeTable from '../../components/EmployeeTable/EmployeeTable'
import { FormControl, InputLabel, MenuItem, Select, TextField, Button } from '@mui/material'
import classes from './EmployeeList.module.css'

const EmployeeList = ({ tableData }) => {
    const [query, setQuery] = useState('')
    const [feild, setFeild] = useState('')
    const [sort, setSort] = useState('')

    const clearQuery = () => {
        setFeild('')
        setSort('')
        setQuery('')
    }

    return (
        <>
            <h1 style={{ textAlign: 'center' }}>Employee List</h1>
            <div className={classes.searchBar}>
                <TextField id="outlined-basic" label="Search Employee" variant="outlined" sx={{ width: '100%', margin: '0 1rem' }}
                    onChange={(e) => setQuery(e.target.value.toLowerCase())}
                    value={query}
                />
                <FormControl sx={{ width: '100%', margin: '0 1rem' }}>
                    <InputLabel id="demo-simple-select-label">Field</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={feild}
                        label="Field"
                        onChange={(e) => setFeild(e.target.value)}
                    >
                        <MenuItem value={'salary'}>Salary</MenuItem>
                        <MenuItem value={'id'}>Id</MenuItem>
                        <MenuItem value={'date_of_birth'}>Date of Birth</MenuItem>
                        <MenuItem value={'date_of_joining'}>Date of Joining</MenuItem>
                        <MenuItem value={'first_name'}>First Name</MenuItem>
                        <MenuItem value={'last_name'}>Last Name</MenuItem>
                        <MenuItem value={'address'}>Address</MenuItem>
                        <MenuItem value={'designation'}>Designation</MenuItem>
                    </Select>
                </FormControl>
                <FormControl sx={{ width: '100%', margin: '0 1rem' }}>
                    <InputLabel id="demo-simple-select-label">Sort</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={sort}
                        label="sort"
                        onChange={(e) => setSort(e.target.value)}
                    >
                        <MenuItem value={'ascending'}>Ascending</MenuItem>
                        <MenuItem value={'descending'}>Descending</MenuItem>
                    </Select>
                </FormControl>
                <Button variant="contained" sx={{ padding: '1rem', margin: '0 1rem', width: '100%' }} onClick={clearQuery}>Reset</Button>
            </div>
            <EmployeeTable query={query} tableData={tableData} feild={feild} sort={sort} />
        </>
    )
}

export default EmployeeList