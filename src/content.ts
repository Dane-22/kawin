export type Category = 'Photography' | 'Videography' | 'Social Media'

export type Media = {
  src: string
  alt: string
  credit?: string
}

export type Project = {
  id: string
  title: string
  category: Category
  type: string
  year: string
  summary: string
  context: string
  role: string
  cover: Media
  image?: Media
  videoSrc?: string
  isConcept: boolean
  featured?: boolean
  size?: 'wide' | 'tall' | 'normal'
}

export const profile = {
  name: 'Karen Joyce P. Dicang',
  displayName: 'Karen Joyce Dicang',
  eyebrow: 'Visual stories & digital content',
  intro: "I’m Karen Joyce Dicang. I bring visual storytelling, creative production, and thoughtful coordination together.",
  about: 'My background spans creative production and executive support, with experience in content planning, copywriting, creative direction, client coordination, scheduling, and production logistics. I’m drawn to work that makes ideas clear, considered, and memorable.',
  experience: [
    { title: 'Virtual Executive Assistant', period: 'March 2026 — present' },
    { title: 'Creative Producer', period: 'July 2025 — March 2026' },
  ],
  education: 'BS major in Psychology, Saint Louis College · completed 2025',
  contact: {
    email: 'kawinsarchive@gmail.com',
    // Add real URLs to show social links. Empty strings stay hidden.
    socials: [] as { label: string; url: string }[],
  },
}

export const categories: Category[] = ['Photography', 'Videography', 'Social Media']

export const services = [
  { number: '01', title: 'Photography', description: 'Visual concepts, composition, and image selection for stories and campaigns.' },
  { number: '02', title: 'Videography', description: 'Short-form video ideas, shot planning, and production support.' },
  { number: '03', title: 'Content creation', description: 'Creative assets and narratives shaped for the right format and audience.' },
  { number: '04', title: 'Social media planning', description: 'Content calendars, series ideas, and a consistent publishing rhythm.' },
  { number: '05', title: 'Copywriting', description: 'Captions and concise messaging that sound human and purposeful.' },
  { number: '06', title: 'Project coordination', description: 'Schedules, details, and people kept aligned from planning to delivery.' },
]

// Demo entries: replace cover/image paths with real files in public/media, update the
// descriptions and credits, then set isConcept to false only for verified real work.
// Add videoSrc for a real video; until then the UI shows a coming-soon state.
export const projects: Project[] = [
  {
    id: 'still-in-motion', title: 'Still in Motion', category: 'Photography', type: 'Editorial photography study', year: '2026',
    summary: 'A study in quiet movement, sculptural light, and everyday objects.',
    context: 'A fictional editorial brief exploring how a small still-life series could feel tactile and cinematic.',
    role: 'Sample presentation: mood, framing, and visual direction.',
    cover: { src: '/media/still-motion.svg', alt: 'Abstract amber still-life composition with a vase and soft shadows' },
    isConcept: true, featured: true, size: 'wide',
  },
  {
    id: 'after-hours', title: 'After Hours', category: 'Videography', type: 'Short film concept', year: '2026',
    summary: 'An atmospheric city portrait imagined for a thirty-second visual story.',
    context: 'A fictional short-form video treatment built around light, pacing, and the feeling of a city after dusk.',
    role: 'Sample presentation: concept, shot direction, and poster.',
    cover: { src: '/media/after-hours.svg', alt: 'Abstract violet city skyline at night with a warm glowing horizon' },
    isConcept: true, featured: true, size: 'tall',
  },
  {
    id: 'good-mornings', title: 'Good Mornings', category: 'Social Media', type: 'Social campaign concept', year: '2026',
    summary: 'A warm, slow-living content series for an imaginary neighborhood café.',
    context: 'A fictional campaign showing how a cover, carousel, reel idea, and captions can live together as one story.',
    role: 'Sample presentation: creative direction, post planning, and sample copy.',
    cover: { src: '/media/good-mornings.svg', alt: 'Graphic illustration of coffee and morning sun in warm cream and orange tones' },
    isConcept: true, featured: true, size: 'normal',
  },
  {
    id: 'soft-geometry', title: 'Soft Geometry', category: 'Photography', type: 'Architecture study', year: '2026',
    summary: 'Shape, shadow, and a sense of pause in a minimal built environment.',
    context: 'A fictional photography series exploring architecture through graphic forms and natural light.',
    role: 'Sample presentation: art direction and image sequence.',
    cover: { src: '/media/soft-geometry.svg', alt: 'Minimal architectural arches in terracotta and pale sand tones' },
    isConcept: true, size: 'tall',
  },
  {
    id: 'the-blue-hour', title: 'The Blue Hour', category: 'Videography', type: 'Travel film concept', year: '2026',
    summary: 'A reflective film idea about the minutes between day and night.',
    context: 'A fictional travel-film brief presented as a poster and a short creative treatment. No footage is available yet.',
    role: 'Sample presentation: visual direction and treatment.',
    cover: { src: '/media/blue-hour.svg', alt: 'Layered blue mountain silhouettes beneath a pale evening sky' },
    isConcept: true, size: 'normal',
  },
  {
    id: 'notes-from-the-coast', title: 'Notes from the Coast', category: 'Photography', type: 'Travel editorial study', year: '2026',
    summary: 'A visual diary of color, texture, and imagined coastal afternoons.',
    context: 'A fictional travel editorial developed to demonstrate a quieter, place-led visual style.',
    role: 'Sample presentation: mood and composition.',
    cover: { src: '/media/coast.svg', alt: 'Graphic coastal landscape with a sun, sea, and textured green foreground' },
    isConcept: true, size: 'normal',
  },
  {
    id: 'forms-of-care', title: 'Forms of Care', category: 'Social Media', type: 'Wellness content concept', year: '2026',
    summary: 'A gentle educational carousel system for an imaginary wellness journal.',
    context: 'A fictional social content direction focused on clear hierarchy and approachable language.',
    role: 'Sample presentation: template direction and sample copy.',
    cover: { src: '/media/forms-care.svg', alt: 'Cream and sage editorial graphic with abstract leaves and circular forms' },
    isConcept: true, size: 'wide',
  },
  {
    id: 'frame-by-frame', title: 'Frame by Frame', category: 'Videography', type: 'Product video concept', year: '2026',
    summary: 'A minimal motion idea built around texture, detail, and reveal.',
    context: 'A fictional product video treatment presented with a poster only. No footage is available yet.',
    role: 'Sample presentation: concept and shot direction.',
    cover: { src: '/media/frame-by-frame.svg', alt: 'Dark graphic composition with a warm amber spotlight and sculptural form' },
    isConcept: true, size: 'normal',
  },
]

export const campaign = {
  title: 'Good Mornings',
  label: 'Sample presentation · fictional campaign',
  context: 'An imagined neighborhood café launches a slower morning ritual. This sample shows how one idea could unfold across a cover, post series, reel, and captions.',
  role: 'Concept direction, content planning, visual system, and sample copy.',
  cover: projects[2].cover,
  posts: [
    { number: '01', label: 'Campaign cover', image: '/media/good-mornings.svg', alt: 'Warm illustrated coffee and sun campaign cover' },
    { number: '02', label: 'Carousel post', image: '/media/morning-post.svg', alt: 'Sample morning ritual carousel graphic in cream and amber' },
    { number: '03', label: 'Reel poster', image: '/media/morning-reel.svg', alt: 'Sample reel poster with illustrated coffee cup and sun' },
  ],
  captions: [
    'A little room for the morning to begin. Come in, take your time, and let the first cup be yours.',
    'Three small things: good light, a warm cup, and nowhere else to be for a moment.',
  ],
}
