import React from 'react';
import ContactWrapper from './ContactWrapper.js'

const Contact=(props)=>{
    
    return(
        <div className=''>
            {props.items.map((Contactadd)=>(<ContactWrapper Name={Contactadd.Name}  Age={Contactadd.Age} Mobile={Contactadd.Mobile} Email={Contactadd.Email} onDelete={props.onDeleteHandler} id={Contactadd.id} key={Contactadd.id} ></ContactWrapper>))}
        </div>

    )
}
export default Contact;