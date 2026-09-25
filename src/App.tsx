import { useEffect, useRef, useState } from 'react'
import { campaign, categories, profile, projects, services, type Category, type Project } from './content'

const Arrow = ({ diagonal = false }: { diagonal?: boolean }) => <span aria-hidden="true">{diagonal ? '↗' : '→'}</span>

function ProjectCard({ project, onOpen, className = '' }: { project: Project; onOpen: (project: Project) => void; className?: string }) {
  return (
    <button className={`project-card ${project.size ?? 'normal'} ${className}`} type="button" onClick={() => onOpen(project)} aria-label={`View ${project.title}, ${project.category} ${project.isConcept ? 'concept project' : 'project'}`}>
      <span className="project-image-wrap">
        <img src={project.cover.src} alt={project.cover.alt} loading="lazy" decoding="async" />
        <span className="image-shade" />
        {project.isConcept && <span className="concept-badge">Concept project</span>}
        {project.category === 'Videography' && !project.videoSrc && <span className="video-state">Video sample coming soon</span>}
        <span className="card-open" aria-hidden="true"><Arrow diagonal /></span>
      </span>
      <span className="card-meta"><span>{project.category} <span className="meta-dot">·</span> {project.type}</span><span>{project.year}</span></span>
      <span className="card-title">{project.title}</span>
    </button>
  )
}

function ProjectDialog({ project, onClose }: { project: Project | null; onClose: () => void }) {
  const dialogRef = useRef<HTMLDialogElement>(null)

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return
    if (project && !dialog.open) dialog.showModal()
    if (!project && dialog.open) dialog.close()
  }, [project])

  return (
    <dialog ref={dialogRef} className="project-dialog" onClose={onClose} onClick={(event) => { if (event.target === dialogRef.current) dialogRef.current?.close() }} aria-labelledby="dialog-title">
      {project && <div className="dialog-inner">
        <button className="dialog-close" type="button" onClick={() => dialogRef.current?.close()} aria-label="Close project details">Close <span aria-hidden="true">×</span></button>
        <div className="dialog-media">
          {project.videoSrc ? <video controls poster={project.cover.src} src={project.videoSrc} aria-label={`${project.title} video`} /> : <img src={project.cover.src} alt={project.cover.alt} />}
          {project.category === 'Videography' && !project.videoSrc && <span className="dialog-video-state">Video sample coming soon</span>}
        </div>
        <div className="dialog-copy">
          <p className="eyebrow">{project.category} <span className="meta-dot">·</span> {project.type}</p>
          <h2 id="dialog-title">{project.title}</h2>
          {project.isConcept && <span className="detail-badge">Concept project · sample presentation</span>}
          <p className="dialog-lead">{project.summary}</p>
          <div className="detail-row"><span>Context</span><p>{project.context}</p></div>
          <div className="detail-row"><span>Presented role</span><p>{project.role}</p></div>
          {project.cover.credit && <p className="media-credit">Image credit: {project.cover.credit}</p>}
        </div>
      </div>}
    </dialog>
  )
}

function App() {
  const [activeFilter, setActiveFilter] = useState<Category | 'All'>('All')
  const [activeProject, setActiveProject] = useState<Project | null>(null)
  const [menuOpen, setMenuOpen] = useState(false)
  const galleryProjects = projects.filter((project) => activeFilter === 'All' || project.category === activeFilter)
  const featured = projects.filter((project) => project.featured)
  const closeMenu = () => setMenuOpen(false)

  useEffect(() => {
    if (!menuOpen) return
    const onEscape = (event: KeyboardEvent) => { if (event.key === 'Escape') setMenuOpen(false) }
    window.addEventListener('keydown', onEscape)
    return () => window.removeEventListener('keydown', onEscape)
  }, [menuOpen])

  return <>
    <div className="site-shell">
      <header className="site-header" id="top">
        <a className="wordmark" href="#top" onClick={closeMenu} aria-label="Karen Joyce Dicang, back to top">K<span>J.</span></a>
        <nav className={menuOpen ? 'main-nav open' : 'main-nav'} id="main-navigation" aria-label="Main navigation">
          <a href="#work" onClick={closeMenu}>Work</a>
          <a href="#services" onClick={closeMenu}>What I do</a>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
        </nav>
        <a className="header-cta" href={`mailto:${profile.contact.email}`}>Let’s talk <Arrow diagonal /></a>
        <button className="menu-toggle" type="button" aria-expanded={menuOpen} aria-controls="main-navigation" aria-label={menuOpen ? 'Close menu' : 'Open menu'} onClick={() => setMenuOpen(!menuOpen)}><span /><span /></button>
      </header>

      <main>
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow"><span className="amber-line" />{profile.eyebrow}</p>
            <h1 id="hero-title">Ideas made<br /><em>visible.</em></h1>
            <p className="hero-intro">{profile.intro}</p>
            <div className="hero-actions"><a className="button-primary" href="#work">Explore the portfolio <Arrow diagonal /></a><a className="text-link" href="#contact">Get in touch <Arrow /></a></div>
          </div>
          <div className="hero-art" aria-label="Abstract editorial visual composition">
            <div className="hero-art-main"><img src="/media/hero-art.svg" alt="Abstract editorial artwork of golden light, dark geometry, and a warm horizon" /></div>
            <div className="hero-art-note"><span>01 / VISUAL EXPLORATIONS</span><span>Photography · Motion · Content</span></div>
            <div className="hero-vertical">CURIOUS BY NATURE / CONSIDERED BY DESIGN</div>
          </div>
          <div className="hero-bottom"><span>KAREN JOYCE DICANG</span><span>SCROLL TO EXPLORE ↓</span></div>
        </section>

        <section className="section featured-section" id="work" aria-labelledby="featured-title">
          <div className="section-heading"><div><p className="eyebrow"><span className="section-index">01 /</span> SELECTED PRESENTATIONS</p><h2 id="featured-title">Featured <em>concepts.</em></h2></div><p className="section-description">A preview of how future photography, video, and social projects could be presented. All work below is fictional demo content.</p></div>
          <div className="featured-grid">{featured.map((project) => <ProjectCard key={project.id} project={project} onOpen={setActiveProject} />)}</div>
        </section>

        <section className="section gallery-section" aria-labelledby="gallery-title">
          <div className="section-heading gallery-heading"><div><p className="eyebrow"><span className="section-index">02 /</span> THE GALLERY</p><h2 id="gallery-title">A frame for <em>every story.</em></h2></div><p className="section-description">Explore sample formats across visual storytelling and digital content.</p></div>
          <div className="filter-bar" role="group" aria-label="Filter portfolio projects">
            {(['All', ...categories] as const).map((filter) => <button key={filter} type="button" className={activeFilter === filter ? 'filter active' : 'filter'} aria-pressed={activeFilter === filter} onClick={() => setActiveFilter(filter)}>{filter}<span>{filter === 'All' ? projects.length : projects.filter((project) => project.category === filter).length}</span></button>)}
          </div>
          <div className="gallery-grid" aria-live="polite">{galleryProjects.map((project) => <ProjectCard key={project.id} project={project} onOpen={setActiveProject} />)}</div>
        </section>

        <section className="section campaign-section" id="campaign" aria-labelledby="campaign-title">
          <div className="campaign-top"><div><p className="eyebrow"><span className="section-index">03 /</span> CAMPAIGN STUDY</p><h2 id="campaign-title">One idea.<br /><em>Many moments.</em></h2></div><p className="section-description">{campaign.context}</p></div>
          <div className="campaign-layout"><div className="campaign-cover"><img src={campaign.cover.src} alt={campaign.cover.alt} loading="lazy" decoding="async" /><span className="concept-badge">Sample presentation</span></div><div className="campaign-details"><p className="eyebrow">{campaign.label}</p><h3>{campaign.title}</h3><p>{campaign.role}</p><div className="campaign-key"><span>FORMAT</span><span>Cover / carousel / reel concept / captions</span></div><div className="campaign-key"><span>STATUS</span><span>Fictional example for presentation</span></div></div></div>
          <div className="campaign-posts"><div className="subheading"><p className="eyebrow">POST SERIES / SAMPLE ASSETS</p><span>01 — 03</span></div><div className="post-grid">{campaign.posts.map((post) => <div className="post-card" key={post.number}><img src={post.image} alt={post.alt} loading="lazy" decoding="async" /><div><span>{post.number} / {post.label}</span>{post.label === 'Reel poster' && <span>Video sample coming soon</span>}</div></div>)}</div></div>
          <div className="caption-block"><div><p className="eyebrow">SAMPLE CAPTIONS</p><h3>Words to carry<br />the feeling.</h3></div><div className="caption-list">{campaign.captions.map((caption, index) => <blockquote key={caption}><span>0{index + 1}</span><p>“{caption}”</p></blockquote>)}</div></div>
        </section>

        <section className="section services-section" id="services" aria-labelledby="services-title"><div className="section-heading"><div><p className="eyebrow"><span className="section-index">04 /</span> WHAT I DO</p><h2 id="services-title">From idea to <em>execution.</em></h2></div><p className="section-description">A practical mix of visual thinking, clear writing, and organized production.</p></div><div className="services-grid">{services.map((service) => <article className="service" key={service.number}><span>{service.number}</span><h3>{service.title}</h3><p>{service.description}</p><span className="service-arrow" aria-hidden="true">↗</span></article>)}</div></section>

        <section className="section about-section" id="about" aria-labelledby="about-title"><div className="about-left"><p className="eyebrow"><span className="section-index">05 /</span> ABOUT KAREN</p><h2 id="about-title">A creative mind.<br /><em>A steady hand.</em></h2><p className="about-lead">{profile.about}</p></div><div className="about-right"><div className="about-initials" aria-hidden="true">KJ<span>.</span></div><h3>Experience & education</h3>{profile.experience.map((item) => <div className="resume-row" key={item.title}><span>{item.title}</span><span>{item.period}</span></div>)}<div className="resume-row"><span>{profile.education}</span><span>Education</span></div><p className="about-note">Résumé details are factual. The concept projects on this site are separate demo presentations.</p></div></section>

        <section className="contact-section" id="contact" aria-labelledby="contact-title"><p className="eyebrow"><span className="section-index">06 /</span> GET IN TOUCH</p><h2 id="contact-title">Have a story<br /><em>in mind?</em></h2><p>Let’s talk about the idea, the details, and what it could become.</p><a className="contact-email" href={`mailto:${profile.contact.email}`}>{profile.contact.email}<Arrow diagonal /></a>{profile.contact.socials.filter((social) => social.url).length > 0 && <div className="socials">{profile.contact.socials.filter((social) => social.url).map((social) => <a href={social.url} target="_blank" rel="noreferrer" key={social.label}>{social.label}<Arrow diagonal /></a>)}</div>}</section>
      </main>
      <footer className="site-footer"><a className="wordmark" href="#top" aria-label="Back to top">K<span>J.</span></a><span>© {new Date().getFullYear()} Karen Joyce Dicang · Demo portfolio</span><a href="#top">Back to top ↑</a></footer>
    </div>
    <ProjectDialog project={activeProject} onClose={() => setActiveProject(null)} />
  </>
}

export default App
