import React from 'react'
import './Contact.css'

const Contact = () => {

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "be8cb04a-781a-473a-b1eb-29fbdd13814c");
  
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
            <h3>Send u a message <img src=".\images\msg-icon.png" alt="" /></h3>
            <p>Feel free to reach out through contact form or find our contat 
                information below.Your feedback questions, and suggestions are 
                important to us as we strive to provide exceptional service to our
                university community.
                <ul>
                <li> <img src="\images\mail-icon.png" alt="" /> mishranishant555@gmail.com</li>
                <li> <img src="\images\phone-icon.png" alt="" /> +91-8619107503 </li>
                <li> <img src="\images\location-icon.png" alt="" /> 77 Bhagat Singh house, near Bapu Nagar 
                Raila, Bhilwara Rajasthan. </li>
                </ul>
            </p>
        </div>
        <div className="contact-col">
            <form onSubmit={onSubmit}>
                <label >Your name</label>
                <input  type='text' name='name' placeholder='Enter your name ' required/>
                <label>Phone Number</label>
                <input type='tel' name='phone' placeholder='Enter you mobile number' required />
               <label>Write your message here</label>
               <textarea name="message" rows="6" placeholder='Enter your message' required></textarea>
               <button type='submit' className='btn dark-btn'>Submit now <img src="\images\white-arrow.png" alt="" /> </button>
            </form>
            <span>{result}</span>
        </div>

    </div>
  )
}

export default Contact