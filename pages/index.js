import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

const services = [
  {
    name: 'Platinum Detail',
    price: 'Starting at $399',
    img: 'https://static.wixstatic.com/media/649cd3_51cde3c67a8e47b79b9ff87d7a1d1c4f~mv2.jpg/v1/fill/w_800,h_450,al_c,q_85,enc_auto/649cd3_51cde3c67a8e47b79b9ff87d7a1d1c4f~mv2.jpg',
  },
  {
    name: 'Classic Detail',
    price: 'Starting at $199',
    img: 'https://static.wixstatic.com/media/649cd3_5c86fda9bb324ac99801a76878353fff~mv2.jpg/v1/fill/w_800,h_450,al_c,q_85,enc_auto/649cd3_5c86fda9bb324ac99801a76878353fff~mv2.jpg',
  },
  {
    name: 'Platinum Interior',
    price: 'Starting at $299',
    img: 'https://static.wixstatic.com/media/649cd3_02764d38ddb84518856084e2c77dd60e~mv2.jpg/v1/fill/w_600,h_400,al_c,q_85,enc_auto/649cd3_02764d38ddb84518856084e2c77dd60e~mv2.jpg',
  },
  {
    name: 'Classic Interior',
    price: 'Starting at $149',
    img: 'https://static.wixstatic.com/media/649cd3_397a509c954d44098385cfa43f4fc09b~mv2.jpg/v1/fill/w_600,h_400,al_c,q_85,enc_auto/649cd3_397a509c954d44098385cfa43f4fc09b~mv2.jpg',
  },
  {
    name: 'Exterior Detail',
    price: 'Starting at $149',
    img: 'https://static.wixstatic.com/media/649cd3_84c6a6e1378343aba33577c8a76c3dea~mv2.png/v1/fill/w_600,h_400,al_c,q_85,enc_auto/649cd3_84c6a6e1378343aba33577c8a76c3dea~mv2.png',
  },
];

export default function Home() {
  return (
    <>
      <Head>
        <title>Easy Clean ACK | Mobile Auto Detailing | Nantucket, MA</title>
      </Head>

      {/* ── HERO ── */}
      <section className={styles.hero}>
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <img
            src="https://static.wixstatic.com/media/649cd3_0f6f93a78a6145aebc5e9a117e3b520c~mv2.png/v1/fill/w_400,h_400,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/649cd3_0f6f93a78a6145aebc5e9a117e3b520c~mv2.png"
            alt="Easy Clean ACK Logo"
            className={styles.heroLogo}
          />
          <h1 className={styles.heroTitle}>Easy Clean ACK</h1>
          <p className={styles.heroSub}>Nantucket's Finest Mobile Auto Detailers</p>
          <div className={styles.heroCta}>
            <Link href="/services" className="btn btn-gold">View Services</Link>
            <Link href="/contact" className="btn btn-outline">Book Now</Link>
          </div>
        </div>
        <div className={styles.heroScroll}>
          <span>Scroll</span>
          <div className={styles.scrollLine} />
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section className={styles.about}>
        <div className={styles.aboutInner}>
          <div className={styles.aboutText}>
            <div className="section-label">About Us</div>
            <h2 className="section-title">Passion for Cars,<br />Pride in Every Clean</h2>
            <p>After countless summers spent with painful amounts of pet hair and sand stuck in every crevice of our cars, two car lovers started Easy Clean. Since 2021 Easy Clean ACK has been proud to boast our 100% customer satisfaction guarantee, as well as offering a highly professional clean.</p>
            <Link href="/contact" className="btn btn-gold" style={{ marginTop: '2rem' }}>Get In Touch</Link>
          </div>
          <div className={styles.aboutBadge}>
            <div className={styles.badge}>
              <span className={styles.badgeYear}>2021</span>
              <span className={styles.badgeText}>Founded on<br />Nantucket</span>
            </div>
            <div className={styles.badge}>
              <span className={styles.badgeYear}>100%</span>
              <span className={styles.badgeText}>Customer<br />Satisfaction</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className={styles.services}>
        <div className={styles.servicesInner}>
          <div className={styles.servicesHeader}>
            <div className="section-label">Our Work</div>
            <h2 className="section-title light">Detailing Packages</h2>
            <Link href="/services" className="btn btn-outline" style={{ marginTop: '1.5rem' }}>
              See All Services
            </Link>
          </div>
          <div className={styles.servicesGrid}>
            {services.map(s => (
              <Link href="/services" key={s.name} className={styles.serviceCard}>
                <div className={styles.serviceImg} style={{ backgroundImage: `url(${s.img})` }} />
                <div className={styles.serviceInfo}>
                  <h3>{s.name}</h3>
                  <span>{s.price}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── MEMBERSHIP TEASER ── */}
      <section className={styles.membership}>
        <div className={styles.membershipInner}>
          <div className={styles.membershipText}>
            <div className="section-label">New — Subscription Plans</div>
            <h2 className="section-title light">Always Spotless,<br />Never Stressed</h2>
            <p>Lock in recurring details at a better rate. Two tiers, no contracts, cancel anytime.</p>
            <div className={styles.membershipCards}>
              <div className={styles.miniCard}>
                <span className={styles.miniPrice}>$149<small>/mo</small></span>
                <span className={styles.miniName}>Maintenance</span>
                <span className={styles.miniCadence}>Classic Detail · Monthly</span>
              </div>
              <div className={`${styles.miniCard} ${styles.miniCardGold}`}>
                <span className={styles.miniPrice}>$349<small>/mo</small></span>
                <span className={styles.miniName}>Platinum Maintenance</span>
                <span className={styles.miniCadence}>Full Detail · Every 2 Weeks</span>
              </div>
            </div>
            <Link href="/membership" className="btn btn-gold" style={{ marginTop: '2rem' }}>
              See Membership Plans →
            </Link>
          </div>
        </div>
      </section>

      {/* ── OUR STORY ── */}
      <section className={styles.story}>
        <div className={styles.storyInner}>
          <div className={styles.storyText}>
            <div className="section-label">Our Story</div>
            <h2 className="section-title">Giving Back to the Community</h2>
            <p>In 2021 two summer camp counselors with years of experience working on the island, and a passion for cars founded Easy Clean. Through trial and error, we've found the best and most effective ways to deliver the most efficient high-quality clean for our clients. We take our time to ensure every car we detail is to the best of our ability.</p>
            <p style={{ marginTop: '1.25rem' }}>This year we have decided to donate 10% of our profits to the <strong>Pan-Mass Challenge</strong> — a two-day 200 mile bike race from Sturbridge to Provincetown that has raised over a billion dollars for the Dana Farber Cancer Institute.</p>
            <a
              href="https://profile.pmc.org/TG0259"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-gold"
              style={{ marginTop: '2rem' }}
            >
              Support the Cause
            </a>
          </div>
          <div className={styles.storyImage}>
            <img
              src="https://static.wixstatic.com/media/11062b_072948185e7345dd91b126e009855d05~mv2_d_5963_3975_s_4_2.jpg/v1/fill/w_700,h_500,al_c,q_80,enc_avif,quality_auto/11062b_072948185e7345dd91b126e009855d05~mv2_d_5963_3975_s_4_2.jpg"
              alt="Nantucket Ocean"
            />
          </div>
        </div>
      </section>
    </>
  );
}
