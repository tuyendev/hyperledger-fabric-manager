import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom'
import createBrowserHistory from 'history/lib/createBrowserHistory';
import routes from './routes';
import { addLocaleData,IntlProvider } from 'react-intl'; 
import en from 'react-intl/locale-data/en';
import zh from 'react-intl/locale-data/en';
import zh_CN from './message/en_US';
import en_US from './message/en_US';


let history = createBrowserHistory();
let locale   = "en"
let messages = en_US
addLocaleData([...en, ...zh]);
if(window.location.href.indexOf("zh_CN")!=-1){
     locale   = "en"
     messages = en_US
}
const errorReporter = (error, locale, message) =>{ 
    // custom error reporting code here
}
ReactDOM.render( <IntlProvider locale={locale} messages={messages} onError={errorReporter}><HashRouter>{routes}</HashRouter></IntlProvider>, document.getElementById('app'));