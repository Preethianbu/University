import React, {useRef} from 'react'
import './Testimonials.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.png'

const Testimonials = () => {

    const slider = useRef();
    let tx = 0;

const slideForward = ()=>{
    if(tx > -75){
        tx -= 25;
    }

    slider.current.style.transform =`translateX(${tx}%)`
    
}
const slideBackward = ()=>{
    if(tx < 0){
        tx += 25;
    }

    slider.current.style.transform = `translateX(${tx}%)`

}

    
  return (
    <div className='testimonials'>
        <img src={next_icon} alt="" className='next-btn' onClick={slideForward}/>
        <img src={back_icon} alt="" className='back-btn' onClick={slideBackward}/>
        <div className="slider">
            <ul ref={slider}>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_1} alt="" />
                            <div>
                                <h3>Sarah Samuel</h3>
                                <span>Edusity, IND</span>
                            </div>
                        </div>
                        <p>I’m pursuing my undergraduate degree at Edusity, where I can learn at my own pace. The platform offers a variety of courses and resources that help me deepen my understanding of my subjects. I appreciate the flexibility and support from the Edusity community as I work towards my academic goals.</p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_2} alt="" />
                            <div>
                                <h3>Sam William</h3>
                                <span>Edusity, IND</span>
                            </div>
                        </div>
                        <p>My career goals through Edusity, and it’s been a transformative experience. The platform offers a wide range of courses that align perfectly with my interests in both academics and sports. With the flexibility to learn at my own pace, I can balance my studies with my training and competitions. The supportive community of fellow learners and mentors has kept me motivated, helping me develop both my skills and my passion for sports. I’m excited about how this education will shape my future career in athletics!</p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_3} alt="" />
                            <div>
                                <h3>Meera Joseh</h3>
                                <span>Edusity, IND</span>
                            </div>
                        </div>
                        <p>I’m currently enrolled in a postgraduate program at Edusity, which allows me to explore my interests in depth. The platform offers cutting-edge resources and a variety of specialized courses that enrich my learning journey. I enjoy the dynamic community and the convenience of studying on my own schedule as I work toward my future career.</p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_4} alt="" />
                            <div>
                                <h3>Sunita</h3>
                                <span>Edusity, IND</span>
                            </div>
                        </div>
                        <p>At Edusity, and the focus on placement has been incredibly helpful. The platform offers tailored resources and workshops that prepare me for the job market. With guidance from industry professionals, I feel more confident in my skills. I’m excited about the opportunities ahead and the support I receive in landing my dream job!</p>
                    </div>
                </li>
            </ul>
        </div>
      
    </div>
  )
}

export default Testimonials
