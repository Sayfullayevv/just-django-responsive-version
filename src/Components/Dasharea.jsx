import React from 'react'
import Dashboard from './Dashboard'
import Billing from './Billing'
import Settings from './Settings'
import Navbar from './Navbar'
import { Link, Outlet } from 'react-router-dom'

export default function Dasharea() {
    return (
        <>
            <Outlet />
        </>
    )
}
