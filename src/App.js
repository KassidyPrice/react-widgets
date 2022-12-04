import './styles.css'
import Counter from './components/Counter'
import Greeting from './components/Greeting'
import ShowHide from './components/ShowHide'
import FontSizer from './components/FontSizer'
import TextAligner from './components/TextAligner'
import Clock from './components/Clock'
import ColorChanger from './components/ColorChanger'
import ColorPicker from './components/ColorPicker'

function App() {
  return (
    <div className='app'>
      <Counter />
      <Greeting />
      <ShowHide />
      <FontSizer />
      <TextAligner />
      <Clock />
      <ColorChanger />
      <ColorPicker />
    </div>
  )
}

export default App
