import Header from "./Components/Header";
import './App.css';
import AddContact from "./Components/AddContact";
import ContactList from "./Components/ContactList";
import { useEffect, useState } from "react";
import uuid4 from 'uuid4';

function App() {
  const localStorageKey = "contacts" 
  const [con, setCon] = useState(() => {
    return JSON.parse(localStorage.getItem(localStorageKey))
  ||[]})


  useEffect(() => {
    localStorage.setItem(localStorageKey, JSON.stringify(con))
  }, [con])


  const addContact = (data) => {
    setCon([...con,{id: uuid4(), data}])
  }

  const removeContact = (id) => {
      const updatedList = con.filter((val) => {
        return val.id !== id; 
      })
      setCon(updatedList)
  }

  return (
    <div>
     <Header />
     <AddContact addContact={addContact} />
     <ContactList con={con} removeContact={removeContact} />
    </div>
  );
}

export default App;
