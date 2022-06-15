import { useState } from 'react';


const App = () => {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    async function registerUser(event) {
        event.preventDefault();
        const response = await fetch('http://localhost:4000/api/register', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name,
                email,
                password,
            }),
        });

        const data = await response.json();

        console.log(data);
    }

    return (
        <>
            <h1>Registration Page</h1>
            <form onSubmit={registerUser}>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder='Name'/>
                <br/>
                <input type="email"  value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email'/>
                <br/>
                <input type="password"  value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password'/>
                <br/>
                <input type="submit" value="Register" />
            </form>
        </>
    )
}

export default App;