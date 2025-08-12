
import { useState } from 'react'
import './App.css'
import { Button } from './components/Button'
import { Card } from './components/Card'
import { CreateContextModal } from './components/CreateContentModal'
import { PlusIcon } from './icons/PlusIcons'
import { ShareIcon } from './icons/ShareIcon'
import { Sidebar } from './components/Sidebar'

function App() {
  const [openModal, setOpenModal] = useState(false)


  return (
  
    <div>
      <Sidebar className="p-4" />
      <div className='ml-72  h-screen bg-gray-100'>
      <CreateContextModal open={openModal} onClose={() => {
        setOpenModal(false)
      }} />
   
        <div className='flex justify-end gap-2 items-center p-4'>
          <Button onClick={() => {
            setOpenModal(true)
          }} variant='primary' text="Add content" startIcon={<PlusIcon />}/>
        <Button variant='secondary' text="Share Brain" startIcon={<ShareIcon />}/>
        </div>
       <div className='flex  items-center '>
         <Card type='youtube' title='this is a title' link='https://www.youtube.com/watch?v=IC5Y1EE-aj4' />
        <Card type='twitter' title='this is a twitter title' link='https://x.com/mannupaaji/status/1954475202722648210' />
       </div>
      </div>
    </div>
   

  )
}

export default App
