'use client'
import { Card, CardBody, CardFooter, CardHeader } from '@nextui-org/react'
import React from 'react'
import HeadingText from '../heading-text'
import Image from 'next/image'

const FormWrapper = ({content, title, subtitle}) => {
  return (
    <Card>
        <CardHeader>
            <div className='flex flex-col'>
            <div className='flex text-center flex-row items-center justify-center'>
        <Image
        src='/logo.png'
        width={70}
        height={70}
        alt='logo'
        /><span>Drive Swap</span>
    </div>
          <HeadingText
          title={title}
          subtitle={subtitle}
          />
            </div>
        </CardHeader>
        <CardBody>
            {content}
        </CardBody>
        <CardFooter>
          Social
        </CardFooter>
    </Card>
  )
}

export default FormWrapper