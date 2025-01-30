import Card from './Card'

const experiences = [
  {
    logo: '/logos/learnsmart.webp',
    title: 'Founder',
    company: 'LearnSmart Tutoring LLC',
    period: 'Aug 23 - Present',
    description: 'Founded a successful tutoring business and built an AI-powered smart tutoring app. Delivered 1.2K+ sessions, 28K challenges & taught 100+ classes in math, CS, and writing.',
    link: 'https://learnsmart.streamlit.app/'
  },
  {
    logo: '/logos/inspiritai.jpeg',
    title: 'AI X Music Researcher',
    company: 'InspiritAI',
    period: 'Aug 22 - Jun 23',
    description: 'Researched AI and music in the InspiritAI program, developing an ML model for musical emotion recognition and published a research paper.',
    link: 'https://docs.google.com/document/d/1elvewNhvUkGoy_pQQ8Mnu9-ciRZwCwT05xW-mJ1YCXo/edit'
  },
  {
    logo: '/logos/MAIA.jpeg',
    title: 'Finance',
    company: ' Marshall Artificial Intelligence Association',
    period: 'Sep 24 - Present',
    description: 'Developed an automatic expense categorizer as part of a semester-long finance AI project, leading team efforts and presenting findings to MAIA.',
    link: 'https://www.youtube.com/watch?v=7ZMR7fpcdvs'
  },
  {
    logo: '/logos/pianopals.jpeg',
    title: 'Co-Founder',
    company: 'Piano Pals',
    period: 'Aug 22 - Aug 24',
    description: 'Co-founded Piano Pals, organizing music lessons for young students, managing 8 instructors, and teaching 200+ piano and violin classes.',
    link: 'https://pianopals.wixsite.com/pianopals'
  },
  {
    logo: '/logos/btg.jpeg',
    title: 'Learning',
    company: 'BTG',
    period: 'Jan 20 - Sep 22',
    description: "Worked on a semester-long case using Uber data and attended tech consulting workshops as a Cloud Member of USC’s Business Technology Group.",
    link: 'https://bit.ly/ubersemestercase'
  }
 
]

export default function Experience() {
  return (
    <section className="mb-16">
      <h2 className="text-xl mb-4 text-[#042d59] font-bold">-experience-</h2>
      <div className="space-y-3">
        {experiences.map((exp, index) => (
          <Card key={index} {...exp} />
        ))}
      </div>
    </section>
  )
}

