import { BrowserRouter, Routes, Route } from "react-router-dom";
import OverviewPage from "../features/admin/OverviewPage";
import MoviesPage from "../features/admin/MoviesPage";
import AdminCustomers from "../features/admin/AdminCustomers";
import LoginPage from "../features/auth/pages/LoginPage";
import ClerkSearchBookings from "../features/clerk/ClerkSearchBookings";
import ClerkMoviesPage from "../features/clerk/ClerkMoviesPage";
import ClerkFeedback from "../features/clerk/ClerkFeedback";
import ClerkSession from "../features/clerk/ClerkSession";
import AdminMessages from "../features/admin/AdminMessages";
import AdminSessions from "../features/admin/AdminSessions";
import AddMovie from "../features/admin/AddMovie";


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
                <Route path="/clerk/bookings" element={<ClerkSearchBookings />}/>
                <Route path="/clerk/movies" element={<ClerkMoviesPage />}/>
                <Route path="/clerk/feedback" element={<ClerkFeedback />}/>
                <Route path="/clerk/sessions" element={<ClerkSession movie={movie} />}/>
                <Route path="/admin/messages" element={<AdminMessages />}/>
                <Route path="/admin/sessions" element={<AdminSessions/>}/>
            </Routes>
        </BrowserRouter>
    );
}
