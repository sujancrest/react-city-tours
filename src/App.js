import React from "react";
import Navbar from "./components/Navbar"
import Home from "./page/Home"
import About from "./page/About"
import Tourist from "./page/Tourist"
import { Route, Switch } from "react-router-dom"

function App() {
    return (
        <div>
            <Navbar />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/tourist" component={Tourist} />
            </Switch>
        </div>
    )
}


export default App;