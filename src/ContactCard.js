import React, { useState } from 'react'

export const ContactCard = () => {
    const[showAge,setShowAge]=useState(false);
    const Showing =()=>{
        if (showAge == false) {
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
        <p>Name:Swapnil Deep</p>
        <p>Email:Swapnil@gmail.com</p>
        <button onClick={()=>Showing()}>Show Age</button>
        
        {
            showAge && <p>age:42</p>
        }

      </div>
    </div>
  )
}
