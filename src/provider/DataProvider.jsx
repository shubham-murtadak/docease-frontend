import { createContext, useEffect, useState } from "react";
export const dataContext = createContext([]);
function DataProvider({ children }) {
  const [data, setData] = useState([]);
  const [comments, setComments] = useState([]);
  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  const handleComments = (comment, id) => {
    setComments([...comments, { comment, id }]);
  };
  const dataInfo = {
    data,
    handleComments,
    comments,
  };
  return (
    <dataContext.Provider value={dataInfo}>{children}</dataContext.Provider>
  );
}

export default DataProvider;
