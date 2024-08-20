import React from 'react';

import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'

import {Provider} from 'react-redux'

import Application from 'containers/Application'

import {store} from './store'

const rootElement = document.getElementById('root')

if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <Provider store={store}>
        <Application/>
      </Provider>
    </StrictMode>
  )
} else {
  console.error('Root element not found')
}
