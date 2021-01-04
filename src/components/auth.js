import React,{useState} from 'react'
import {signup} from '../store/actions/weatherActions'
function Login(props){
    const [email,setEmail] = useState('')
    const [username,setUsername] = useState('')
    const [password,setPassword] = useState('')

    let sentData = () =>{
        let data = {
            emailData: email,
            userData: username,
            passData: password
        }
        props.signup(data)
    }
    return(
        <div className='auth-div'>
            <form>
                <label>Email</label>
                <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Enter Email'></input>
                <label>Username</label>
                <input type='text' value={username}  onChange={(e) => setUsername(e.target.value)} placeholder='Enter Name'></input>
                <label>Password</label>
                <input type='password' value={password}  onChange={(e) => setPassword(e.target.value)}></input>
                <button type='submit' onClick={() => {sentData()}}>Sign up</button>
            </form>
        </div>
    )
}

export default Login;