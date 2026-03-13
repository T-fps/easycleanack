import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Membership.module.css';

const plans = [
  {
    id: 'maintenance',
    name: 'Maintenance',
    price: '$149',
    period: '/mo',
    cadence: 'One detail per month',
    tagline: 'Keep it clean, all season long.',
    color: 'blue',
    includes: [
      'Full Car Vacuum',
      'Mats Cleaned',
      'Dashboard & Compartment Clean',
      'Leather Protectant',
      'Invisible Glass Windows',
      'Pre Rinse · Soap & Wash',
      'Dry with Microfiber Towels',
      'Tire Clean & Shine',
    ],
    perks: [
      'Priority scheduling',
      'Free pet hair touch-up (1x/yr)',
      'Cancel anytime',
    ],
    savings: 'Save $49 vs. one-time Classic Detail + Exterior ($198 value)',
    cta: 'Get Started',
  },
  {
    id: 'platinum',
    name: 'Platinum Maintenance',
    price: '$349',
    period: '/mo',
    cadence: 'Full detail every 2 weeks',
    tagline: 'The ultimate care for your investment.',
    color: 'gold',
    popular: true,
    includes: [
      'Air Compressor Blowout',
      'Steam & Vacuum Clean',
      'Carpet & Felt Shampoo',
      'Interior Wipe Down & Dashboard Restored',
      'Full Compartment Clean',
      'Leather Protectant & Plastic Trim Restorant',
      'Invisible Glass Windows',
      'Pre Rinse · Soap & Wash · Conditioner',
      'Wheel & Tire Clean/Shine',
      'Dry with Microfiber Towels',
    ],
    perks: [
      'Priority scheduling — first available slot',
      'One complimentary ceramic wax per season ($35 value)',
      'Pet hair removal included (up to 1x/mo)',
      'Third-row cleaning included',
      'Cancel anytime',
    ],
    savings: 'Save $449/mo vs. two one-time Platinum Details ($798 value)',
    cta: 'Get Started',
  },
];

function CheckIcon({ gold }) {
  return (
    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" style={{ flexShrink: 0, marginTop: '2px' }}>
      <circle cx="7.5" cy="7.5" r="7.5" fill={gold ? 'rgba(200,168,75,0.18)' : 'rgba(30,77,140,0.15)'} />
      <path d="M4.5 7.5l2.2 2.2 3.8-4" stroke={gold ? '#c8a84b' : '#2a6ab5'} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function StarIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 13 13" fill="var(--gold)" style={{ flexShrink: 0 }}>
      <path d="M6.5 1l1.545 3.13 3.455.5-2.5 2.435.59 3.435L6.5 8.885 3.91 10.5l.59-3.435L2 4.63l3.455-.5z" />
    </svg>
  );
}

export default function Membership() {
  return (
    <>
      <Head>
        <title>Membership Plans | Easy Clean ACK</title>
      </Head>

      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <div className="section-label">Subscription Plans</div>
          <h1 className="section-title light">Always Spotless,<br />Never Stressed</h1>
          <p>Skip the one-time booking hassle. Lock in recurring details at a better rate — we handle the rest.</p>
        </div>
      </section>

      {/* VALUE STRIP */}
      <div className={styles.valueStrip}>
        <div className={styles.valueItem}>
          <span className={styles.valueNum}>2x</span>
          <span>Better value than one-time bookings</span>
        </div>
        <div className={styles.valueDivider} />
        <div className={styles.valueItem}>
          <span className={styles.valueNum}>0</span>
          <span>Hassle — we come to you</span>
        </div>
        <div className={styles.valueDivider} />
        <div className={styles.valueItem}>
          <span className={styles.valueNum}>∞</span>
          <span>Cancel anytime, no contracts</span>
        </div>
      </div>

      {/* PLANS */}
      <section className={styles.plans}>
        <div className={styles.plansInner}>
          {plans.map(plan => (
            <div
              key={plan.id}
              className={`${styles.card} ${plan.popular ? styles.popular : ''}`}
            >
              {plan.popular && (
                <div className={styles.popularBadge}>⭐ Most Popular</div>
              )}

              <div className={styles.cardTop}>
                <div className={styles.planName}>{plan.name}</div>
                <div className={styles.priceLine}>
                  <span className={styles.price}>{plan.price}</span>
                  <span className={styles.period}>{plan.period}</span>
                </div>
                <div className={styles.cadence}>{plan.cadence}</div>
                <p className={styles.tagline}>{plan.tagline}</p>
              </div>

              <div className={styles.savings}>
                <span>💰 {plan.savings}</span>
              </div>

              <div className={styles.section}>
                <div className={styles.sectionLabel}>What's Included</div>
                <ul className={styles.list}>
                  {plan.includes.map(item => (
                    <li key={item}>
                      <CheckIcon gold={plan.popular} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className={styles.section}>
                <div className={styles.sectionLabel}>Member Perks</div>
                <ul className={styles.list}>
                  {plan.perks.map(perk => (
                    <li key={perk}>
                      <StarIcon />
                      <span>{perk}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                href="/contact"
                className={plan.popular ? `btn btn-gold ${styles.cta}` : `${styles.btnOutlineDark} ${styles.cta}`}
              >
                {plan.cta} →
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className={styles.faq}>
        <div className={styles.faqInner}>
          <div className="section-label">Questions</div>
          <h2 className="section-title">How It Works</h2>
          <div className={styles.faqGrid}>
            {[
              {
                q: 'How do I get scheduled?',
                a: 'After signing up via the contact form, we\'ll reach out to set your recurring schedule. We lock in your preferred day and time so it repeats automatically.',
              },
              {
                q: 'Can I pause or cancel?',
                a: 'Absolutely. No contracts, no lock-ins. Cancel or pause anytime with 48 hours notice before your next scheduled detail.',
              },
              {
                q: 'What if I need to reschedule?',
                a: 'Just text or call us. Members get priority rebooking — we\'ll find the next available slot that works for you.',
              },
              {
                q: 'Is the Platinum plan really every 2 weeks?',
                a: 'Yes — that\'s 26 full Platinum Details per year. At $349/mo you\'re paying roughly $162 per detail vs. $399 one-time. It\'s the best value we offer.',
              },
              {
                q: 'Do I need to be home?',
                a: 'Nope. As long as we can access your vehicle, we\'ll take care of everything and let you know when it\'s done.',
              },
              {
                q: 'Is there a commitment period?',
                a: 'We ask for one month to get started (to cover scheduling and supply costs), then it\'s completely flexible after that.',
              },
            ].map(({ q, a }) => (
              <div key={q} className={styles.faqItem}>
                <h3>{q}</h3>
                <p>{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className={styles.banner}>
        <div className={styles.bannerInner}>
          <h2>Ready to never think about detailing again?</h2>
          <p>Reach out and we'll get your first appointment on the books.</p>
          <Link href="/contact" className="btn btn-gold">Contact Us to Subscribe</Link>
        </div>
      </section>
    </>
  );
}
