/*** examples/src/app.js ***/
import React from 'react'
import { render } from 'react-dom'
import ReactDemo from '../../src/components/ReactDemo'

const App = () => <ReactDemo />
render(<App />, document.getElementById('root'))