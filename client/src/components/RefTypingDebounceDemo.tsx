import BaseDemo from './BaseDemo';

const RefTypingDebounceDemo = ({name}: {name: string}) => {
  return <BaseDemo name={name}><div>useref: uncontrolled component, check as you type, debounce 1 second</div></BaseDemo>;
};

export default RefTypingDebounceDemo;
