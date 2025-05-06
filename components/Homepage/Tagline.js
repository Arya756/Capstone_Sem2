import Link from 'next/link'
import Image from 'next/image'
import styles from "../../app/styles/tagline.module.css"
export default function tagline() {
  return (
    <section>
      <div className='Tagline-Section'>
        <div className='Tagline-Content'>
          <h1>Never Stay Stuck Again. Instantly Solve Your Math Doubts</h1>
          <p>Connect with top mentors, get solutions fast, and master problems with ease.</p>
          <div className='button'>
            <Link href="#">
            Ask Your First Doubt
            </Link>
            <Link href="#">
            Solve and Earn
            </Link>
          </div>
        </div>
        
        <div>
          <Image/>
        </div>
      </div>
    </section>
  );
}