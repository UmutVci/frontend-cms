import React, { useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { XIcon } from '@heroicons/react/solid';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import OverviewPage     from '../features/admin/OverviewPage';
import AdminCustomers   from '../features/admin/AdminCustomers/AdminCustomers';
import MoviesPage       from '../features/admin/AdminMovies/MoviesPage';
import AddMovie         from '../features/admin/AdminMovies/AddMovie';
import AdminHalls       from '../features/admin/AdminHalls/AdminHalls';
import AddHall          from '../features/admin/AdminHalls/AddHall';
import UpdateHall       from '../features/admin/AdminHalls/UpdateHall';
import AdminSessions    from '../features/admin/AdminSessions/AdminSessions';
import AddSession       from '../features/admin/AdminSessions/AddSession';
import UpdateSession    from '../features/admin/AdminSessions/UpdateSession';
import AdminMessages    from '../features/admin/AdminFeedbacks/AdminMessages';
import AdminTicketClerk from '../features/admin/TicketClerks/AdminTicketClerk';
import ClerkSearchBookings from '../features/clerk/ClerkBookings/ClerkSearchBookings';
import ClerkMoviesPage     from '../features/clerk/ClerkMovies/ClerkMoviesPage';
import ClerkFeedback       from '../features/clerk/ClerkFeedback/ClerkFeedback';
import ClerkSession        from '../features/clerk/ClerkSession/ClerkSession';

export default function AppLayout() {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const { pathname } = useLocation();

    const titleMap = {
        '/admin':               'Overview',
        '/admin/customers':     'Customers',
        '/admin/movies':        'Movies',
        '/admin/addMovie':      'Add Movie',
        '/admin/halls':         'Halls',
        '/admin/add-hall':      'Add Hall',
        '/admin/update-hall':   'Update Hall',
        '/admin/sessions':      'Sessions',
        '/admin/addSession':    'Add Session',
        '/admin/messages':      'Messages',
        '/admin/ticket-clerks': 'Ticket Clerks',
        '/clerk/bookings':      'Bookings',
        '/clerk/movies':        'Movies',
        '/clerk/feedback':      'Feedback',
        '/clerk/sessions':      'Sessions',
    };

    let title = titleMap[pathname] || '';
    if (pathname.startsWith('/admin/sessions/update/')) {
        title = 'Update Session';
    }

    return (
        <div className="h-screen flex flex-col md:flex-row overflow-x-hidden">
            {/* Backdrop */}
            <div
                className={`fixed inset-0 bg-black bg-opacity-50 z-20 md:hidden ${
                    sidebarOpen ? 'block' : 'hidden'
                }`}
                onClick={() => setSidebarOpen(false)}
            />

            {/* Sidebar */}
            <div
                className={`
          fixed inset-y-0 left-0 z-30 w-64 h-full overflow-y-auto bg-gray-900 text-white
          transform transition-transform duration-200 ease-in-out
          ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
          md:translate-x-0 md:static md:inset-auto
        `}
            >
                <div className="md:hidden flex justify-end p-4 bg-[#202123]">
                    <button onClick={() => setSidebarOpen(false)} aria-label="Close menu">
                        <XIcon className="w-6 h-6 text-white" />
                    </button>
                </div>
                <Sidebar />
            </div>

            {/* İçerik */}
            <div className="flex-1 flex flex-col">
                <Header title={title} onMenuClick={() => setSidebarOpen(o => !o)} />

                <main className="flex-1 overflow-auto bg-gray-100">
                    <div className="bg-[#D9D9D9] p-4 md:p-10 min-h-full">
                        <Routes>
                            <Route path="/admin" element={<OverviewPage />} />
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

                            <Route path="bookings" element={<ClerkSearchBookings />} />
                            <Route path="movies"   element={<ClerkMoviesPage  />} />
                            <Route path="feedback" element={<ClerkFeedback     />} />
                            <Route path="sessions" element={<ClerkSession      />} />
                        </Routes>
                    </div>
                </main>
            </div>
        </div>
    );
}
