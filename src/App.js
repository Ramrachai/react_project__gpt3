import React from 'react'
import { Article, Brand, CTA, Navbar, Feature } from './components';
import { Blog, Features, Footer, Header, Possibility, WhatGPT3 } from './containers';
import './App.css'

// import files section ends here 

const App = () => {
    return (
        <div className="App">
            <div className="gradient__bg">
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
    )
}

export default App
