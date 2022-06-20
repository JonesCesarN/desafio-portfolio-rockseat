import './App.scss';
import Footer from 'components/layouts/Footer/Footer';
import Info from 'components/layouts/Info/Info';
import Contents from 'components/layouts/Contents/Contents';

function App() {
  return (
    <div className="wrapper">
      <Info />
      <Contents />
      <Footer />
    </div>
  );
}

export default App;
