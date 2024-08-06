import FormWrapper from '@/components/form/form-wrapper'
import LoginForm from '@/components/form/login-form'
import HeadingText from '@/components/heading-text'
import React from 'react'

const LoginPage = () => {
  return (
    <section>
        {/* <FormWrapper
          content={'content'}
          title={'Drive Swap'}
          subtitle={'Login to your accont below'}
        /> */}
        <LoginForm />
    </section>
  )
}

export default LoginPage