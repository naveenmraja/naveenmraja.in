import React from 'react';
import {createRoot} from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import './index.css';
import {createTheme, ThemeProvider} from "@mui/material/styles";
import {CssBaseline} from "@mui/material";
import App from "./App";
import ReactGA from 'react-ga4';
import {GA_TRACKING_ID} from "./utils/Config";
import {reportErrorToAnalytics, sendDataToAnalytics} from "./utils/Analytics";
import {ENVIRONMENT, PRODUCTION} from "./utils/Constants";

if (ENVIRONMENT === PRODUCTION) {
    ReactGA.initialize(GA_TRACKING_ID, {gaOptions: {siteSpeedSampleRate: 100}});
    window.onerror = function (message, source, lineno, colno, error) {
        if (error) message = error.stack;
        reportErrorToAnalytics(message, navigator.userAgent);
    }
}

const container = document.getElementById('root');
const root = createRoot(container);

const theme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#ff4081',
        },
        secondary: {
            main: '#ffffff',
        }
    }
});

root.render(
    <ThemeProvider theme={theme}>
        <CssBaseline/>
        <App/>
    </ThemeProvider>
);

reportWebVitals(({id, name, value}) => sendDataToAnalytics({
    category: "Web Vitals",
    action: name,
    value: Math.round(value),
    label: id,
    nonInteraction: true
}));
