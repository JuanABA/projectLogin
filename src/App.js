import "./App.css";
import Home from "./components/Home";
import Login from "./components/Login";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { AuthProvider, useAuth } from "./context/AuthContext";
import New from "./components/Nuevo";
import Prueba from "./components/Prueba";
import CreateUser from "./components/CreateUser";
import DrawerAppBar from "./components/AppBar";
import UpdateUser from "./components/UpdateUser";

const PrivateRoute = ({ children }) => {
  const { token } = useAuth();
  return token ? children : <Navigate to="/login" />;
};

const PublicRoute = ({ children }) => {
  const { token } = useAuth();
  return token ? <Navigate to="/" /> : children;
};

const PrivateHeader = ({ children }) => {
  const { token } = useAuth();
  return token ? children : <></>;
};

function App() {
  return (
    <div className="App">
      <Router>
        <AuthProvider>
          <PrivateHeader>
            <DrawerAppBar />
          </PrivateHeader>
          <div className="App">
            <Routes>
              <Route
                path="/"
                element={
                  <PrivateRoute>
                    <Home />
                  </PrivateRoute>
                }
              />
              <Route
                path="/new"
                element={
                  <PrivateRoute>
                    <New />
                  </PrivateRoute>
                }
              />
              <Route
                path="/createUser"
                element={
                  <PrivateRoute>
                    <CreateUser />
                  </PrivateRoute>
                }
              />
              <Route
                path="/updateUser/:id"
                element={
                  <PrivateRoute>
                    <UpdateUser />
                  </PrivateRoute>
                }
              />
              <Route
                path="/prueba"
                element={
                  <PrivateRoute>
                    <Prueba />
                  </PrivateRoute>
                }
              />
              <Route
                path="/login"
                element={
                  <PublicRoute>
                    <Login />
                  </PublicRoute>
                }
              />
            </Routes>
          </div>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
