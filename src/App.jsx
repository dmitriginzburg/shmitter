import './App.css'
import Navigation from "./components/Navigation.jsx";
import Body from "./components/Body.jsx";
import {useState} from "react";

function App() {
    const [user, setUser] = useState({
        avatar: 'https://gravatar.com/avatar/000?d=monsterid',
        name: 'Monster'
    });

    const [stats, setStats] = useState({
        followers: 10,
        following: 100
    })

    return (
        <div className={'app'}>
            <Navigation user={user}/>
            <Body user={user} stats={stats}/>
        </div>
    )
}

export default App
