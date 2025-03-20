'use client'

import Header from '../components/Header' // Adjust path if needed
//import MessageList from '../components/MessageList'
import MessageSender from '../components/MessageSender';


const Page = () => {
  return (
    <div>
      <Header />
      <div className="container mx-auto p-4">
        <h1>Messaging App</h1>
        <MessageSender />
      </div>
    </div>
  )
}

export default Page
