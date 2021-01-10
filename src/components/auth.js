import React,{useState} from 'react'
import {signup} from '../store/actions/weatherActions'
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
function Login(props){
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')

    let sentData = () =>{
        let data = {
            usernameOrEmail: email,
            password: password
        }
        props.signup(data)
    }
    return(
        <div className='auth-div'>
            <form>
                <label>Email</label>
                <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Enter Email'></input>
                <label>Password</label>
                <input type='password' value={password}  onChange={(e) => setPassword(e.target.value)}></input>
                <button type='submit' onClick={() => {sentData()}}>Sign up</button>
            </form>
        </div>
    )
}

const mapStateToProps=(state)=>({

})

export default connect(mapStateToProps, {signup}) (withRouter(Login));
