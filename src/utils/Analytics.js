import ReactGA from 'react-ga4';
import {CATEGORY_ERROR, CATEGORY_NETWORK_CALLS, ENVIRONMENT, PRODUCTION} from "./Constants";

const isProduction = (ENVIRONMENT === PRODUCTION)

const handleEventData = (eventData) => isProduction ? ReactGA.event(eventData) : console.log(eventData)

export const sendEventToAnalytics = (category, action) => handleEventData({category, action})
export const reportErrorToAnalytics = (action, label) => handleEventData({
    category: CATEGORY_ERROR,
    action: action,
    label: label
})
export const recordMetric = (category, action, value) => handleEventData({category, action, value})
export const recordAPILatency = (api, latency) => handleEventData({
    category: CATEGORY_NETWORK_CALLS,
    action: api,
    value: latency
})
export const sendDataToAnalytics = (data) => handleEventData(data)