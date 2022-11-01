import React from 'react'
import { useContext } from 'react'
import { UserContext } from '../../../context/usercontext'
import Header from '../Header/Header'
import HeaderOut from '../Header/Headerout'

export const HomeNav = () => {
    
    const {user} =useContext(UserContext);

    return (
                <>
                {user ? (<Header/>) :(<HeaderOut/>)}

                </>
    
  )
};
