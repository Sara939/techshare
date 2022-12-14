import React from 'react'
import { useContext } from 'react'
import { UserContext } from '../../../context/usercontext'
import Header from './Header'
import HeaderOut from './Headerout'

export const HomeNav = () => {
    
    const {user} =useContext(UserContext);

    return <>{user ? (<Header/>) :(<HeaderOut/>)}</>
};
