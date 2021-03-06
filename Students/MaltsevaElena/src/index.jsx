import React from 'react'
import ReactDom from 'react-dom'

// Routing
import Router from './router/router.jsx'
import { BrowserRouter } from 'react-router-dom'

// Store
import { Provider } from 'react-redux'
import initStore from './store/store.js'

// Styles
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import 'typeface-roboto'
import './index.css'

const darkTheme = createMuiTheme({
   palette: {
      type: 'dark',
      primary: {
         light: '#2C2C6A',
         main: '#1F1F4B',
         dark: '#141433',
         contrastText: '#fff',
      },
      secondary: {
         light: '#D05CAF',
         main: '#4C92E3',
         dark: '#3B3B86',
         contrastText: '#fff',
      }, 
      background: {
         paper: '#141433',
         default: "#fff"
      }
   },
})

ReactDom.render (
   <BrowserRouter>
      <Provider store={ initStore() }>
         <ThemeProvider theme={ darkTheme }>
            <Router/>
         </ThemeProvider>
      </Provider>
   </BrowserRouter>,
   document.getElementById('app')
)