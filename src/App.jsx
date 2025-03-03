import {createContext, useEffect, useState} from "react";
import Idex from "./Components";
export let GlobalContext = createContext();

const App = () => {
  let baseUrl = "https://jsonplaceholder.typicode.com/users";
  const [data, setData] = useState([]);
  useEffect(() => {
    async function fetchdata() {
      try {
        let data = await fetch(baseUrl);
        let res = await data.json();
        setData(res);
      } catch (e) {
        console.log(e);
      } finally {
        console.log("tugadi");
      }
    }
    fetchdata();
  }, []);

  

  return (
    <GlobalContext.Provider value={{data,setData}}>
      <Idex />
    </GlobalContext.Provider>
  );
};

export default App;
