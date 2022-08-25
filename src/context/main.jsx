import { createContext, useEffect, useState } from 'react';
import { dataApi } from '../api';

export const MainContext = createContext({
  data: [],
  loading: true,
  error: false,
  getData: () => {},
  addUser: () => {},
});

const { Provider } = MainContext;

export const MainProvider = ({ children }) => {
  const [loading, setLoadin] = useState(true);
  const [error, setError] = useState(false);
  const [data, setData] = useState(null);

  const getData = () => {
    try {
      setLoadin(true);
      setTimeout(() => {
        setData(dataApi);
        setLoadin(false);
      }, 1500);
    } catch (e) {
      loading(false);
      setError(true);
    }
  };
  const addUser = (obj) => {
    try {
      setLoadin(true);
      setTimeout(() => {
        setData([...data, obj]);
        setLoadin(false);
      }, 1500);
    } catch (e) {
      loading(false);
      setError(true);
    }
  };

  return (
    <Provider value={{ data, loading, error, getData, addUser }}>
      {children}
    </Provider>
  );
};
