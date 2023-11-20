import UserContext from "../context/UserContext"
import React, {useState, useContext} from 'react'

function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    
    const {setUser} = useContext(UserContext)
    const hadleSubmit = (e) => {
        //Prevent the page from refreshing
        e.preventDefault()
        setUser({username,password})
    }

  return (
    <div>
        <h2>Login</h2>
        <input 
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        type="text" 
        placeholder='Username' />
        <input 
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder='Password'
        type="password" />
        <button 
        onClick={hadleSubmit}
        type="submit">Submit</button>
    </div>
  )
}

export default Login