import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header/Header'
function BaseLayout() {
    return (
        <div>
            <Header />
            <Outlet />

        </div>
    )
}

export default BaseLayout
