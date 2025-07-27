import {Routes, Route, BrowserRouter, Navigate} from 'react-router-dom';

import AdminLayout from '../features/admin/AdminLayout/AdminLayout';
import ClerkLayout from '../features/clerk/ClerkLayout/ClerkLayout';

import LoginPage from '../features/auth/LoginPage';


import AdminCustomers from '../features/admin/AdminCustomers/AdminCustomers';
import MoviesPage from '../features/admin/AdminMovies/MoviesPage';
import AddMovie from '../features/admin/AdminMovies/AddMovie';
import AdminHalls from '../features/admin/AdminHalls/AdminHalls';
import AddHall from '../features/admin/AdminHalls/AddHall';
import UpdateHall from '../features/admin/AdminHalls/UpdateHall';
import AdminSessions from '../features/admin/AdminSessions/AdminSessions';
import AddSession from '../features/admin/AdminSessions/AddSession';
import UpdateSession from '../features/admin/AdminSessions/UpdateSession';
import AdminMessages from '../features/admin/AdminFeedbacks/AdminMessages';
import AdminTicketClerk from '../features/admin/TicketClerks/AdminTicketClerk';

import ClerkSearchBookings from '../features/clerk/ClerkBookings/ClerkSearchBookings';
import ClerkMoviesPage from '../features/clerk/ClerkMovies/ClerkMoviesPage';
import ClerkFeedback from '../features/clerk/ClerkFeedback/ClerkFeedback';
import ClerkSession from '../features/clerk/ClerkSession/ClerkSession';
import MovieSessions from "../features/clerk/ClerkMovies/MovieSessions";

function App() {
    return (

        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Navigate to="/login" />} />
            <Route path="/login" element={<LoginPage />} />
            {/* Admin Layout and Routes */}
            <Route path="/admin" element={<AdminLayout />}>
                <Route index element={<MoviesPage />} />
                <Route path="customers" element={<AdminCustomers />} />
                <Route path="movies" element={<MoviesPage />} />
                <Route path="addMovie" element={<AddMovie />} />
                <Route path="halls" element={<AdminHalls />} />
                <Route path="add-hall" element={<AddHall />} />
                <Route path="update-hall" element={<UpdateHall />} />
                <Route path="sessions" element={<AdminSessions />} />
                <Route path="addSession" element={<AddSession />} />
                <Route path="sessions/update/:id" element={<UpdateSession />} />
                <Route path="messages" element={<AdminMessages />} />
                <Route path="ticket-clerks" element={<AdminTicketClerk />} />
            </Route>

            {/* Clerk Layout and Routes */}
            <Route path="/clerk" element={<ClerkLayout />}>
                <Route index element={<ClerkSearchBookings />} />
                <Route path="bookings" element={<ClerkSearchBookings />} />
                <Route path="movies" element={<ClerkMoviesPage />} />
                <Route path="feedback" element={<ClerkFeedback />} />
                <Route path="sessions" element={<ClerkSession />} />
                <Route path="movies/:id/sessions" element={<MovieSessions />}/>
            </Route>

        </Routes>
        </BrowserRouter>
    );
}

export default App;
