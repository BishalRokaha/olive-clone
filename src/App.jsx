import Navbar from './components/Navbar'
import Hero from './components/Hero'

export default function App() {
  return (
    <div
      className="min-h-screen px-4 pt-6"
      style={{
        background: '#f3f5f1',
      }}
    >
      <div
        className="max-w-[1220px] mx-auto overflow-hidden"
        style={{
          background: 'linear-gradient(180deg, #e6f3ea 0%, #eaf7ee 100%)',
          borderRadius: '26px',
          padding: '30px 44px 0px',
          border: '1px solid rgba(255,255,255,0.7)',
          boxShadow:`
            0 1px 2px rgba(16,24,40,0.02),
            0 12px 32px rgba(16,24,40,0.035)
          `,
        }}
      >
        <Navbar />
        <Hero />
      </div>
    </div>
  )
}
