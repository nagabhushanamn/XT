

import React from 'react';
import { renderToString } from 'react-dom/server';
import App from './components/App'

const html = renderToString(<App />)


export { html };

