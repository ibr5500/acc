import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import Loading from './components/Loading';
import './index.css';
import reportWebVitals from './reportWebVitals';

const App = lazy(() => import('./App'));

const renderLoader = () => <Loading />;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Suspense fallback={renderLoader()}>
      <App />
    </Suspense>
  </React.StrictMode>,
);

reportWebVitals();
