import React from 'react'
import "../HomeStyle.css"
import First from "../Component/1.png"
import Second from "../Component/2.png"
import Third from "../Component/3.png"
import Forth from "../Component/4.png"
import Fifth from "../Component/5.png"
import Sixth from "../Component/6.png"

const HomeDescription = () => {
    return (
        <div className="home-description-image-section">
           <h1 className="home-heading">Showcase your potential,Cut down on writing and,Store your resume online</h1>
            <div className="home-description-section">
                Easily build a professional-looking resume that showcases your goals and qualifications. Just pick a<br/>template and fill in the blanks. No formatting is needed!
            </div> 
            <div className='demo_home'>
                <img src={First} alt="" />
                <img src={Second} alt="" />
                <img src={Third} alt="" />
                <img src={Sixth} alt="" />
                <img src={Forth} alt="" />
                <img src={Fifth} alt="" />
                



            </div>

        </div>
    )
}

export default HomeDescription
