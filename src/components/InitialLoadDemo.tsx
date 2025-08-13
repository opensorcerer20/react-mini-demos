import BaseDemo from './BaseDemo';

const InitialLoadDemo = ({name}: {name: string}) => {
  return <BaseDemo name={name}><div>useref: initial load set input focus</div></BaseDemo>;
};

export default InitialLoadDemo;
