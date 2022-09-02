
import Header from './components/Header';
import Main from './components/Main';
import Features from './components/Features';
import Ebook from './components/Ebook';
import GetApp from './components/GetApp';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <Main/>
      <Features id="features"/>
      <Ebook/>
      <GetApp/>
      <Footer/>
    </div>
  );
}

export default App;
