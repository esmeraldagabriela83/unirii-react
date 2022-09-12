import React,{useState,useEffect} from 'react';
console.log("salut from ButtonToClick.js");

export default function ButtonToClick({text, doClick}){
  const clickMe = (event) =>{
      if(typeof doClick === 'function') {
          doClick(text + " was clicked");
      }
  }

  return (
    <button onClick={clickMe}>{text}</button>
  )
}
