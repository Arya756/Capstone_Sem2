import Link from "next/link"
import styles from "../app/styles/Navbar.module.css"
import Image from "next/image"

const Navbar = () =>{
    return(
        <nav className={styles.navbar}>
            <div className={styles.logo_container}>
            <Image 
            src="/images/mainlogo.png"
            fill
            style={{objectFit:"contain"}}
            />
            </div>
            <div className={styles.links}>
                <Link href="/">Home</Link>
                <Link href="/features">Features</Link>
                <Link href="/questions">Questions</Link>
                <Link href="/contact">Contact us</Link>
            </div>
            <div className={styles.login_cred}>
                <button>Login</button>
                <button>Sign up</button>
            </div>
        </nav>
        
    )
}

export default Navbar