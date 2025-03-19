import * as React from 'react';
import NxWelcome from './nx-welcome';
import { Link, Route, Routes } from 'react-router-dom';

const Auth = React.lazy(() => import('auth/Module'));
const Flights = React.lazy(() => import('flights/Module'));
const Stays = React.lazy(() => import('stays/Module'));
const Rails = React.lazy(() => import('rails/Module'));
const Rides = React.lazy(() => import('rides/Module'));
const Bus = React.lazy(() => import('bus/Module'));
const Profile = React.lazy(() => import('profile/Module'));

export function App() {
  return (
    <React.Suspense fallback={null}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/auth">Auth</Link>
        </li>
        <li>
          <Link to="/flights">Flights</Link>
        </li>
        <li>
          <Link to="/stays">Stays</Link>
        </li>
        <li>
          <Link to="/rails">Rails</Link>
        </li>
        <li>
          <Link to="/rides">Rides</Link>
        </li>
        <li>
          <Link to="/bus">Bus</Link>
        </li>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<NxWelcome title="reservee-portal" />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/flights" element={<Flights />} />
        <Route path="/stays" element={<Stays />} />
        <Route path="/rails" element={<Rails />} />
        <Route path="/rides" element={<Rides />} />
        <Route path="/bus" element={<Bus />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </React.Suspense>
  );
}

export default App;
