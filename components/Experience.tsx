import Card from './Card'

const experiences = [
  {
    logo: '/logos/advocare_logo.jpg',
    title: 'Co-founder',
    company: 'MediChecker',
    period: 'Sep 24 - Present',
    description: 'Developing a platform to ensure no one overpays for medical bills again.',
    link: 'https://www.medicalbillchecker.com/'
  },
  {
    logo: '/logos/design_prodigy_logo.jpg',
    title: 'Software Development',
    company: 'Design Prodigy',
    period: 'May 24 - Aug 24',
    description: 'Developed B2B market intelligence software for in-house + Fortune 500 companies.',
    link: 'https://www.dp.sg/'
  },
  {
    logo: '/logos/rsaf_logo.png',
    title: 'Logistics + HR',
    company: 'Republic of Singapore Air Force',
    period: 'Mar 22 - Apr 24',
    description: 'Built systems + trained new personnel. Second in-charge for signals logistics.',
    link: 'https://www.mindef.gov.sg/rsaf'
  },
  {
    logo: '/logos/ethereal_logo.webp',
    title: 'Co-founder',
    company: 'Ethereal Performance',
    period: 'Dec 21 - Apr 22',
    description: 'Business Development + Marketing for a fitness trainer business. Onboarded 15+ clients.',
    link: 'https://www.instagram.com/etherealperformsg/'
  },
  {
    logo: '/logos/irmbrdarkskies_logo.jpg',
    title: 'Founder',
    company: 'irmbrdarkskies',
    period: 'Jan 20 - Sep 22',
    description: "Founded label to support innovative artists + uplift people. Featured on Soundcloud's Top 50 Indie Charts, Australia's Acid Stag Radio etc.",
    link: 'https://open.spotify.com/artist/4Wrhw1yvoYoTnswsk4JJCS?si=y1yNsvvQRkGUkteHT7q_2w'
  },
  {
    logo: '/logos/unsplash_logo.jpeg',
    title: 'Photographer',
    company: 'Unsplash',
    period: 'Jan 17 - Dec 21',
    description: '24 mil views, 100k downloads. Photos used by Picsart, Buzzfeed, Notion, Tencent, Yahoo News, etc.',
    link: 'https://unsplash.com/@dhruvywuvy'
  }
]

export default function Experience() {
  return (
    <section className="mb-16">
      <h2 className="text-xl mb-4 text-[#058081] font-bold">-work experience-</h2>
      <div className="space-y-3">
        {experiences.map((exp, index) => (
          <Card key={index} {...exp} />
        ))}
      </div>
    </section>
  )
}

