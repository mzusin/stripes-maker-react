import 'darkly/dist/darkly.min.css';
import * as React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import store from './dal/store';

const init = () => {
    const $root =  document.getElementById('root') as HTMLElement;
    if(!$root) return;

    const root = ReactDOM.createRoot($root);
    root.render(
        <React.StrictMode>
            <Provider store={ store }>
                <App />
            </Provider>
        </React.StrictMode>
    );
};

init();
