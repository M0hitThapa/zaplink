
import { useState } from 'react'
import '../App.css'
import { Button } from '../components/Button'
import { Card } from '../components/Card'
import { CreateContextModal } from '../components/CreateContentModal'
import { PlusIcon } from '../icons/PlusIcons'
import { ShareIcon } from '../icons/ShareIcon'
import { Sidebar } from '../components/Sidebar'
import { useContent } from '../hooks/useContent'

function Dashboard() {
  const [openModal, setOpenModal] = useState(false)
  const contents = useContent()


  return (
  
    <div>
      <Sidebar  />
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
        {contents.map(({link, type,title}) =>  <Card type={type} title={title} link={link} /> )}
        
       
       </div>
      </div>
    </div>
   

  )
}

export default Dashboard
