import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import RequireRole from "../components/RequireRole";

import AdminLayout from "../features/admin/AdminLayout/AdminLayout";
import ClerkLayout from "../features/clerk/ClerkLayout/ClerkLayout";
import LoginPage from "../features/auth/LoginPage";
import SeatsPage from "../features/clerk/ClerkSeat/SeatsPage";

import AdminCustomers from "../features/admin/AdminCustomers/AdminCustomers";
import MoviesPage from "../features/admin/AdminMovies/MoviesPage";
import AddMovie from "../features/admin/AdminMovies/AddMovie";
import AdminHalls from "../features/admin/AdminHalls/AdminHalls";
import AddHall from "../features/admin/AdminHalls/AddHall";
import UpdateHall from "../features/admin/AdminHalls/UpdateHall";
import AdminSessions from "../features/admin/AdminSessions/AdminSessions";
import AddSession from "../features/admin/AdminSessions/AddSession";
import UpdateSession from "../features/admin/AdminSessions/UpdateSession";
import AdminMessages from "../features/admin/AdminFeedbacks/AdminMessages";
import AdminTicketClerk from "../features/admin/TicketClerks/AdminTicketClerk";
import AddTicketClerk from "../features/admin/TicketClerks/AddTicketClerk";
import ReservationSuccessPage from '../features/clerk/ReservationSuccessPage';

import ClerkSearchBookings from "../features/clerk/ClerkBookings/ClerkSearchBookings";
import ClerkMoviesPage from "../features/clerk/ClerkMovies/ClerkMoviesPage";
import ClerkFeedback from "../features/clerk/ClerkFeedback/ClerkFeedback";
import ClerkSession from "../features/clerk/ClerkSession/ClerkSession";
import UpdateMovie from "../features/admin/AdminMovies/UpdateMovie";
import ClerkMovieSessions from "../features/clerk/ClerkMovies/MovieSessions";
import ClerkSettings from "../features/clerk/ClerkSettings/ClerkSettings";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Navigate to="/login" />} />
                <Route path="/login" element={<LoginPage />} />
                <Route
                    path="/admin"
                    element={
                        <RequireRole role="ADMIN">
                            <AdminLayout />
                        </RequireRole>
                    }
                >
                    <Route index element={<MoviesPage />} />
                    <Route path="customers" element={<AdminCustomers />} />
                    <Route path="movies" element={<MoviesPage />} />
                    <Route path="addMovie" element={<AddMovie />} />
                    <Route path="update-movie/:id" element={<UpdateMovie />} />
                    <Route path="halls" element={<AdminHalls />} />
                    <Route path="add-hall" element={<AddHall />} />
                    <Route path="update-hall" element={<UpdateHall />} />
                    <Route path="sessions" element={<AdminSessions />} />
                    <Route path="addSession" element={<AddSession />} />
                    <Route path="sessions/update/:id" element={<UpdateSession />} />
                    <Route path="messages" element={<AdminMessages />} />
                    <Route path="ticket-clerks" element={<AdminTicketClerk />} />
                    <Route path="add-ticket-clerk" element={<AddTicketClerk />} />
                    <Route path="settings/:id" element={<AdminSettings />}/>


                </Route>

                <Route
                    path="/clerk"
                    element={
                        <RequireRole role="TICKET_CLERK">
                            <ClerkLayout />
                        </RequireRole>
                    }
                >
                    <Route index element={<ClerkSearchBookings />} />
                    <Route path="bookings" element={<ClerkSearchBookings />} />
                    <Route path="movies" element={<ClerkMoviesPage />} />
                    <Route path="feedback" element={<ClerkFeedback />} />
                    <Route path="sessions" element={<ClerkSession />} />
                    <Route path="movies/:id/sessions" element={<ClerkMovieSessions />} />
                    <Route path="settings/:id" element={<ClerkSettings />} />
                    <Route path="reservation-success" element={<ReservationSuccessPage />} />
                    <Route path="sessions/:sessionId/seats" element={<SeatsPage />} />
                    <Route path="reservation-success" element={<ReservationSuccessPage />} />


                </Route>

                {/* 404 */}
                <Route path="*" element={<Navigate to="/login" />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
