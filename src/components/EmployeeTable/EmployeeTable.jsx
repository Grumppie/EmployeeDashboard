import React, { useEffect, useState } from 'react'
import { TableHead, TableBody, TableRow, Table, TableCell, Paper, TableContainer } from '@mui/material'
import { Link, useNavigate } from 'react-router-dom'
import { sort_data, filter } from './EmployeeTableUtils.js'
import EmployeeDetails from '../../pages/EmployeeDetailsPage/EmployeeDetails.jsx'

const EmployeeTable = ({ query, tableData, feild, sort }) => {

    const navigate = useNavigate()

    return (
        <TableContainer component={Paper} sx={{ height: '100vh', width: '98vw', margin: '1rem' }}>
            <Table aria-label="simple table" stickyHeader>
                <TableHead>
                    <TableRow>
                        <TableCell align='center'>Id</TableCell>
                        <TableCell align='center'>First Name</TableCell>
                        <TableCell align='center'>Last Name</TableCell>
                        <TableCell align='center'>Date of Birth</TableCell>
                        <TableCell align='center'>Address</TableCell>
                        <TableCell align='center'>Date of Joining</TableCell>
                        <TableCell align='center'>Salary</TableCell>
                        <TableCell align='center'>Designation</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        sort_data(feild, sort, filter(tableData, query)).map((row, index) => {
                            const backgroundColor = index % 2 ? '#f1f1f1' : 'white'
                            return <TableRow key={row.id} sx={{ '&:last-child td, &:last-child th': { border: 0 }, backgroundColor: backgroundColor }}>
                                <TableCell align='center' onClick={() => navigate(`/employee/${row.id}`)} style={{ cursor: 'pointer' }}>{row.id}</TableCell>
                                <TableCell align='center'>{row.first_name}</TableCell>
                                <TableCell align='center'>{row.last_name}</TableCell>
                                <TableCell align='center'>{row.date_of_birth}</TableCell>
                                <TableCell align='center'>{row.address}</TableCell>
                                <TableCell align='center'>{row.date_of_joining}</TableCell>
                                <TableCell align='center'>{row.salary}</TableCell>
                                <TableCell align='center'>{row.designation}</TableCell>
                            </TableRow>
                        })
                    }
                </TableBody>
            </Table>
        </TableContainer >
    )
}

export default EmployeeTable