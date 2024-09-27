import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // Make sure you have an App component in src/App.jsx
import './index.css'; // Import your global CSS (e.g., Tailwind CSS)
import { Toaster } from './components/ui/sonner';
import { Provider } from 'react-redux';
import store from './redux/store';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
const persistor = persistStore(store);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading='null' persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
    <Toaster />
  </React.StrictMode>
);
