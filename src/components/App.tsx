import { Icon, IconList, IconPopup } from './Icons';
import { Title } from './Title';
import './App.css';
import ScrollMe from './ScrollMe';

function App() {
  return (
    <div className="App">
      <div className='Intro'>
      <Title name='Orión González' type='Name' />
      <Title name='Software engineer' type='Job' />
      <Title name='Backend developer' type='Job' />
      <Title name='Systems programmer' type='Job' />
      <IconList/>
      <ScrollMe />

      </div>
    </div>
  );
}

export default App;
