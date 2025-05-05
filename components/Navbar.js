import Link from "next/link"
import styles from "./Navbar.module.css"

const Navbar = () =>{
    return(
    
        <nav className={styles.navbar}>
            <Link href="/">Home</Link>
            <Link href="/features">Features</Link>
            <Link href="/questions">Questions</Link>
            <Link href="/contact">Contact us</Link>
            <button>Login</button>
            <button>Sign up</button>

        </nav>
        
    )
}

export default Navbar