import '../App.css';
import DeleteIcon from '@mui/icons-material/Delete';

const ContactList = (props) => {

     const {con, removeContact} = props

    const ContactList = con.map((val) => {
        return (
            <div className='contact-list'>
                <div>{val.data.name}</div>
                <div>{val.data.email}</div>
                <span onClick={() => removeContact(val.id)}><DeleteIcon /></span>
            </div>
        )
    })

  return (
    <>
      <div className='ContactHeader'>Contact List</div> 
      <div>{ContactList}</div>
    </>
  )
}

export default ContactList
