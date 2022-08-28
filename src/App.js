import EmployeeList from "./pages/EmployeeListPage/EmployeeList";
import { Routes, Route, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import EmployeeDetails from "./pages/EmployeeDetailsPage/EmployeeDetails";
import Hierarchy from "./pages/HierarchyPage/Hierarchy";
import Navbar from "./components/Navbar/Navbar";

function App() {

  const [tableData, setTableData] = useState([])

  useEffect(() => {
    fetch('https://opensheet.elk.sh/1gH5Kle-styszcHF2G0H8l1w1nDt1RhO9NHNCpHhKK0M/employees').then(data => data.json()).then((data) => setTableData(data))
  }, [])

  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<EmployeeList tableData={tableData} />} />
        <Route exact path="/employee/:id" element={<EmployeeDetails tableData={tableData} />} />
        <Route exact path="/hierarchy/" element={<Hierarchy tableData={tableData} />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  )
}

export default App;
