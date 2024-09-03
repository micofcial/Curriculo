import { onCLS, onFID, onFCP, onLCP, onTTFB } from 'web-vitals';

type PerformanceEntryCallback = (entry: any) => void;

const reportWebVitals = (onPerfEntry?: PerformanceEntryCallback) => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    onCLS(onPerfEntry);
    onFID(onPerfEntry);
    onFCP(onPerfEntry);
    onLCP(onPerfEntry);
    onTTFB(onPerfEntry);
  }
};

export default reportWebVitals;
