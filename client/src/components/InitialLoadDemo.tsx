import {
  useEffect,
  useState,
} from 'react';

import BaseDemo from './BaseDemo';

const InitialLoadDemo = ({name}: {name: string}) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({});

  useEffect(() => {
    fetch('http://localhost:5001/api/data')
      .then(response => response.json())
      .then(data => {
        setData(data);
        setLoading(false);
      })
      .catch(error => {
        setData({error});
        setLoading(false);
      });
  }, []);

  return <BaseDemo name={name}>
    {loading && (
      <div className="spinner-border text-primary" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    )}
    {!loading && <div>{JSON.stringify(data)}</div>}
  </BaseDemo>;
};

export default InitialLoadDemo;
