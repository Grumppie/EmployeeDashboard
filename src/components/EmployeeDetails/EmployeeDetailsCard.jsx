import React from 'react'
import classes from './EmployeeDetailsCard.module.css'
import employeePfp from '../../assets/employee_pfp.jpg'
import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'

const EmployeeDetailsCard = ({ details }) => {
    const navigate = useNavigate()
    return (
        <>
            <Button variant="outlined" sx={{ margin: '2rem' }} onClick={() => navigate('/')}>Employee List</Button>
            <div className={classes.card}>
                <div className={classes.imgContainer}>
                    <img className={classes.img} src={employeePfp} alt="Employee pfp" />
                </div>
                <div className={classes.infoContainer}>
                    <span className={classes.infoFeild}><span className={classes.infoName}>Name:</span> {`${details.first_name} ${details.last_name}`}</span>
                    <span className={classes.infoFeild}><span className={classes.infoName}>Designation: </span>{details.designation}</span>
                    <span className={classes.infoFeild}><span className={classes.infoName}>Address:</span> {details.address}</span>
                    <span className={classes.infoFeild}><span className={classes.infoName}>Date of Joining: </span>{details.date_of_joining}</span>
                    <span className={classes.infoFeild}><span className={classes.infoName}>Date of Birth:</span> {details.date_of_birth}</span>
                    <span className={classes.infoFeild}><span className={classes.infoName}>salary:</span> {details.salary}</span>
                </div>
            </div></>
    )
}

export default EmployeeDetailsCard