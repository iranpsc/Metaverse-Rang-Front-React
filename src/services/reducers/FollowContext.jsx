import { createContext, useState } from "react";
export const FollowContext = createContext({});

export default function FollowProvider({ children }) {
  const [state, dispatch] = useState([]);
  return (
    <FollowContext.Provider value={[state, dispatch]}>
      {children}
    </FollowContext.Provider>
  );
}
