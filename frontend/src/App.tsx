
import { useState } from 'react'
import './App.css'
import { Button } from './components/Button'
import { Card } from './components/Card'
import { CreateContextModal } from './components/CreateContentModal'
import { PlusIcon } from './icons/PlusIcons'
import { ShareIcon } from './icons/ShareIcon'

function App() {
  const [openModal, setOpenModal] = useState(false)


  return (
  
    <div>
      <CreateContextModal open={openModal} onClose={() => {
        setOpenModal(false)
      }} />
   
        <div className='flex justify-end gap-2 items-center p-2'>
          <Button onClick={() => {
            setOpenModal(true)
          }} variant='primary' text="Add content" startIcon={<PlusIcon />}/>
        <Button variant='secondary' text="Share Brain" startIcon={<ShareIcon />}/>
        </div>
       <div className='flex gap-5 items-center '>
         <Card type='youtube' title='this is a title' link='https://www.youtube.com/watch?v=IC5Y1EE-aj4' />
        <Card type='twitter' title='this is a twitter title' link='https://x.com/mannupaaji/status/1954475202722648210' />
       </div>
      </div>
   

  )
}

export default App
