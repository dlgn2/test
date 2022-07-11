import { useMemo, useState } from 'react';
import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import { io } from 'socket.io-client';
import './App.css';
import Home from './pages/Home';
import { UserContext } from './Context/UserContext';
import { SocketContext } from './Context/SocketContext';
import { GameClientInterface } from './@types/arena';

export default function App() {
  const [user, setUser] = useState(null);
  const [socket, setSocket] = useState();
  const [snackBarError, setSnackBarError] = useState();
  const [currentSession,setCurrentSession] = useState<GameClientInterface>(null);

  const userValue = useMemo(() => ({ user, setUser,snackBarError,setSnackBarError,currentSession,setCurrentSession}));
  const socketValue = useMemo(() => ({ socket, setSocket}));
  return (
    <SocketContext.Provider value={socketValue}>
      <Router>
      <UserContext.Provider value={userValue}>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        </UserContext.Provider>
      </Router>
    </SocketContext.Provider>
  );
}
