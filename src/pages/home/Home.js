import React, { useEffect } from 'react'
import Navbar from '../../components/navbar/Navbar';
import { Outlet } from 'react-router-dom';
import { axiosClient } from '../../utils/axiosClient';
import { useDispatch } from 'react-redux';
import { getMyInfo } from '../../redux/slices/appConfigureSlice';


function Home() {
const dispatch = useDispatch();

useEffect( () => {
    dispatch(getMyInfo());
}, [])


return <>
<Navbar/>
<div className="outlet" style={{marginTop:'60px'}}>
    <Outlet />
</div>
</>



}  
export default Home