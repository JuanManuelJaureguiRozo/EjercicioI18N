import React from 'react';
import ReactDOM from 'react-dom';
import { IntlProvider } from 'react-intl';
import localeEsMessages from './locales/es'; 
import localeEnMessages from './locales/en'; 
import JobsList from './components/jobslist'; 

const userLanguage = navigator.language || navigator.userLanguage;
const messages = userLanguage.startsWith('es') ? localeEsMessages : localeEnMessages;
const locale = userLanguage;

ReactDOM.render(
  <IntlProvider locale={locale} messages={messages}>
    <JobsList />
  </IntlProvider>, 
  document.getElementById("root")
);

