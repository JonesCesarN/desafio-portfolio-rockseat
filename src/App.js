import './App.scss';
import Footer from 'components/layouts/Footer/Footer';
import Info from 'components/layouts/Info/Info';
import Contents from 'components/layouts/Contents/Contents';

import axios from 'axios';
import React from 'react';

const baseURL = 'https://api.github.com';

function App() {
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    // invalid url will trigger an 404 error
    axios
      .get(`${baseURL}/users/JonesCesarN/repos`)
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        setError(error);
      });
  }, []);

  if (error)
    return (
      <h3
        style={{
          width: '100vw',
          height: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'red',
        }}>
        Error: {error.message}
      </h3>
    );

  return (
    <div className="wrapper">
      <Info />
      <Contents />
      <Footer />
    </div>
  );
}

export default App;
