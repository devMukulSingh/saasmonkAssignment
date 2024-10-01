import { Button } from '@/components/ui/button'
import React from 'react'

const Navbar = () => {
  return (
    <div className='h-20 bg-neutral-300 flex justify-between items-center'>
        <h1>MOVIECRITIC</h1>
        <div className='flex gap-2'>
            <Button variant="outline">
                Add new movie
            </Button>
            <Button className='bg-blue-500 hover:bg-blue-400'>
                Add new review
            </Button>
        </div>
    </div>
  )
}

export default Navbar