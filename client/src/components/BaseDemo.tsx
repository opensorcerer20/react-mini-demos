import { useEffect } from 'react';

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

export default BaseDemo;
