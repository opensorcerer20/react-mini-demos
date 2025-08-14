import BaseDemo from './BaseDemo';

const InitialLoadDemo = ({name}: {name: string}) => {
  const testFetch = async (): Promise<boolean> => {
    try {
      const response = await fetch('http://localhost:5001');

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      return true;
    } catch (error) {
      console.error("Failed to fetch users:", error);
      return false; // Or re-throw the error, depending on desired error handling
    }
  }
  testFetch();
  return <BaseDemo name={name}><div>useref: initial load set input focus</div></BaseDemo>;
};

export default InitialLoadDemo;
