import React, { useState } from 'react'

export const ContactCard = (props) => {
    const[showAge,setShowAge]=useState(false);
    const Showing =()=>{
        if (showAge === false) {
            setShowAge(true);

        }
        else{
            setShowAge(false);
        }

    }
  return (
    <div className="contact-card">
      <img src='http://via.placeholder.com/150' alt='profile-img'/>
      <div className='user-details'>
        <p>{props.name}</p>
        <p>{props.email}</p>
        <button onClick={()=>Showing()}>Show Age</button>
        {/*We could have used {()=>Showing(!showAge)}
            Which directly changes the value of the boolean to the opposite
            
            And we use arrow functions on the onclikc events because normal function
            will render at the start meanwhile arrow function will only start when
            the button is clicked
        */}
         
        
        {
            showAge && <p>{props.age}</p>
        }

      </div>
    </div>
  )
}
