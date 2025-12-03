import { useState } from 'react'
import HomePage from './components/HomePage/HomePage'
import TeamPage from './components/TeamPage/TeamPage'
import DocumentationPage from './components/DocumentationPage/DocumentationPage'
import './App.css'

function App() {
  const [currentPage, setCurrentPage] = useState('home')

  const handleNavigate = (page) => {
    setCurrentPage(page)
  }

  const renderPage = () => {
    switch (currentPage) {
      case 'team':
        return <TeamPage onNavigate={handleNavigate} />
      case 'documentation':
        return <DocumentationPage onNavigate={handleNavigate} />
      default:
        return <HomePage onNavigate={handleNavigate} />
    }
  }

  return (
    <div className="app">
      {renderPage()}
    </div>
  )
}

export default App
