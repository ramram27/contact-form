import Image from 'next/image'
import Login from './component/Login'
import Navbar from './component/Navbar'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <Navbar />
      <Login />
      
    </main>
  )
}
