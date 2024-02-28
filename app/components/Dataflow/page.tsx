
'use client';

import { Button, Modal, TextInput, } from 'flowbite-react';
import { useState } from 'react';

function Component() {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div className='item-center justify-center mt-44'>
      <Button onClick={() => setOpenModal(true)}>Toggle modal</Button>
      <div className='p-3'>
      
    <Modal  show={openModal} size="md" onClose={() => setOpenModal(false)} popup >
    <h1 className="font-bold text-large p-4 mx-28 transform -translate-y-3">Application Details</h1>

      <div className='w-96 border-none outline-none mx-3 gap-10'>
        
        <TextInput  id="email1" type="email" placeholder="Torus Poc" required />
      </div>
      <div className='w-96 border-none outline-none mx-3 my-6'>
        
        <TextInput id="password1" type="password" placeholder='Enter artificants name' />
      </div>
      
      <Button gradientMonochrome='cyan' className='h-8 small-rounded w-32 mb-3 mx-32'>Get Started</Button>
    </Modal>
    </div>
    
    </div>
  );
}
export default Component
