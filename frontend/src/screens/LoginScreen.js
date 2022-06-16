import { useState} from 'react';

const LoginScreen = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    
    async function loginUser(event) {
        event.preventDefault();
        const response = await fetch('http://localhost:4000/api/login', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email,
                password,
            })
        });
    
        const data = await response.json();
        console.log(data);
        
        if(data.user) {
            localStorage.setItem('token', data.user);
            alert('Login Succesful');
        } else {
            alert('Please check your username and password');
        }
    }
    
    return (
        <>
            <h1>Login Page</h1>
            <form onSubmit={loginUser}>
                <input type="email"  value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email'/>
                <br/>
                <input type="password"  value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password'/>
                <br/>
                <input type="submit" value="Login" />
            </form>
        </>
    )

}

export default LoginScreen;
