import Card from './Card'

const projects = [
  {
    logo: '/music-logo.png',
    title: 'Music Producer',
    company: 'Freelance',
    period: 'Q4 2023',
    description: 'Produced and mixed tracks for various independent artists.',
    link: 'https://soundcloud.com/your-profile'
  },
  {
    logo: '/photo-logo.png',
    title: 'Photographer',
    company: 'Freelance',
    period: 'Dec 2023',
    description: 'Captured moments for events, portraits, and landscapes.',
    link: 'https://instagram.com/your-profile'
  }
]

export default function Projects() {
  return (
    <section>
      <h2 className="text-xl mb-4 text-[#333]">projects</h2>
      <div className="space-y-3">
        {projects.map((project, index) => (
          <Card key={index} {...project} />
        ))}
      </div>
    </section>
  )
}

