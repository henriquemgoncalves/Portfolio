import Banner from './components/Banner';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Slider from './components/Slider';
import './styles/app.sass'
import Info from './components/Info';
import Projects from './components/Projects';
import Form from './components/Form';
import RedeSocial from './components/RedeSocial';
import Academic from './components/Academic';
import Loading from './components/Loading';

function App() {

  return (
    <div id="app">
      <Loading>
        <Banner/>
        <NavBar/>
        <Slider/>
        <Info/>
        <Projects/>
        <Academic/>
        <Form/>
        <RedeSocial/>
        <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
      </Loading>
      
    </div>
  )
}

export default App;