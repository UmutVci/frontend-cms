import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage  from '../features/auth/LoginPage';
import AppLayout  from '../app/AppLayout'

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LoginPage />} />

                <Route path="/admin/*" element={<AppLayout />} />
                <Route path="/clerk/*" element={<AppLayout />} />
            </Routes>
        </BrowserRouter>
    );
}
