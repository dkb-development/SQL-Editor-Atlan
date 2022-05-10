import './App.css';
import './styles/QueryEditorContainer.css';
import './styles/ResultContainer.css';

import SideNav from './components/SideNav';
import ResultContainer from './components/ResultContainer';

function App() {
  return (
    <div className="App">
      <SideNav></SideNav>
      <div className='contentArea'>
        <div className='queryEditorContainer'>Query</div>
        <div className='resultContainer'>
          ResultContainer
          <ResultContainer></ResultContainer>
        </div>
      </div>
    </div>
  );
}

export default App;
