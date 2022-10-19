import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './styles/global.css'
import { Button } from './components/Button'
import { Checkbox } from './components/Checkbox'
import { Text } from './components/Text'
import { TextInput } from './components/TextInput'
import { Heading } from './components/Heading'
import { Logo } from './components/InstaLogo'
import { Envelope, Key } from 'phosphor-react';


// import './App.css'

export function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <div className='w-screen h-screen bg-gray-600 flex flex-col items-center justify-center'>

    <header className='flex flex-col items-center'>  
      <Logo />

      <Heading size='lg' className='mt-4 text-gray-100'>
        Ignite Lab
      </Heading>

      <Text size='md' className='mt-1 text-gray-100'>
        A simple React app
      </Text>
    </header>

    <form action="" className='flex flex-col w-full max-w-sm mt-10  gap-4 items-stretch'>
      <label htmlFor="email" className='flex flex-col gap-3'>
        <Text className='font-semibold'>Endereço de e-mail</Text>
        <TextInput.Root>
          <TextInput.Icon>
            <Envelope />
          </TextInput.Icon>  
          <TextInput.Input type="email" id="email"  placeholder='Digite seu e-mail'/>
        </TextInput.Root>
      </label>

      <label htmlFor="senha" className='flex flex-col gap-3'>
        <Text className='font-semibold'>Senha</Text>
        <TextInput.Root>
          <TextInput.Icon>
            <Key />
          </TextInput.Icon>  
          <TextInput.Input type="password" id="senha"  placeholder='***************'/>
        </TextInput.Root>
      </label>

      <label htmlFor="remember" className='flex items-center gap-2' >
        <Checkbox id='remember' />
        <Text size="sm">Lembre-me</Text>
      </label>

      <Button type='submit'>Entar na plataforma</Button>

    </form>

    <footer className="flex flex-col items-center gap-2 mt-8" >
      <Text asChild size='sm'>
        <a href="#" className='text-gray-400 underline hover:text-gray-200' >Esqueci minha senha</a>
      </Text>
      <Text asChild size='sm'>
        <a href="#" className='text-gray-400 underline hover:text-gray-200'>Não tem uma conta? Cadastre-se</a>
      </Text>
    </footer>   
    
    </div>
    </>
  )
}
