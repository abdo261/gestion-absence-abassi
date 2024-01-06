import { BsExclamationTriangle } from "react-icons/bs"


const ErrorAlert = ({ error }) => {
  return (
    <div class="alert alert-danger d-flex align-items-center" role="alert" >
    <BsExclamationTriangle className="text-danger" size={30}/>
    <div>
     {error && error}
    </div>
  </div>
  )
}

export default ErrorAlert