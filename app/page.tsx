'use client'

import { useState } from 'react'
import styles from './page.module.css'

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <div className={styles.logo}>
            <img src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/690d267db138e84a9f5be3b0/5dee4f139_logo.png" alt="Fashionista" />
            <span>Fashionista</span>
          </div>
          <nav className={`${styles.nav} ${menuOpen ? styles.navOpen : ''}`}>
            <a href="#home" className={styles.active}>Home</a>
            <a href="#shop">Shop</a>
            <a href="#collection">Collection</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </nav>
          <div className={styles.headerActions}>
            <button className={styles.iconBtn}>🔍</button>
            <button className={styles.iconBtn}>🛒</button>
            <button className={styles.iconBtn}>👤</button>
            <button className={styles.menuBtn} onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>
      </header>

      <main className={styles.main}>
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <h1>Welcome to Fashionista</h1>
            <p>Discover the latest trends in fashion</p>
            <button className={styles.ctaBtn}>Shop Now</button>
          </div>
        </section>

        <section className={styles.featured}>
          <h2>Featured Collection</h2>
          <div className={styles.grid}>
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className={styles.card}>
                <div className={styles.cardImage}>
                  <div className={styles.placeholder}>
                    <span>👗</span>
                  </div>
                </div>
                <div className={styles.cardContent}>
                  <h3>Fashion Item {item}</h3>
                  <p className={styles.price}>${(item * 25 + 50)}.00</p>
                  <button className={styles.addToCart}>Add to Cart</button>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.categories}>
          <h2>Shop by Category</h2>
          <div className={styles.categoryGrid}>
            <div className={styles.category}>
              <div className={styles.categoryIcon}>👚</div>
              <h3>Tops</h3>
            </div>
            <div className={styles.category}>
              <div className={styles.categoryIcon}>👖</div>
              <h3>Bottoms</h3>
            </div>
            <div className={styles.category}>
              <div className={styles.categoryIcon}>👗</div>
              <h3>Dresses</h3>
            </div>
            <div className={styles.category}>
              <div className={styles.categoryIcon}>👠</div>
              <h3>Shoes</h3>
            </div>
            <div className={styles.category}>
              <div className={styles.categoryIcon}>👜</div>
              <h3>Accessories</h3>
            </div>
            <div className={styles.category}>
              <div className={styles.categoryIcon}>🧥</div>
              <h3>Outerwear</h3>
            </div>
          </div>
        </section>

        <section className={styles.about}>
          <div className={styles.aboutContent}>
            <h2>About Negin Boutique</h2>
            <p>
              Welcome to Fashionista, your premier destination for the latest fashion trends.
              We curate the finest collection of clothing, accessories, and footwear to help you
              express your unique style. Our commitment to quality and customer satisfaction
              makes us the boutique of choice for fashion-forward individuals.
            </p>
            <button className={styles.learnMore}>Learn More</button>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.footerSection}>
            <h4>Fashionista</h4>
            <p>Your destination for premium fashion</p>
          </div>
          <div className={styles.footerSection}>
            <h4>Quick Links</h4>
            <a href="#shop">Shop</a>
            <a href="#collection">Collection</a>
            <a href="#about">About Us</a>
          </div>
          <div className={styles.footerSection}>
            <h4>Customer Service</h4>
            <a href="#contact">Contact</a>
            <a href="#shipping">Shipping Info</a>
            <a href="#returns">Returns</a>
          </div>
          <div className={styles.footerSection}>
            <h4>Follow Us</h4>
            <div className={styles.social}>
              <a href="#facebook">Facebook</a>
              <a href="#instagram">Instagram</a>
              <a href="#twitter">Twitter</a>
            </div>
          </div>
        </div>
        <div className={styles.footerBottom}>
          <p>&copy; 2024 Fashionista. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
