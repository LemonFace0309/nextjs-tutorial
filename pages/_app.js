import '../styles/main.scss' // global styles should be imported into this file

import React from 'react';

const App = ({Component, pageProps}) => {
  return <Component {...pageProps} />
};

export default App;