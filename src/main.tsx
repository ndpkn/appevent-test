import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {  HashRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store, { persistor } from './store/store.ts'
import { PersistGate } from 'redux-persist/integration/react'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HashRouter>
      <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <App />
          </PersistGate>
      </Provider>
    </HashRouter>
  </React.StrictMode>,
)
