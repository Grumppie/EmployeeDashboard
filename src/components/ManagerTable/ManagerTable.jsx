import React, { useEffect, useState } from 'react'
import { TableHead, TableBody, TableRow, Table, TableCell, Paper, TableContainer } from '@mui/material'
import { useNavigate } from 'react-router-dom'

const ManagerTable = ({ tableData }) => {
    const navigate = useNavigate()
    return (
        <TableContainer component={Paper} sx={{ height: '100vh', width: '98vw', margin: '1rem' }}>
            <Table aria-label="simple table" stickyHeader>
                <TableHead>
                    <TableRow>
                        <TableCell align='center'>Manager</TableCell>
                        <TableCell align='center'>designation</TableCell>
                        <TableCell align='center'>Employees</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        tableData.map((row, index) => {
                            const backgroundColor = index % 2 ? '#f1f1f1' : 'white'
                            return <TableRow key={row.id} sx={{ '&:last-child td, &:last-child th': { border: 0 }, backgroundColor: backgroundColor }}>
                                <TableCell align='center' onClick={() => navigate(`/employee/${row.id}`)} sx={{ cursor: 'pointer' }}>{row.id} {row.first_name} {row.last_name}</TableCell>
                                <TableCell align='center'>{row.designation}</TableCell>
                                <TableCell align='center' sx={{ cursor: 'pointer' }}>
                                    {row.children.map(child => {
                                        return <span style={{ display: 'block' }} onClick={() => navigate(`/employee/${child.id}`)}>{child.id} {child.first_name} {child.last_name}</span>
                                    })}
                                </TableCell>
                            </TableRow>
                        })
                    }
                </TableBody>
            </Table>
        </TableContainer >
    )
}

export default ManagerTable