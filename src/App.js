import React from 'react'

import { Brand, CTA, Navbar, } from './components';
import { Footer, Blog, Possibility, Features, WhatGPT3, Header } from './container'
import './App.css';

const App = () => {
    return (
        <div>
            <div className='App'>
                <div className='gradient__bg'>
                    <Navbar />
                    <Header />
                </div>
                <Brand />
                <WhatGPT3 />
                <Features />
                <Possibility />
                <CTA />
                <Blog />
                <Footer />
            </div>
        </div>
    )
}

export default App
