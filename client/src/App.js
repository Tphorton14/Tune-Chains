import React from "react";
import Books from "./pages/Books";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
    return (
        <Router>
            <div>
                <Nav />
                <Switch>
                    <Route />
                    <Route />
                </Switch>
            </div>
        </Router>
    );
}

export default App;