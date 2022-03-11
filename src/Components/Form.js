import './contact.css';
import ErrorModal from './ErrorModal.js'
import React,{useState} from 'react';
const Form=(props)=>{
    const [oldName,setName]=useState('')
    const [oldAge,setAge]=useState('')
    const [oldEmail,setEmail]=useState('')
    const [oldMobile,setMobile]=useState('')
    const [error,setError]=useState();
        
        const NameChangeHandler=(event)=>{
            
            setName(event.target.value)

        }
        const AgeChangeHandler=(event)=>{
            
            setAge(event.target.value)

        }
        const emailHandler=(event)=>{
            setEmail(event.target.value)
        }
        const mobileHandler=(event)=>{
            setMobile(event.target.value)
        }

        const SubmitHandler=(event)=>{
            event.preventDefault();
            if(oldEmail.trim().length===0 || oldMobile.trim().length===0 || oldName.trim().length===0 || oldAge.trim().length===0){
                setError({
                    title:'Invalid Input',
                    description:'The Input fields corresponding to age and mobile must be a number greater than zero . also check that no field is left blank'
                })
                return;
            }
            
            
            const formList={
                Name:oldName,
                Age:oldAge,
                Mobile:oldMobile,
                Email:oldEmail,
                id:Math.random().toString()
            }
            props.addContact(formList)
            setName('');
            setAge('');
            setEmail('');
            setMobile('');

        }

        const errorHandler=()=>{
            setError(null);
        }


    return(
        

        <div className='md:w-1/2  bg-white md:px-8 px-6 shadow-2xl md:mb-20 mb-6 border border-gray-200  py-8 rounded-br-xl rounded-tl-xl'>
            {error && <ErrorModal Confirm={errorHandler} title={error.title} description={error.description}/>}
            <form onSubmit={SubmitHandler} >
        <div className="mb-4  text-gray-400 flex items-center font-bold   ">
          <label htmlFor="name" className="mr-3 inline-block text-gray-400  w-16 ">Name</label>
          <input type="text" id="name" placeholder="chris" value={oldName} onChange={NameChangeHandler}  
            className="border-b-4  text-gray-500 focus:border-rose-400 border-gray-300  mt-1 p-2 h-10 flex-1 outline-none"/>
        </div>
        <div className="mb-4  text-gray-400 flex items-center font-bold">
          <label htmlFor="email" className="mr-3 inline-block  text-gray-400  w-16">Email</label>
          <input type="email" id="email" value={oldEmail} onChange={emailHandler}
            className="border-b-4 border-gray-300 text-gray-500 focus:border-rose-400 w-full mt-1 p-2 h-10 flex-1 outline-none"
            placeholder="chris1234@gmail.com"/>
        </div>
        <div className="mb-4  text-gray-400 flex items-center font-bold">
          <label htmlFor="twitter" className="mr-3 inline-block  text-gray-400  w-16">Age</label>
          <input type="number" id="twitter" value={oldAge} onChange={AgeChangeHandler}  
            className="border-b-4 border-gray-300 text-gray-500 focus:border-rose-400 w-full mt-1 p-2 h-10 flex-1 outline-none"
            placeholder="25"/>
        </div>
        <div className="mb-4  text-gray-400 flex items-center font-bold">
          <label htmlFor="mobile" id="mobile" className="mr-3 mb-6   inline-block  text-gray-400   w-16">Mobile</label>
          <input type="text" value={oldMobile} onChange={mobileHandler}
            className="border-b-4 border-gray-300 text-gray-500 focus:border-rose-400 w-full mt-1 mb-8  p-2 h-10 flex-1 outline-none"
            placeholder="1234567890"/>
        </div>
        <button type="submit"
          className="bg-rose-500 w-full h-12 rounded-full shadow-lg hover:shadow-xl font-bold  text-rose-100 tracking-widest focus:ring-2 focus:ring-rose-400 hover:bg-rose-700">Add Contact</button>
      </form>


        </div>

    )
}
export default Form;


