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
  return <div className="demo-container">
    {isActive && children}
    {!isActive && (
      <button className="btn btn-success m-2" onClick={() => setIsActive(true)}>Activate</button>
    )}
    </div>
};

const App = () => {
  return (
    <div className="app">
      <main>
        <div>ALL DEMOS INACTIVE UNTIL CLICKED ON</div>
        <DemoTile><InitialLoadDemo name="Initial Load Demo" /></DemoTile>
        <DemoTile><CallbackFetchSpinnerDemo name="CallbackFetchSpinnerDemo" /></DemoTile>{ /* CallbackFetchSpinnerDemo */ }
        <DemoTile><ReduxStateEngineDemo name="ReduxStateEngineDemo" /></DemoTile>
        <DemoTile><RefTypingDebounceDemo name="RefTypingDebounceDemo" /></DemoTile>
        <DemoTile><ReactRouterDemo name="ReactRouterDemo" /></DemoTile>
        <DemoTile><HocDemo name="HocDemo" /></DemoTile>
        <DemoTile><FormFrameworkDemo name="FormFrameworkDemo" /></DemoTile>
      </main>
    </div>
  );
}

export default App;
