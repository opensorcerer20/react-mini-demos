import './App.css';

import {
  useEffect,
  useState,
} from 'react';

const DemoTile = ({children}: {children: any}) => {
  const [isActive, setIsActive] = useState(false);
  return <div>
    {isActive && children}
    {!isActive && (
      <button onClick={() => setIsActive(true)}>Activate</button>
    )}
    </div>
};

type DemoProps = {
  children: any;
  name: string;
};
const BaseDemo = ({children, name}: DemoProps) => {
  useEffect(() => {
    console.log("demo active: " + name)
  }, [name]);

  return children;
};

const InitialLoadDemo = ({children, name}: DemoProps) => {
  return <BaseDemo name={name}>{children}</BaseDemo>;
};

const App = () => {
  return (
    <div className="App">
      <main>
        <div>ALL DEMOS INACTIVE UNTIL CLICKED ON</div>
        <DemoTile><InitialLoadDemo name="Initial Load Demo"><div>useref: initial load set input focus</div></InitialLoadDemo></DemoTile>
        <DemoTile><div>callback: fetch, load with spinner</div></DemoTile>
        <DemoTile><div>redux / state engine</div></DemoTile>
        <DemoTile><div>useref: uncontrolled component, check as you type, debounce 1 second</div></DemoTile>
        <DemoTile><div>react router: params, pass data, set context data, more?</div></DemoTile>
        <DemoTile><div>hoc: TBD: need something that has real value</div></DemoTile>
      </main>
    </div>
  );
}

export default App;
