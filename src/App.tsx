import { useEffect } from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import "./App.css"
import { Contact } from './components/Contact'
import { Header } from './components/Header'
import { Knowledge } from './components/Knowledge'
import { Main } from './components/Main'
import { Projetos } from './components/Projects'
import { About } from './components/About/About'

export function App() {

  useEffect(() => {
    // Add DevIcon CDN link for technology icons
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css";
    document.head.appendChild(link);

    return () => {
      document.head.removeChild(link);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <Main />
      <About />
      <Knowledge />
      <Projetos />
      <Contact />

      <ToastContainer />
    </div>
  )
}
