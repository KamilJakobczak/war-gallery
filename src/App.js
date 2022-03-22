import './style/main.scss';
import Gallery from './script/components/Gallery';
import Footer from './script/Footer';

function App() {
  return (
    <div className='App'>
      <header className='header'>
        <h1>
          personal archive of screenshots, memes and videos from first weeks of
          russian invasion on ukraine
        </h1>
      </header>
      <Gallery />
      <Footer />
    </div>
  );
}

export default App;
