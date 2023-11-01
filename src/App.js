
import './App.css';
import { ContactCard } from './ContactCard';

function App() {
  const contacts= [
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
  ;
  fetch("https://randomuser.me/api")
    .then(response=>response.json())
    .then(data=>console.log(data));
  return (
    <>
    {contacts.map((contact,index) => {
      return(
        <ContactCard key={index}
        name={contact.name}
        email={contact.email}
        age={contact.age}


        />
      )

    }

    )}
    </>
  );
}

export default App;
