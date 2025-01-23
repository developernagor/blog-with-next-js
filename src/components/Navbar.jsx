
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import Link from 'next/link';

const Navbar = async() => {
  const {getUser} = getKindeServerSession();
  const user = await getUser();

  return (
    <div className='bg-gray-500 h-14 text-white'>
      <nav className='container mx-auto flex justify-between items-center'>
        <div>
          <h1>Logo</h1>
        </div>
        <div>
          <Link className='btn border border-gray-500 rounded-md px-3 py-1' href="/">Home</Link>
          <Link className='btn border border-gray-500 rounded-md px-3 py-1' href="/profile">Profile</Link>
          {
            user ? 
            
            <Link className='btn border border-gray-500 rounded-md px-3 py-1' href="/api/auth/logout">Logout</Link>
            
            : 
            
            <Link className='btn border border-gray-500 rounded-md px-3 py-1' href="/api/auth/login">Login</Link>
            
          }
        </div>
      </nav>
    </div>
  )
}

export default Navbar;
