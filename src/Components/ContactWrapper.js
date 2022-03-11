import './contact.css';

const ContactWrapper=(props)=>{
    const DeleteHandler=()=>{
        props.onDelete(props.id)
    }
    return(
        <div className="p-4 h-1/2 w-full">


    <div className="flex flex-col shadow-xl">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200 ">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Name
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Age
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Email
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Mobile
                  </th>
                  <th scope="col" className="relative px-6 py-3">
                    <span className="sr-only">Delete</span>
                  </th>
                </tr>
              </thead>
              <tbody>
              
                 
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{props.Name}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{props.Age}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{props.Email}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{props.Mobile}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <a href="#" className="text-indigo-600 hover:text-indigo-900" onClick={DeleteHandler}>
                        Delete
                      </a>
                    </td>
                
                
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  


        </div>

    )
}
export default ContactWrapper;