import React from "react";
// import whiskers from './component/img/R.jpeg';


export default function Contact({img, phone, email, name}) {
  //  console.log(props.img);
    return (
  <div className='contact'>
    <div className='img-con'>
    <img src={img} alt="whiskers" />
    </div>
    <h3>{name}</h3>
    <p>{phone}</p>
    <small>{email}</small>
  </div>
    )
}