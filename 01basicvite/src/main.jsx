import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

const areactElement = React.createElement (
    'a',
    {href:"http://google.com", target : '_blank' },
    "click for Visit Site"
)


    
ReactDOM.createRoot(document.getElementById('root')).render(
   <App/>
)
