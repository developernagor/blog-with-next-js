import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import React from 'react'

const Profile = async() => {
    const {getUser} = getKindeServerSession();
      const user =await getUser();
      console.log(user)

  return (
    <div>
      <h1>Welcome {user?.given_name} to your profile!</h1>
    </div>
  )
}

export default Profile;
