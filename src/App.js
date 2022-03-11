import React,{useState} from 'react';
import Contact from './Components/Contact.js'
import './index.css';
import Form from './Components/Form.js'




function App() {
 
  const [ContactList,setContact]=useState([])
const addContactHandler=(Contactadd)=>{
  setContact((prevState)=>{
    const updatedContacts=[Contactadd,...prevState]; 
    return updatedContacts;
  })

}
const DeleteContact=(contactId)=>{
  
  setContact((prevState)=>{
    const updatedContacts=prevState.filter((Contactadd)=> Contactadd.id !== contactId)
    return updatedContacts;
  })
}


let content= (<div className='justify-center  md:flex items-cente '> <p className='text-gray-500 shadow-2xl border border-gray-200 lg:w-full  h-24 md:pt-8 pt-6 text-center text-lg tracking-wide'>There is no contact added till now. want to add some?</p> </div>)

if(ContactList.length>0){
  content=(<Contact  items={ContactList}  onDeleteHandler={DeleteContact} />

  )
}
 

    


  return (
    <div className="  min-h-screen relative ">
      <div className='absolute -top-2 md:-top-2 md:left-60 left-16 lg:left-56 ml-1 lg:top-60 text-5xl font-bold lg:-rotate-90 tracking-widest text-rose-400'> PhoneBook</div>
       
      <div className='md:flex relative justify-center p-8 items-center mt-12 '>
      <Form addContact={addContactHandler}  />
      </div>
      <div className='p-4 lg:p-0 flex-col md:flex items-center '>
      <div className='md:w-1/2 '>
      {content}
      </div>
      </div>
      
      
      

      

    </div>
  );
}

export default App;
