import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Services.module.css';

const packages = [
  {
    name: 'Platinum Full Detail',
    price: '$399',
    highlight: true,
    img: 'https://static.wixstatic.com/media/649cd3_51cde3c67a8e47b79b9ff87d7a1d1c4f~mv2.jpg/v1/fill/w_800,h_500,al_c,q_85,enc_auto/649cd3_51cde3c67a8e47b79b9ff87d7a1d1c4f~mv2.jpg',
    interior: [
      'Air Compressor Blowout',
      'Steam & Vacuum Clean',
      'Carpet & Felt Shampoo',
      'Interior Wipe Down',
      'Dashboard Restored',
      'Full Compartment Clean',
      'Invisible Glass Windows',
      'Leather Protectant',
      'Plastic Trim Restorant',
    ],
    exterior: [
      'Pre Rinse',
      'Soap & Wash',
      'Conditioner',
      'Invisible Glass Windows',
      'Wheel & Tire Clean/Shine',
      'Dry with Microfiber Towels',
    ],
    addons: ['Ceramic Wax Coating +$35', 'Pet Hair Removal +$100', 'Third Row +$75'],
  },
  {
    name: 'Classic Full Detail',
    price: '$199',
    img: 'https://static.wixstatic.com/media/649cd3_5c86fda9bb324ac99801a76878353fff~mv2.jpg/v1/fill/w_800,h_500,al_c,q_85,enc_auto/649cd3_5c86fda9bb324ac99801a76878353fff~mv2.jpg',
    interior: [
      'Full Car Vacuum',
      'Mats Cleaned',
      'Compartment Clean',
      'Dashboard Clean',
      'Leather Protectant',
      'Invisible Glass Windows',
    ],
    exterior: [
      'Pre Rinse',
      'Soap & Wash',
      'Dry with Microfiber Towels',
    ],
    addons: ['Pet Hair +$75', 'Third Row +$50'],
  },
  {
    name: 'Platinum Interior',
    price: '$299',
    img: 'https://static.wixstatic.com/media/649cd3_02764d38ddb84518856084e2c77dd60e~mv2.jpg/v1/fill/w_800,h_500,al_c,q_85,enc_auto/649cd3_02764d38ddb84518856084e2c77dd60e~mv2.jpg',
    interior: [
      'Air Compressor Blowout',
      'Steam & Vacuum Clean',
      'Carpet & Felt Shampoo',
      'Interior Wipe Down',
      'Dashboard Restored',
      'Full Compartment Clean',
      'Invisible Glass Windows',
      'Leather Protectant',
      'Plastic Trim Restorant',
    ],
    addons: ['Pet Hair Removal +$100', 'Third Row +$75'],
  },
  {
    name: 'Classic Interior',
    price: '$149',
    img: 'https://static.wixstatic.com/media/649cd3_397a509c954d44098385cfa43f4fc09b~mv2.jpg/v1/fill/w_800,h_500,al_c,q_85,enc_auto/649cd3_397a509c954d44098385cfa43f4fc09b~mv2.jpg',
    interior: [
      'Full Car Vacuum',
      'Mats Cleaned',
      'Compartment Clean',
      'Dashboard Clean',
      'Leather Protectant',
      'Invisible Glass Windows',
    ],
    addons: ['Third Row +$50'],
  },
  {
    name: 'Exterior Detail',
    price: '$149',
    img: 'https://static.wixstatic.com/media/649cd3_84c6a6e1378343aba33577c8a76c3dea~mv2.png/v1/fill/w_800,h_500,al_c,q_85,enc_auto/649cd3_84c6a6e1378343aba33577c8a76c3dea~mv2.png',
    exterior: [
      'Pre Rinse',
      'Soap & Wash',
      'Conditioner',
      'Invisible Glass Windows',
      'Tire Clean and Shine',
      'Dry with Microfiber Towels',
    ],
    addons: ['Ceramic Wax Coating +$35'],
  },
];

function CheckIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{ flexShrink: 0, marginTop: '2px' }}>
      <circle cx="7" cy="7" r="7" fill="var(--gold)" fillOpacity="0.15" />
      <path d="M4 7l2 2 4-4" stroke="var(--gold)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Services() {
  return (
    <>
      <Head>
        <title>Services | Easy Clean ACK</title>
      </Head>

      {/* PAGE HEADER */}
      <section className={styles.pageHeader}>
        <div className={styles.pageHeaderInner}>
          <div className="section-label">What We Offer</div>
          <h1 className="section-title light">Our Services</h1>
          <p>Professional mobile auto detailing — we come to you anywhere on Nantucket.</p>
        </div>
      </section>

      {/* PACKAGES */}
      <section className={styles.packages}>
        <div className={styles.packagesInner}>
          {packages.map(pkg => (
            <div key={pkg.name} className={`${styles.card} ${pkg.highlight ? styles.highlight : ''}`}>
              {pkg.highlight && <div className={styles.badge}>Most Popular</div>}
              <div
                className={styles.cardImg}
                style={{ backgroundImage: `url(${pkg.img})` }}
              />
              <div className={styles.cardBody}>
                <div className={styles.cardHeader}>
                  <h2>{pkg.name}</h2>
                  <span className={styles.price}>Starting at {pkg.price}</span>
                </div>

                {pkg.interior && (
                  <div className={styles.listSection}>
                    {pkg.exterior && <div className={styles.listLabel}>Interior</div>}
                    <ul className={styles.list}>
                      {pkg.interior.map(item => (
                        <li key={item}><CheckIcon /> {item}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {pkg.exterior && (
                  <div className={styles.listSection}>
                    {pkg.interior && <div className={styles.listLabel}>Exterior</div>}
                    <ul className={styles.list}>
                      {pkg.exterior.map(item => (
                        <li key={item}><CheckIcon /> {item}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {pkg.addons && (
                  <div className={styles.addons}>
                    <div className={styles.listLabel}>Add-Ons</div>
                    {pkg.addons.map(a => (
                      <span key={a} className={styles.addon}>{a}</span>
                    ))}
                  </div>
                )}

                <Link href="/contact" className="btn btn-gold" style={{ marginTop: '1.5rem', display: 'inline-block' }}>
                  Book This Package
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* GUARANTEE */}
      <section className={styles.guarantee}>
        <div className={styles.guaranteeInner}>
          <img
            src="https://static.wixstatic.com/media/11062b_072948185e7345dd91b126e009855d05~mv2_d_5963_3975_s_4_2.jpg/v1/fill/w_700,h_500,al_c,q_80,enc_avif,quality_auto/11062b_072948185e7345dd91b126e009855d05~mv2_d_5963_3975_s_4_2.jpg"
            alt="Ocean view"
            className={styles.guaranteeImg}
          />
          <div className={styles.guaranteeText}>
            <div className="section-label">Our Guarantee</div>
            <h2 className="section-title">Quality Over Quantity</h2>
            <p>At Easy Clean, we believe in quality over quantity. We take our time with each and every clean and our detailers will not leave until the customer is completely satisfied with their service.</p>
          </div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className={styles.testimonial}>
        <div className={styles.testimonialInner}>
          <div className="section-label">What Our Clients Say</div>
          <blockquote className={styles.quote}>
            "My work van hasn't looked this great since the day I bought it! They got paint stains from years ago out of my seats. The ceramic wax is definitely worth it. Great Job!"
          </blockquote>
          <div className={styles.author}>
            <img
              src="https://static.wixstatic.com/media/649cd3_8ffa7b5f1b0a4de78af1263922e816ac~mv2.png/v1/fill/w_100,h_100,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/IMG_3602_PNG.png"
              alt="Dean"
            />
            <span>— Dean</span>
          </div>
        </div>
      </section>
    </>
  );
}
