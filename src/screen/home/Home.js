import React from 'react'
import Header from '../../components/header/Header'
import WhatsNew from "../../components/whatsnew/Whatsnew"
import RecruitmentProgress from "../../components/recruitment/Recruitment"
import Calender from "../../components/calender/Calender"

export default function Home() {
    return (
        <div className="home">
            <Header pageHeader="Dashboard"/>
            <div className="home-content">
            <div className="home-main-content">
            <WhatsNew/>
            <RecruitmentProgress/>
            
            </div>
            <div className="home-side-content">
                <Calender/>
                {/* <HRProfile/>
               cal 
               hr */}
            </div>
            </div>

        </div>
    )
}