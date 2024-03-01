import React from 'react';
import ReactDOM from 'react-dom/client';
import Contact from './Contact.js';
import './App.css';
import './index.css';
function loadImage(path) {
  return require(`../img/${path}`);
}

  const element = ReactDOM.createRoot(document.getElementById('root'));

element.render(
  <div className='container'>
 <Contact 
 img={loadImage('R.jpeg')}
 name="Mr Whiskerson"
 phone="(212) 555-24367"
 email="mrwhiskerson@gmail.com"
 />
 <Contact
 img={loadImage('oip.jpeg')}
 name="Mrs Meowrty"
 phone="(212) 555-2436"
 email="mrsmeowrty@gmail.com" />
 <Contact 
 img={loadImage('purr.jpeg')}
 name="Purrlock Meow"
 phone="(212) 416-87437"
 email="purrlockmeow@gmail.com"/>
 <Contact 
 img={loadImage('redlabel.jpeg')}
 name="Catora Meogwaya"
 phone="(212) 234-2354"
 email="catorameogwaya@gmail.com"/>
 </div>
);


