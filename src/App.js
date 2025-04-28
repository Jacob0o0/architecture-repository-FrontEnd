import {React} from 'react';
import {BrowserRouter, Route, Routes, Link} from "react-router-dom";

import './styles/App.css';

import Navbar from './components/Navbar';
import Index from './layout/Index';
import Editor from './layout/Editor';

function App() {
    return (
        <BrowserRouter>
            <div class="w-screen h-screen flex bg-negroPrincipal relative text-negroPrincipal">

                <Navbar></Navbar>

                <Routes>
                    <Route path="/"                 element={<Index/>}>         </Route>
                    <Route path="/editor"           element={<Editor/>}>         </Route>
                </Routes>

                <div class="absolute"></div>
            </div>
        </BrowserRouter>
    );
}

export default App;
