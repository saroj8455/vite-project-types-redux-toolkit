import 'primereact/resources/themes/lara-light-indigo/theme.css'; //theme
import 'primereact/resources/primereact.min.css'; //core css
import 'primeicons/primeicons.css'; //icons
import 'primeflex/primeflex.css'; // flex
import { useState } from 'react';
import Welcome from './components/Welcome';
import Counter from './components/Counter';

function App() {
  return (
    <>
      <Welcome />
      <Counter />
    </>
  );
}

export default App;
