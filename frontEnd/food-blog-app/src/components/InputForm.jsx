import React,{useState} from 'react'
import axios from 'axios'

export default function InputForm({setIsOpen}) {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [isSignUp, setIsSignUp] = useState(false)
    const [error, setError] = useState("")

    const handleOnSubmit = async (e) => {
        e.preventDefault()
        let endpoint = (isSignUp) ? "signUp" : "login"
        await axios.post(`http://localhost:5000/${endpoint}`, {email, password})
        .then((res) =>{
            localStorage.setItem("token", res.data.token)
            localStorage.setItem("user", JSON.stringify(res.data.token))
            setIsOpen()
        })
        .catch(data => setError(data.response?.data.error))
    }

  return (
    <>
    <form className='form' onSubmit={handleOnSubmit} action="">
        <div className='form-control'>
            <label htmlFor="">Email</label>
            <input type="email" className='input' onChange={(e) => setEmail(e.target.value)} required />
        </div>

        <div className='form-control'>
            <label htmlFor="">Password</label>
            <input type="password" className='input' onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <button type='submit'>{(isSignUp) ? "Sign Up" : "Login"}</button>
        <pre></pre>
        {(error !== "") && <h6 className='error'>{error}</h6>}
        <p onClick={() => setIsSignUp(pre => !pre)}>{(isSignUp) ? "Already Have an Account!! " : "Create New Account !!"}</p>
    </form>
    </>
  )
}
