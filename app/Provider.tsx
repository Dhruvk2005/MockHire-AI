"use client"
import { UserDetailContext } from '@/context/UserDetailContext'
import { api } from '@/convex/_generated/api'
import { mutation } from '@/convex/_generated/server'
import { useUser } from '@clerk/nextjs'
import { useMutation } from 'convex/react'
import React, { Children, useEffect, useState } from 'react'
import { createContext } from 'vm'

const Provider = ({ children }: any) => {
  const { user } = useUser();

  const CreateUser = useMutation(api.users.CreateNewUser);
  const[userDetail, setUserDetail] = useState<any>();

  useEffect(() => {
    user && CreateNewUser();
  }, [user])

  const CreateNewUser = async () => {
    if (user) {

      const result = await CreateUser({
        email: user?.primaryEmailAddress?.emailAddress ?? '',
        imageUrl: user?.imageUrl ?? '',
        name: user?.fullName ?? ''
      })
      console.log(result)
      setUserDetail(result);
    }
  }
  return (
    <div>
      <UserDetailContext.Provider value={{userDetail,setUserDetail}}>

      {children}
      </UserDetailContext.Provider>
    </div>
  )
}

export default Provider


export const useUserDetailContext = ()=>{
  return createContext(UserDetailContext);
}