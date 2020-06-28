import React from 'react';
import 'styles/global.scss';

interface AppData {
  Component: any;
}

function App({ Component }: AppData) {
  return <Component />;
}

export default App;
