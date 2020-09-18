import React from 'react'
import styles from './headerStyle.module.css'
import logo from './Logo.png'
import userIcon from './userIcon.png'

const Header = () => {
  return (
    <header className={styles.header}>

          <div className={styles.headerTitle}>
            <img src={logo} alt=""/>
            <h1 className={styles.headerTitleNameApp}>The best planner ever</h1>
          </div>  

          <div className={styles.headerInfo}>

            <div>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path className={styles.headerInfoBell} d="M10.8667 5C10.8667 4.44772 11.3144 4 11.8667 4H12.1333C12.6856 4 13.1333 4.44772 13.1333 5V5.94346C15.7591 6.49172 17.75 8.93342 17.75 11.8099V15.3653C17.75 16.5503 18.8573 16.6244 18.8573 16.6244L19.2581 16.7315C19.6956 16.8484 20 17.2448 20 17.6976V18.5577C20 18.7786 19.8209 18.9577 19.6 18.9577H4.4C4.17909 18.9577 4 18.7786 4 18.5577V17.6976C4 17.2448 4.30437 16.8484 4.74192 16.7315L5.14275 16.6244C6.28575 16.6244 6.25 15.3653 6.25 15.3653L6.28675 11.6987C6.28675 8.97622 8.2595 6.52316 10.8667 5.95291V5ZM14.4286 19.6297C14.4286 20.9259 13.3425 22 12 22C10.6575 22 9.57139 20.9259 9.57139 19.6297H14.4286Z" fill="#747E8A"/>
              </svg>
            </div>
            <h2 className={styles.headerInfoName}>User</h2>
            <img className={styles.PersonInfo_Photo_thumb} src={userIcon}/>

          </div>

    </header>
  )
}
export default Header
