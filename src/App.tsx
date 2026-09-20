import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Layout from './components/layout/Layout'

import Home from './pages/Home'
import SolutionsHub from './pages/SolutionsHub'
import SolutionDetail from './pages/SolutionDetail'
import PlatformHub from './pages/PlatformHub'
import PlatformDetail from './pages/PlatformDetail'
import HardwareHub from './pages/HardwareHub'
import HardwareDetail from './pages/HardwareDetail'
import IndustriesHub from './pages/IndustriesHub'
import IndustryDetail from './pages/IndustryDetail'
import Pricing from './pages/Pricing'
import ResourcesHub from './pages/ResourcesHub'
import ResourceDetail from './pages/ResourceDetail'
import Company from './pages/Company'
import ContactHub from './pages/ContactHub'
import ContactForm from './pages/ContactForm'
import Login from './pages/Login'
import NotFound from './pages/NotFound'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

export default function App() {
  return (
    <Layout>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/solutions" element={<SolutionsHub />} />
        <Route path="/solutions/:slug" element={<SolutionDetail />} />

        <Route path="/platform" element={<PlatformHub />} />
        <Route path="/platform/:slug" element={<PlatformDetail />} />

        <Route path="/hardware" element={<HardwareHub />} />
        <Route path="/hardware/:slug" element={<HardwareDetail />} />

        <Route path="/industries" element={<IndustriesHub />} />
        <Route path="/industries/:slug" element={<IndustryDetail />} />

        <Route path="/pricing" element={<Pricing />} />

        <Route path="/resources" element={<ResourcesHub />} />
        <Route path="/resources/:slug" element={<ResourceDetail />} />

        <Route path="/company" element={<Company />} />

        <Route path="/contact" element={<ContactHub />} />
        <Route path="/contact/:type" element={<ContactForm />} />

        <Route path="/login" element={<Login />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  )
}
