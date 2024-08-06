import { auth, signIn, signOut } from '@/auth'
import { Button } from '@nextui-org/react'
import React from 'react'
import { FiLogOut, FiUser } from 'react-icons/fi'

const SocialPage = async () => {
    const session = await auth()
    const user = session?.user
  return (
    <section>
        {user ?
        <LogoutButton /> : <SignInButton />    
    }
    </section>
  )
}
function SignInButton(){
    return (
        <form
        action={async () => {
            'use server'
            await signIn()
        }}
        >
            <Button
            type='submit'>
                Sign In With Google
            </Button>
        </form>
    )
}

function LogoutButton(){
    return(
        <form
        action={async () => {
            'use server'
            await signOut()
        }}
        >
            <Button
            type='submit'
            variant='light'
            >
                <FiLogOut />
            </Button>
        </form>
    )
}
export default SocialPage