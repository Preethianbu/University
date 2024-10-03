import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play.icon.png'


const About = ({setPlayState}) => {
  return (
    <div className='about'>
        <div className="about-left">
            <img src={about_img} alt="" className='about-img'/>
            <img src={play_icon} alt="" className='play-icon' onClick={()=>{setPlayState(true)}}/>
        </div>
      <div className="about-right">
        <h3>ABOUT UNIVERSITY</h3>
        <h2>Nurturing Tomorrow's Leaders Today</h2>
        <p>Education empowers individuals by fostering critical thinking and creativity. It opens doors to opportunities and promotes social progress. Ultimately, it is a lifelong journey that enriches personal and collective growth.</p>
        <p>Our college is a vibrant hub of knowledge and discovery, where diverse ideas come together. It encourages critical thinking and collaboration, preparing us for future challenges. The supportive community fosters personal growth and lifelong friendships, making learning an enriching experience.</p>
        <p>College equips us with essential skills like critical thinking, effective communication, and teamwork. These skills prepare us for professional success and real-world challenges. Additionally, they foster adaptability, helping us thrive in an ever-changing landscape.</p>
      </div>
    </div>
  )
}

export default About
