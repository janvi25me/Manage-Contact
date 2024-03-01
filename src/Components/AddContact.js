import { useState } from 'react';
import '../App.css';

function AddContact({addContact}) {

    const [contact, setContact] = useState({name: "", email: ""});

    const handleChange = (e) => {
        //e.preventDefault();
        if(e.target.name === 'name') {
            setContact({...contact, name: e.target.value})
        }
        else {
            setContact({...contact, email: e.target.value})
        }
    }

    const handleAdd = () => {
        if(contact.name === "" || contact.email === "") {
            alert("Please fill all the details")
            return 
        }
        addContact(contact)
        setContact({name:"", email:""})
    }

    return (
     <div className='formHeader'>
     <div className="add-contact">Add Contact</div>
       <form>
         <label>Name:</label><br />
         <input 
         type="text" 
         placeholder='Enter Name' 
         name='name' 
         value={contact.name} 
         onChange={handleChange}
         />
         <br />
         <label>Email:</label><br />
         <input 
         type="email" 
         placeholder='Enter Email' 
         name='email' 
         value={contact.email}
         onChange={handleChange}
         />
       </form>
       <button 
       className='btn' 
       onClick={handleAdd}>
       Add Contact
       </button> 
     </div>
    );
}

export default AddContact;