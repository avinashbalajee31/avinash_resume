import React from 'react'
import { ContactScreen } from '../components/contactScreen'
import { EducationScreen } from '../components/educationScreen'
import { Footer } from '../components/footer'
import { Home } from '../components/home'
import { MobileNavbar } from '../components/mobileNavbar'
import { Navbar } from '../components/navbar'
import { SkillsScreen } from '../components/skillsScreen'
import { MainComponentContextType } from '../constants/component-constants'
import { useMainComponent } from '../context/mainComponent.context'
import { ExperienceScreen } from '../components/experienceScreen'

export default function Dashboard() {
  const component = useMainComponent()
  const renderComponent = () => {
    console.log('render dash', component?.mainComponent)
    switch (component?.mainComponent) {
      case MainComponentContextType.EDUCATION:
        return <div className="sm:p-4"><EducationScreen/></div>
      case MainComponentContextType.CONTACT:
        return <div className="p-4"><ContactScreen/></div>
      case MainComponentContextType.EXPERIENCE:
        return <div className="sm:p-4"><ExperienceScreen/></div>
      case MainComponentContextType.SKILLS:
        return <div className="sm:px-4 bg-slate-950 xl:px-16 "><SkillsScreen/></div>
      default:
        return <div className="p-4"><Home/></div>
    }
  }

  return (
    <>
      <div className="bg-slate-950 h-screen w-screen flex flex-col justify-between">
        <Navbar />
        {renderComponent()}
        <Footer />
      </div>
      <div className={`${component?.viewMobileSideBar ? 'flex': 'hidden'}`}>
        <MobileNavbar></MobileNavbar>
      </div>
    </>
  )
}
