import { useState } from 'react'
import { Header } from './components/Header'
import { Main } from './components/Main'
import { Projetos } from './components/Projetos'
import { Sobre } from './components/Sobre'

export function App() {
  return (
    <>
      <Header />
      <Main />
      <Projetos />
      <Sobre />
    </>
  )
}
