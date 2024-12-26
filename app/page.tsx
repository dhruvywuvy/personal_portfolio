import Introduction from '../components/Introduction'
import Experience from '../components/Experience'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen p-8 sm:p-12 md:p-16 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold  mb-8 text-[#058081]">
        -dhruv deshmukh-
      </h1>
      <Introduction />
      <Experience />
      <Footer />
      {/* <Projects /> */}
    </main>
  )
}