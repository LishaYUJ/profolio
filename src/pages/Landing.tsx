import React, { useEffect, useRef } from 'react';
import {
  ArrowDownRight,
  ArrowUpRight,
  Code2,
  ContactRound,
  Mail,
} from 'lucide-react';
import events303Cover from '../assets/303-events-cover.png';
import aucklandEyeDashboard from '../assets/auckland-eye-dashboard.png';
import aucklandEyeDashboardMotion from '../assets/auckland-eye-dashboard.gif';
import aucklandEyeMobile from '../assets/auckland-eye-mobile.png';
import chessboardCover from '../assets/chessboard-cover.png';
import sleepyKoalaCover from '../assets/sleepy-koala-cover.png';
import './Landing.css';

type PortfolioItem = {
  index: string;
  title: string;
  organisation: string;
  period: string;
  summary: string;
  tags: string[];
  image?: string;
  href?: string;
  imagePosition?: string;
  imageFit?: 'cover' | 'contain';
  imagePadding?: string;
  coverVariant?: 'auckland-eye';
};

const experience: PortfolioItem[] = [
  {
    index: '01',
    title: 'Web Developer',
    organisation: '303 Events',
    period: 'Dec 2025 - Mar 2026',
    summary:
      'Delivered a production event platform for a paying client, improving event freshness with ISR and building responsive galleries, cards, and API-enriched venue content.',
    tags: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
    image: events303Cover,
    imageFit: 'contain',
    imagePadding: 'clamp(52px, 8vw, 104px)',
    href: 'https://303events.co.nz',
  },
  {
    index: '02',
    title: 'Software Developer Intern',
    organisation: 'Auckland Eye',
    period: 'Nov 2025 - Feb 2026',
    summary:
      'Led frontend development across two interfaces for an intelligent reconciliation system, turning complex business workflows into clear, reusable cross-platform experiences.',
    tags: ['React', 'TypeScript', 'React Native', 'Expo'],
    coverVariant: 'auckland-eye',
  },
];

const earlierExperience = {
  title: 'Event Operations & Coordination',
  organisation: 'International arts and live events',
  period: '2023 - 2024',
  summary:
    'Coordinated performers, production teams, and backstage operations in fast-moving, multicultural environments. This work strengthened the communication, organisation, and adaptability I now bring to software teams.',
};

const projects: PortfolioItem[] = [
  {
    index: '01',
    title: 'Sleepy Koala',
    organisation: 'Full-stack web application',
    period: 'Jul 2026 - Aug 2026',
    summary:
      'A gamified bedtime check-in product with streaks, achievements, time-aware sleep-day logic, secure authentication, and a cloud-deployed React and .NET architecture.',
    tags: ['React', 'C#', 'ASP.NET Core', 'SQLite', 'Azure'],
    image: sleepyKoalaCover,
    imagePosition: 'center',
    href: 'https://msa-sleepy-koala.vercel.app/',
  },
  {
    index: '02',
    title: 'Chessboard Simulation',
    organisation: 'Operating systems project',
    period: '2026',
    summary:
      'A multithreaded C++ chessboard server using mutexes and condition variables to coordinate concurrent actions, matchmaking, move exchange, and game state safely.',
    tags: ['C++', 'Multithreading', 'REST APIs', 'Concurrency'],
    image: chessboardCover,
  },
];

const Reveal: React.FC<React.PropsWithChildren<{ className?: string }>> = ({
  children,
  className = '',
}) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.classList.add('is-visible');
          observer.unobserve(element);
        }
      },
      { threshold: 0.14 },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`portfolio-reveal ${className}`}>
      {children}
    </div>
  );
};

const Cover: React.FC<{ item: PortfolioItem; className?: string }> = ({
  item,
  className = '',
}) => (
  <div className={`portfolio-cover ${item.image || item.coverVariant ? 'has-image' : 'is-empty'} ${item.coverVariant === 'auckland-eye' ? 'portfolio-auckland-cover' : ''} ${className}`}>
    {item.coverVariant === 'auckland-eye' ? (
      <div className="auckland-product-composite">
        <img
          className="auckland-dashboard auckland-dashboard-static"
          src={aucklandEyeDashboard}
          alt="Auckland Eye Lens Tracker web dashboard"
        />
        <img
          className="auckland-dashboard auckland-dashboard-motion"
          src={aucklandEyeDashboardMotion}
          alt=""
          aria-hidden="true"
        />
        <img
          className="auckland-mobile"
          src={aucklandEyeMobile}
          alt="Auckland Eye Lens Tracker mobile application"
        />
      </div>
    ) : item.image ? (
      <img
        src={item.image}
        alt={`${item.title} product preview`}
        style={{
          objectPosition: item.imagePosition,
          objectFit: item.imageFit,
          padding: item.imagePadding,
        }}
      />
    ) : (
      <span className="portfolio-cover-number" aria-hidden="true">
        {item.index}
      </span>
    )}
    <div className="portfolio-cover-meta">
      <span>{item.organisation}</span>
      <span>{item.period}</span>
    </div>
  </div>
);

const ItemLink: React.FC<React.PropsWithChildren<{ item: PortfolioItem; className: string }>> = ({
  item,
  className,
  children,
}) =>
  item.href ? (
    <a className={className} href={item.href} target="_blank" rel="noreferrer">
      {children}
    </a>
  ) : (
    <article className={className}>{children}</article>
  );

export const Landing: React.FC = () => (
  <main className="portfolio-page">
    <nav className="portfolio-nav" aria-label="Portfolio navigation">
      <a className="portfolio-monogram" href="#top" aria-label="Lisha Yujia, back to top">
        LY
      </a>
      <div className="portfolio-nav-links">
        <a href="#experience">Experience</a>
        <a href="#work">Projects</a>
        <a href="mailto:lyuj137@aucklanduni.ac.nz">Contact</a>
      </div>
    </nav>

    <header className="portfolio-hero" id="top">
      <div className="portfolio-orbit portfolio-orbit-one" aria-hidden="true" />
      <div className="portfolio-orbit portfolio-orbit-two" aria-hidden="true" />
      <p className="portfolio-intro">
        Master of Information Technology · Open to Graduate / Junior Software Engineer roles
      </p>
      <h1 aria-label="Lisha Yujia">
        <span className="portfolio-first-name">Lisha</span>
        <span className="portfolio-last-name">Yujia</span>
      </h1>
      <div className="portfolio-hero-bottom">
        <p>
          Full-stack developer building thoughtful digital products through clear
          engineering and close collaboration.
        </p>
        <a className="portfolio-round-link" href="#experience" aria-label="View experience">
          <ArrowDownRight size={25} aria-hidden="true" />
        </a>
      </div>
    </header>

    <section className="portfolio-statement" aria-label="About">
      <Reveal>
        <p>
          With a <span>Master of Information Technology</span> from the University of
          Auckland, I bring engineering discipline, practical full-stack experience,
          and collaborative thinking to user-focused software.
        </p>
      </Reveal>
    </section>

    <section className="portfolio-section portfolio-experience" id="experience">
      <Reveal className="portfolio-section-heading">
        <p>Experience</p>
        <h2>Building with people,<br />not just for them.</h2>
      </Reveal>

      <div className="experience-list">
        {experience.map((item) => (
          <Reveal key={item.title}>
            <ItemLink item={item} className="experience-item">
              <Cover item={item} />
              <div className="experience-copy">
                <div className="experience-title-line">
                  <div>
                    <p>{item.organisation}</p>
                    <h3>{item.title}</h3>
                  </div>
                  {item.href && <ArrowUpRight size={25} aria-hidden="true" />}
                </div>
                <p className="experience-summary">{item.summary}</p>
                <div className="portfolio-tags" aria-label="Technologies and skills">
                  {item.tags.map((tag) => <span key={tag}>{tag}</span>)}
                </div>
              </div>
            </ItemLink>
          </Reveal>
        ))}
      </div>
    </section>

    <section className="portfolio-section portfolio-projects" id="work">
      <Reveal className="portfolio-section-heading portfolio-project-heading">
        <p>Selected projects</p>
        <h2>Ideas made useful.</h2>
      </Reveal>

      <div className="project-grid">
        {projects.map((item, index) => (
          <Reveal key={item.title} className={index === 0 ? 'project-featured' : ''}>
            <ItemLink item={item} className="project-card">
              <Cover item={item} />
              <div className="project-copy">
                <div>
                  <p>{item.organisation}</p>
                  <h3>{item.title}</h3>
                </div>
                <p>{item.summary}</p>
                <div className="project-footer">
                  <div className="portfolio-tags">
                    {item.tags.map((tag) => <span key={tag}>{tag}</span>)}
                  </div>
                  {item.href && <ArrowUpRight size={26} aria-hidden="true" />}
                </div>
              </div>
            </ItemLink>
          </Reveal>
        ))}
      </div>
    </section>

    <section className="portfolio-education">
      <Reveal>
        <p className="portfolio-education-label">Education</p>
        <div className="portfolio-education-row">
          <h2>Master of Information Technology</h2>
          <div>
            <p>University of Auckland</p>
            <span>2024 - 2026</span>
          </div>
        </div>
        <div className="portfolio-education-row">
          <h2>Bachelor of Music Management</h2>
          <div>
            <p>Shanghai Conservatory of Music</p>
            <span>2020 - 2024</span>
          </div>
        </div>
      </Reveal>
    </section>

    <section className="portfolio-earlier" aria-label="Earlier experience">
      <Reveal>
        <p className="portfolio-earlier-label">Earlier experience</p>
        <div className="portfolio-earlier-content">
          <div>
            <p>{earlierExperience.organisation}</p>
            <h2>{earlierExperience.title}</h2>
          </div>
          <div className="portfolio-earlier-copy">
            <span>{earlierExperience.period}</span>
            <p>{earlierExperience.summary}</p>
          </div>
        </div>
      </Reveal>
    </section>

    <footer className="portfolio-footer">
      <Reveal>
        <p>Have a role, project, or idea in mind?</p>
        <a className="portfolio-email" href="mailto:lyuj137@aucklanduni.ac.nz">
          Let&apos;s talk <ArrowUpRight aria-hidden="true" />
        </a>
        <div className="portfolio-footer-bottom">
          <span>© 2026 Lisha Yujia</span>
          <div>
            <a href="https://github.com/LishaYUJ" target="_blank" rel="noreferrer" aria-label="GitHub">
              <Code2 aria-hidden="true" />
            </a>
            <a href="https://www.linkedin.com/in/lisha-y/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <ContactRound aria-hidden="true" />
            </a>
            <a href="mailto:lyuj137@aucklanduni.ac.nz" aria-label="Email">
              <Mail aria-hidden="true" />
            </a>
          </div>
        </div>
      </Reveal>
    </footer>
  </main>
);
