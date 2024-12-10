import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { Provider } from 'react-redux';
import { store } from './store/store.ts';
import { PrimeReactProvider } from 'primereact/api';
const value = {
  ripple: true,
};

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <PrimeReactProvider value={value}>
      <Provider store={store}>
        <App />
      </Provider>
    </PrimeReactProvider>
  </StrictMode>
);
