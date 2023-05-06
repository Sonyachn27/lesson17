// import logo from './logo.svg';
import './App.css';
import { Fragment, useState } from 'react';
import React, { Component } from 'react'

const contacts_all = [{
  firstName: "Барней",
  lastName: "Стинсовський",
  phone: "+380956319521",
  gender: "male"
  }, {
  firstName: "Робін",
  lastName: "Щербатська",
  phone: "+380931460123",
  gender: "female"
  }, {
  firstName: "Анонімний",
  lastName: "Анонімус",
  phone: "+380666666666"
  }, {
  firstName: "Лілія",
  lastName: "Олдровна",
  phone: "+380504691254",
  gender: "female"
  }, {
  firstName: "Маршен",
  lastName: "Еріксонян",
  phone: "+380739432123",
  gender: "male"
  }, {
  firstName: "Теодор",
  lastName: "Мотсбес",
  phone: "+380956319521",
  gender: "male"
  }]
function ContactList(props) {
  return(
    <div className='contact_list'>
   <p>Name: {props.firstName} </p> 
   <p>Last name: {props.lastName} </p> 
   <p>Phone: {props.phone} </p> 
   <p>Gender: {props.gender} </p> 
    </div>
  )  
}
function Input (){
  const [contact, setContact] = useState(contacts_all)
  const [text, setText] = useState('');
  const [checkbox, setCheckbox] = useState(false);
  function handleChange(event) {
    setText(event.target.value.toString().toUpperCase());
    setContact(contacts_all.filter((el) => el.firstName.toUpperCase().includes(text) || el.lastName.toUpperCase().includes(text) || el.phone.toUpperCase().includes(text)))       
    }
  function onInStockOnlyChange(event){
          setCheckbox(event.target.checked)
          if(checkbox){
            return (setContact(contacts_all) )
          } 
          setContact(contacts_all.filter((el) => el.gender ==='female'))
        }
  function onMenOnlyChange(event){
          setCheckbox(event.target.checked)
          if(checkbox){
            return (setContact(contacts_all) )
          } 
          setContact(contacts_all.filter((el) => el.gender ==='male'))
        }
    return(
      <Fragment>
 <div className='input_wrap'>
 <input className='input' type='text' placeholder='Search' value={text} 
  onChange={((event) => { handleChange(event) })} />
  <input className="checkbox" 
    type="checkbox" 
    onChange={onInStockOnlyChange }
    />
    <span className='check_span'> women </span>
    <input className="checkbox" type="checkbox" 
    onChange={onMenOnlyChange}
    />
    <span className='check_span'> men </span> </div>
  

<div className='contact_wrapper'>
  {contact.map((el, i)=> <ContactList {...el} key={i} />)}
</div>
      </Fragment>
    )
}
function Contracts() {
  return (
    <div className="contact">
    <Input />
    </div>
  );
}


export default Contracts;
