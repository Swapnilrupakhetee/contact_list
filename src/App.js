
import { useState,useEffect } from 'react';
import './App.css';
import { ContactCard } from './ContactCard';

function App() {
 {/* const contacts= [
    {
      
      name:"Hari Bahadur",
      email:"hadsdsF@gmail.com",
      age:"34"
    },
    {
      
      name:"Ram sharma",
      email:"sdsadad@gmail.com",
      age:"24"

    },
    {
      name:"ghari sharma" ,
      email:"wqcsaw@gmail.com",
      age:"45"

    },
    {
      name:"poopa poopi",
      email:"chor@gmail.com",
      age:"55"
    }
  ]
  ;}
*/}
  const [results,setResults]=useState([])

  useEffect(()=>{
    fetch("https://randomuser.me/api/?results=8")
    .then(response=>response.json())
    .then(data=>{
    setResults(data.results)

      
    });

  },[])

  
  

  return (
    <>
    {results.map((result,index) => {
      return(
        <ContactCard key={index}
        avatarUrl={result.picture.large}
        name={result.name.first}
        last_name={result.name.last}
        email={result.email}
        age={result.dob.age}


        />
      )

    }

    )}
    </>
  );
}

export default App;
