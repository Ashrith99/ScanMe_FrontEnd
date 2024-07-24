// import React, { createContext, useContext, useState } from 'react';

// const TableNumContext = createContext();

// export const useTableNum = () => useContext(TableNumContext);

// export const TableNumProvider = ({ children }) => {
//   const [tableNum, setTableNum] = useState(null);
  
//   return (
//     <TableNumContext.Provider value={{ tableNum, setTableNum }}>
//       {children}
//     </TableNumContext.Provider>
//   );
// };

import React, { createContext, useState, useContext } from 'react';

// Create a Context for the table number
const TableNumContext = createContext();

export const TableNumProvider = ({ children }) => {
  const [tableNum, setTableNum] = useState(null);

  return (
    <TableNumContext.Provider value={{ tableNum, setTableNum }}>
      {children}
    </TableNumContext.Provider>
  );
};

// Custom hook to use the TableNumContext
export const useTableNum = () => useContext(TableNumContext);

