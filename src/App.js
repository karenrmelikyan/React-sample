import React, {useState} from "react";
import AppRoutes from "./routes/AppRoutes";
import {AuthContext} from './context';

function App() {
    const [isAuth, setIsAuth] = useState(false);
    return (
          <AuthContext.Provider value={{
              isAuth,
              setIsAuth,
          }}>
              <AppRoutes />
          </AuthContext.Provider>
    );
}

export default App;
