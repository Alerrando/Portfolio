import { useState } from 'react'
import { Contato } from './components/Contato'
import { Header } from './components/Header'
import { Main } from './components/Main'
import { Projetos } from './components/Projects'
import { Conhecimentos } from './components/Conhecimentos'

export function App() {
  return (
    <>
      <Header />
      <Main />
      <Conhecimentos />
      <Projetos />
      <Contato />
    </>
  )
}
