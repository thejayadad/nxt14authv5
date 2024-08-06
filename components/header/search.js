'use client'
import { Input } from '@nextui-org/react'
import React from 'react'

const Search = () => {
  return (
    <div className="relative w-full  mx-auto">
       <Input
         type="text"
        placeholder="Search..."
       />
    </div>
  )
}

export default Search