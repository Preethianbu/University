import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'

const Contact = () => {
     

    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "de2fb031-df94-45cf-876c-07eaf146e99e");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
      
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };




  return (
    <div className='contact'>
      <div className="contact-col">
        <h3>Send us a message <img src={msg_icon} alt="" /></h3>
        <p>We love hearing from you! Whether you have questions, feedback, or suggestions, feel free to reach out. Your thoughts are important to us, and we’re here to help!</p>
        <ul>
            <li><img src={mail_icon} alt="" />edusity@gmail.com</li>
            <li><img src={phone_icon} alt="" />(123) 456-7890</li>
            <li><img src={location_icon} alt="" />123, Example Street,
                Kilpauk,
                Chennai, Tamil Nadu,
                600010, India</li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
            <label>Your name</label>
            <input type="text" name='name' placeholder='Enter your name' required/>
            <label>Your Email Id</label>
            <input type="text" name='email' placeholder='Enter your email address' required/>
            <label>Phone number</label>
            <input type="tel" name='phone' placeholder='Enter your mobile number' required/>
            <label>Write your message here</label>  
            <textarea name="message" rows="6" placeholder='Enter your message' required></textarea>
            <button type='submit' className='btn dark-btn'>Submit Now <img src={white_arrow} alt="" /></button>
         </form>
         <span>{result}</span>
      </div>
    </div>
  )
}

export default Contact