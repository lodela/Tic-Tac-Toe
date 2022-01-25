import React from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'

import './styles/styles.scss';

import {App} from './App';

library.add(fas);

ReactDOM.render(<App />, document.getElementById('root'));
