import { BrowserRouter, Routes, Route } from "react-router-dom";
import OverviewPage from "../features/admin/OverviewPage";
import MoviesPage from "../features/admin/AdminMovies/MoviesPage";
import AdminCustomers from "../features/admin/AdminCustomers/AdminCustomers";
import LoginPage from "../features/auth/LoginPage";
import ClerkSearchBookings from "../features/clerk/ClerkBookings/ClerkSearchBookings";
import ClerkMoviesPage from "../features/clerk/ClerkMovies/ClerkMoviesPage";
import ClerkFeedback from "../features/clerk/ClerkFeedback/ClerkFeedback";
import ClerkSession from "../features/clerk/ClerkSession/ClerkSession";
import AdminMessages from "../features/admin/AdminFeedbacks/AdminMessages";
import AdminSessions from "../features/admin/AdminSessions/AdminSessions";
import AdminTicketClerk from "../features/admin/TicketClerks/AdminTicketClerk";
import AddMovie from "../features/admin/AdminMovies/AddMovie";
import AdminHalls from "../features/admin/AdminHalls/AdminHalls";
import AddHall from "../features/admin/AdminHalls/AddHall";
import UpdateHall from "../features/admin/AdminHalls/UpdateHall";




export default function App() {
    const movie = {
        id : "1",
        name : "Elio",
        time : "1 st 30 min",
        d : "2D",
        category : "family",
        img : "https://lumiere-a.akamaihd.net/v1/images/image_9ca31b20.jpeg?region=0%2C0%2C540%2C810",
    sessions : [
        {id : 1, type: "IMAX", time : "11:45", isFull : false},
        {id : 2, type: "normal", time : "13:15" , isFull : false},
        {id : 3, type: "normal", time : "14:45" , isFull : false},
        {id : 4, type: "normal", time : "16:15",isFull : true},
        {id : 5, type: "IMAX", time : "19:45",isFull : false}
    ] }
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LoginPage />} />
                <Route path="/admin" element={<OverviewPage />} />
                <Route path="/admin/customers" element={<AdminCustomers />}/>
                <Route path="/admin/movies" element={<MoviesPage />}/>
                <Route path="/admin/addMovie" element={<AddMovie />}/>
                <Route path="/admin/add-hall" element={<AddHall />}/>
                <Route path="/admin/update-hall" element={<UpdateHall />}/>
                <Route path="/clerk/bookings" element={<ClerkSearchBookings />}/>
                <Route path="/clerk/movies" element={<ClerkMoviesPage />}/>
                <Route path="/clerk/feedback" element={<ClerkFeedback />}/>
                <Route path="/clerk/sessions" element={<ClerkSession movie={movie} />}/>
                <Route path="/admin/messages" element={<AdminMessages />}/>
                <Route path="/admin/sessions" element={<AdminSessions/>}/>
                <Route path="/admin/ticket-clerks" element={<AdminTicketClerk/>}/>
                <Route path="/admin/halls" element={<AdminHalls />}/>
            </Routes>
        </BrowserRouter>
    );
}
