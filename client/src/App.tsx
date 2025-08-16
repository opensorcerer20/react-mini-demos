import './App.css';

import { useState } from 'react';

import FormFrameworkDemo from './components/FormFrameworkDemo';
import HocDemo from './components/HocDemo';
import InitialLoadDemo from './components/InitialLoadDemo';
import MemoizeDemo from './components/MemoizeDemo';
import ReactRouterDemo from './components/ReactRouterDemo';
import ReduxStateEngineDemo from './components/ReduxStateEngineDemo';
import RefTypingDebounceDemo from './components/RefTypingDebounceDemo';

const DemoTile = ({children, title}: {children: any, title: string}) => {
  const [isActive, setIsActive] = useState(false);
  return <div className="item demo-container p-3">
    <div className=""><strong>{title}</strong></div>
    {isActive && children}
    {!isActive && (
      <button className="btn btn-success" onClick={() => setIsActive(true)}>Activate</button>
    )}
    </div>
};

const App = () => {
  return (
    <main>
      <div className="grid-container">
        <DemoTile title="Initial Load Demo"><InitialLoadDemo name="Initial Load Demo" /></DemoTile>
        <DemoTile title="Memoize Demo"><MemoizeDemo name="Memoize Demo" /></DemoTile>
        <DemoTile title="Redux State Engine Demo"><ReduxStateEngineDemo name="Redux State Engine Demo" /></DemoTile>
        <DemoTile title="Ref Typing Debounce Demo"><RefTypingDebounceDemo name="Ref Typing Debounce Demo" /></DemoTile>
        <DemoTile title="React Router Demo"><ReactRouterDemo name="React Router Demo" /></DemoTile>
        <DemoTile title="HocDemo"><HocDemo name="HocDemo" /></DemoTile>
        <DemoTile title="Form Framework Demo"><FormFrameworkDemo name="Form Framework Demo" /></DemoTile>
      </div>
    </main>
  );
}

export default App;
