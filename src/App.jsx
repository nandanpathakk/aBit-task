import { useState } from 'react'
import Header from './components/Header'
import Band from './components/Band'
import HeroSection from './components/HeroSection'
import Dashboard from './components/Dashboard'
import NewRelease from './components/NewRelease'
import Footer from './components/Footer'

function App() {

  return (
    <div>
      <Header></Header>
      <HeroSection></HeroSection>
      {/* <Band></Band> */}
      <Dashboard></Dashboard>
      <NewRelease></NewRelease>
      <Footer></Footer>
      {/* <div className="flex items-center">
        <div className="w-32 h-[29px] rounded-l border border-black bg-transparent flex items-center justify-center">
          <div className="w-[53px] text-center text-zinc-800 text-sm font-normal font-['Overlock']">Creator</div>
        </div>
        <div className="w-32 h-[29px] rounded-r bg-black bg-opacity-60">

        </div>
      </div> */}

    </div>
  )
}

export default App
