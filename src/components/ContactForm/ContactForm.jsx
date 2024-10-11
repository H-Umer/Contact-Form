// import React from 'react'
// import styles from './ContactForm.module.css';
// import Button from '../Button/Button';
// import { MdMessage } from "react-icons/md";
// import { FaPhoneAlt } from "react-icons/fa";
// import { IoIosMailUnread } from "react-icons/io";



// const ContactForm = () => {
//   return (
//     <>
   
//  <div className='father'>
//  <section className={styles.container}>
    
//  <div className={styles.contact_form}></div>

// <div className={styles.top_btn}>
//    <Button text="VIA SUPPORT CHAT" icon={<MdMessage fontSize="24px" />}/>
//    <Button text="VIA CALL" icon={<FaPhoneAlt fontSize="24px" />}/>
// </div>

// </section>
// <Button className="container" 
// isOutline={true}
// text="VIA EMAIL FORM" icon={<IoIosMailUnread fontSize="24px" />}/>

//      <form className='container'>
//            <div className={styles.form_control}>
//                 <label>Name</label>
//                 <input type="text" name='name' />
//            </div>
           
//            <div className={styles.form_control}>
//            <label>Email</label>
//            <input type="email" name='email' />
//            </div>
           
//            <div className={styles.form_control}>
//            <label>Text</label>
//            <textarea name='text' />
//            </div>

//            <div style={{
//              display: 'flex',
//              justifyContent: 'center',
//              marginTop: '20px',
//              marginRight: '400px',
            
//            }} 
              
//            >
//            <Button className="container" 
//             text="Submit Buttom"/>
//            </div>
// </form> 
//  </div>
    
    
//    <div className={styles.contact_image}>
//          <img src="/Images/last_image.png" alt="last_image" />
//    </div>
   
   
   
     
   
    
    
//     </>
//   )
// }

// export default ContactForm




import Button from "../Button/Button";
import styles from "./ContactForm.module.css";
import { MdMessage } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import { useState } from "react";
const ContactForm = () => {
  const [name, setName] = useState("Anshu");
  const [email, setEmail] = useState("support@dosomecoding.com");
  const [text, setText] = useState("Subscribe to this channel");

  const onSubmit = (event) => {
    event.preventDefault();

    setName(event.target[0].value);
    setEmail(event.target[1].value);
    setText(event.target[2].value);
  };

  return (
    <section className={styles.container}>
      <div className={styles.contact_form}>
        <div className={styles.top_btn}>
          <Button
            text="VIA SUPPORT CHAT"
            icon={<MdMessage fontSize="24px" />}
          />
          <Button text="VIA CALL" icon={<FaPhoneAlt fontSize="24px" />} />
        </div>
        <Button
          isOutline={true}
          text="VIA EMAIL FORM"
          icon={<HiMail fontSize="24px" />}
        />

        <form onSubmit={onSubmit}>
          <div className={styles.form_control}>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" />
          </div>
          <div className={styles.form_control}>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" />
          </div>
          <div className={styles.form_control}>
            <label htmlFor="text">Text</label>
            <textarea name="text" rows="8" />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "end",
            }}
          >
            <Button text="SUBMIT BUTTON" />
          </div>

          <div>{name + " " + email + " " + text}</div>
        </form>
      </div>
      <div className={styles.contact_image}>
        <img src="/Images/last_image.png" alt="contactimage" />
      </div>
    </section>
  );
};

export default ContactForm;