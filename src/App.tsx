import { useState } from 'react'
import { Contact } from './components/Contact'
import { Header } from './components/Header'
import { Main } from './components/Main'
import { Projetos } from './components/Projects'
import { Knowledge } from './components/Knowledge';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify'

export function App() {
  return (
    <>
      <Header />
      <Main />
      <Knowledge />
      <Projetos />
      <Contact />

      <ToastContainer />
    </>
  )
}
