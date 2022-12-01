import Login from '../../components/login/Login'
import './Home.css'
import { Outlet, Route, Routes } from 'react-router-dom'
import OtpVerification from '../../components/otpVerification/OtpVerification'
import ForgotPassword from '../../components/forgotPassword/ForgotPassword'
import NewPassword from '../../components/newPassword/NewPassword'

const Home = () => {
  return (
    <div className="Home-homeContainer">
      <div className="Home-formController">
        <div className="home-logo">
          <div>
            <img
              src={require('../../assets/img_virtuallearn logo_splash 2.png')}
              alt=""
              className="home-logoImg"
            />
          </div>
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default Home
