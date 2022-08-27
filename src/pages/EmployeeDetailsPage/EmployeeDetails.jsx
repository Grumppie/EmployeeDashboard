import { CircularProgress } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import EmployeeDetailsCard from '../../components/EmployeeDetails/EmployeeDetailsCard'

const EmployeeDetails = ({ tableData }) => {
    // EXTRACTING EMPLOYEE ID FROM THE URL
    const { id } = useParams()

    // FIND EMPLOYEE DETIALS URL
    const EmployeeURL = tableData ? tableData.find(emp => emp.id === id).details : ''

    // EMPLOYEE DETAILS
    const [details, setDetails] = useState(null)


    // FETCHING EMPLOYEE DETIALS 
    useEffect(() => {
        fetch(EmployeeURL).then((data) => data.json()).then((data) => setDetails(data[0]))
    }, [])

    const Loading = () => {
        return <CircularProgress sx={{ marginLeft: '50%' }} />
    }

    return (
        <>
            {details ? (
                <EmployeeDetailsCard details={details} />
            ) : <Loading />}
        </>
    )
}

export default EmployeeDetails