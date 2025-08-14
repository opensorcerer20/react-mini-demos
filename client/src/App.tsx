import './App.css';

import { useState } from 'react';

import CallbackFetchSpinnerDemo from './components/CallbackFetchSpinnerDemo';
import FormFrameworkDemo from './components/FormFrameworkDemo';
import HocDemo from './components/HocDemo';
import InitialLoadDemo from './components/InitialLoadDemo';
import ReactRouterDemo from './components/ReactRouterDemo';
import ReduxStateEngineDemo from './components/ReduxStateEngineDemo';
import RefTypingDebounceDemo from './components/RefTypingDebounceDemo';

const DemoTile = ({children}: {children: any}) => {
  const [isActive, setIsActive] = useState(false);
  return <div className="item demo-container">
    {isActive && children}
    {!isActive && (
      <button className="btn btn-success m-2" onClick={() => setIsActive(true)}>Activate</button>
    )}
    </div>
};

const App = () => {
  return (
    <main>
      <div className="grid-container">
        <DemoTile><InitialLoadDemo name="Initial Load Demo" /></DemoTile>
        <DemoTile><CallbackFetchSpinnerDemo name="Callback Fetch Spinner Demo" /></DemoTile>
        <DemoTile><ReduxStateEngineDemo name="Redux State Engine Demo" /></DemoTile>
        <DemoTile><RefTypingDebounceDemo name="Ref Typing Debounce Demo" /></DemoTile>
        <DemoTile><ReactRouterDemo name="React Router Demo" /></DemoTile>
        <DemoTile><HocDemo name="HocDemo" /></DemoTile>
        <DemoTile><FormFrameworkDemo name="Form Framework Demo" /></DemoTile>
      </div>
    </main>
  );
}

export default App;
