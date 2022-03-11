
import './contact.css';

const ErrorModal=(props)=>{
    return(
        <div className="fixed z-10 inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
  <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
   
    <div className="fixed inset-0 bg-gray-700 bg-opacity-90 transition-opacity" onClick={props.Confirm} aria-hidden="true"></div>

    
    <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

    
    <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6">
      <div>
        
        <div className="mt-3 text-center sm:mt-5">
          <h3 className="text-lg leading-6 font-medium text-gray-900" id="modal-title">
            {props.title}
          </h3>
          <div className="mt-2">
            <p className="text-sm text-gray-500">
             {props.description}
            </p>
          </div>
        </div>
      </div>
      <div className="mt-5 sm:mt-6">
        <button type="button" className="inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-cyan-500 text-base font-medium text-white hover:bg-cyan-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-400 sm:text-sm" onClick={props.Confirm}>
          Okay
        </button>
      </div>
    </div>
  </div>
</div>

    )
}

export default ErrorModal;