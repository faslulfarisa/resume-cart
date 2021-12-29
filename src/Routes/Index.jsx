import React from 'react'
import {Routes,Route} from "react-router-dom"
import Home from "./Home"
import SignUp from "./SignUp"
import Login from "./Login"
import View from "./View"
import HowItWorks from "./HowItWorks"


const Index = () => {
    return (
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="sign-up" element={<SignUp/>}/>
                <Route path="login" element={<Login/>}/>
                <Route path="view" element={<View/>}/>
                <Route path="How-It-Works" element={<HowItWorks/>}/>
            </Routes>
    )
}

export default Index