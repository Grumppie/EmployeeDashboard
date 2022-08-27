import EmployeeList from "./pages/EmployeeList/EmployeeList";
import { Routes, Route, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";

function App() {

  const [tableData, setTableData] = useState([])

  useEffect(() => {
    fetch('https://opensheet.elk.sh/1gH5Kle-styszcHF2G0H8l1w1nDt1RhO9NHNCpHhKK0M/employees').then(data => data.json()).then((data) => setTableData(data))
  }, [])

  return (
    <Routes>
      <Route exact path="/" element={<EmployeeList tableData={tableData} />} />
      {/* <Route path="*" element={<Navigate to="/" />} /> */}
    </Routes>
  )
}

export default App;
