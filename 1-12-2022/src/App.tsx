import React from 'react'
import { Routes, Route } from 'react-router-dom'
import AddCourse from './components/addCourse/AddCourse'
import AdminPassword from './components/adminPassword/AdminPassword'
import ForgotPassword from './components/forgotPassword/ForgotPassword'
import Login from './components/login/Login'

import MainBoard from './components/mainBoard/MainBoard'
import NewPassword from './components/newPassword/NewPassword'
import OtpVerification from './components/otpVerification/OtpVerification'
import StudentList from './components/studentList/StudentList'
import DashBoard from './views/dashBoard/DashBoard'
import Home from './views/home/Home'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="" element={<Login />} />
          <Route path="otp" element={<OtpVerification />} />
          <Route path="forgotPassword" element={<ForgotPassword />} />
          <Route path="newPassword" element={<NewPassword />} />
        </Route>
        <Route path="/dashBoard" element={<DashBoard />}>
          <Route path="mainBoard" element={<MainBoard />} />
          <Route path="addCourses" element={<AddCourse />} />
          <Route path="studentList" element={<StudentList />} />
          <Route path="settings" element={<AdminPassword />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
