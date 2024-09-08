import { useState } from 'react'

import { Header } from './components/header/Header'
import { Gallery } from './components/maingallery/Gallery'
import { Features } from './components/features/Features'
import {About} from './components/about/About'
import {Services} from './components/services/Services'

import {Form} from './components/getinform/Form'
import {Testomonial} from './components/testomonial/Testomonial'
import { Project } from './components/projects/Project'
import { Contact } from './components/contactus/Contact'


function App() {


  return (
    <>
  <Header/>
  <Gallery/>
  <Features/>
  <About/>
  <Services/>
  <Form/>
  <Testomonial/>
  <Project/>
  <Contact/>
    </>
  )
}

export default App
