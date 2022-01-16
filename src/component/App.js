import Header from './Header';
import Konten1 from './Konten1';
import Konten2 from './Konten2';
import '../Styles/App.css';
import Profile from './Profile';
import Footer from './Footer';
import Contact from './Contact';
import Tgl from './Tgl';

function App() {
  return (
    <div className="App">
      <Header/>
      <Konten1/>
      <Konten2/>
      <Tgl/>
      <Contact/>
      <Profile/>
      <Footer/>
    </div>
  );
}

export default App;
