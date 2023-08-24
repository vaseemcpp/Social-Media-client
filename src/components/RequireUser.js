import React from 'react'
import {getItem, KEY_ACCESS_TOKEN } from '../utils/localStorageManager'
import { Navigate, Outlet } from 'react-router-dom';

    import { formToJSON } from 'axios';
const RequireUser = () => {

    const user = getItem(KEY_ACCESS_TOKEN);
  return (
    user ? <Outlet/> : <Navigate to="/login"/>
  )
}

export default RequireUser