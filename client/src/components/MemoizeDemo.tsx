import BaseDemo from './BaseDemo';

const MemoizeDemo = ({name}: {name: string}) => {
  /*
  - push button to get function result
  - initial run delays by 2 seconds
  - show result and time elapsed
  - push button again to get result
  - get instant result due to memoization
  - show result and time elapsed
  - push button to change value
  - back to step 1
  */
  return <BaseDemo name={name}><div>callback: fetch, load with spinner</div></BaseDemo>;
};

export default MemoizeDemo;
