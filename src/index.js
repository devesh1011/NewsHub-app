import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);


// React Hooks -> Features of class based components in function based components

// Allows you to use state and other reacts features without writing a class

// Commonly used react hooks

// 1. useState -> allows us to track state in a function component. eg. const [text, setText] = useState("Initial Value")
//    -> refers to data or properties that need to be tracking in an application.

// 2. useContext -> used to connect to Context api

// 3. useRef -> returns a mutable current object
