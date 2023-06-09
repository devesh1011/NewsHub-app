import React, { useState } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import Category from './components/Category';
import LoadingBar from 'react-top-loading-bar'
import { BrowserRouter as Main, Route, Routes } from 'react-router-dom';

const App = () => {
    const apiKey = process.env.REACT_APP_NEWS_API;
    const [progress, setProgress] = useState(10);

    return (
        <>
            <Main>
                <LoadingBar color='#f11946' progress={progress} />
                <Navbar />
                <Category />
                <div className="container">
                    <Routes>
                        <Route exact path='/' element={
                            <News key="general" setProgress={setProgress} apiKey={apiKey} pageSize={6} country='in' category='general' />
                        }></Route>

                        <Route exact path='/business' element={
                            <News key="business" setProgress={setProgress} apiKey={apiKey} pageSize={6} country='in' category='business' />
                        }></Route>

                        <Route exact path='/sports' element={
                            <News key="sports" setProgress={setProgress} apiKey={apiKey} pageSize={6} country='in' category='sports' />
                        }></Route>

                        <Route exact path='/technology' element={
                            <News key="technology" setProgress={setProgress} apiKey={apiKey} pageSize={6} country='in' category='technology' />
                        }></Route>

                        <Route exact path='/health' element={
                            <News key="health" setProgress={setProgress} apiKey={apiKey} pageSize={6} country='in' category='health' />
                        }></Route>

                        <Route exact path='/science' element={
                            <News key="science" setProgress={setProgress} apiKey={apiKey} pageSize={6} country='in' category='science' />
                        }></Route>
                    </Routes>
                </div>
            </Main>
        </>
    )
}

export default App;

// Component Lifecycle
// series of events that happen from the mounting of a react component to its unmounting.

// -> Mounting: Birth of a component
// -> Update: Growth of a component
// -> Unmount: Death of a component

// Methods
// Render method -> used to render the html of a component in react. runs during the mounting and updating of the component

// componentDidMount() -> runs after the component has been rendered to the DOM\

// componentDidUpdate() -> invoked as soon as the updating happens. Usecase in updatig the DOM in response to props or state changes

// componentWillUnmount() -> called just before the component is unmounted or destroyed Usually used to perform cleanups
