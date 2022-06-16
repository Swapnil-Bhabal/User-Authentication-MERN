import {BrowserRouter, Route, Routes} from 'react-router-dom';

import RegisterScreen from './screens/RegisterScreen';
import LoginScreen from './screens/LoginScreen';


const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/register" exact element={<RegisterScreen/>}/>
                <Route path="/login" exact element={<LoginScreen/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App;