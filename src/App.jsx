import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import AddStudent from "./components/AddStudent";
import AddTeacher from "./components/AddTeacher";
import DeleteTeacher from "./components/DeleteTeacher";
import DeleteStudent from "./components/DeleteStudent";
import { Box } from "@mui/material";
import Login from "./Login";
function App() {
  return (
    <Box sx={{ display: "flex" }}>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/add-student' element={<AddStudent />} />
        <Route path='/add-teacher' element={<AddTeacher />} />
        <Route path='/delete-student' element={<DeleteStudent />} />
        <Route path='/delete-teacher' element={<DeleteTeacher />} />
      </Routes>
    </Box>
  );
}

export default App;
