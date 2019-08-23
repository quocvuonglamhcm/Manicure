import * as React from 'react'
import * as ReactDom from "react-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import './public/index.css'
import './public/comon.css'
import { App } from './screen/HomeScreen/index'

ReactDom.render(
    <App />,
    document.getElementById('app'))
