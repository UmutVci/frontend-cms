import React from 'react'
import Sidebar from '../../components/Sidebar'
import Header from "../../components/Header";
export default function OverviewPage() {

    return(
        <div className="flex h-screen overflow-hidden">
            <Sidebar />

            <div className="flex flex-col flex-1 overflow-y-auto">
                <Header title="Overview" />

            </div>
        </div>
    )
}
