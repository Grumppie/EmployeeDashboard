import React, { useState } from 'react'
import ManagerTable from '../../components/ManagerTable/ManagerTable';

const Hierarchy = ({ tableData }) => {
    console.log(tableData);
    const managers = tableData.map(manager => {
        const children = tableData.filter(emp => manager.id === emp.manager_id)
        manager.children = children
        return manager
    })

    return (
        <ManagerTable tableData={managers}/>
    )
}

export default Hierarchy