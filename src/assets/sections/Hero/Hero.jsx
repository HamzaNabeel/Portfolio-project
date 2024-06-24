import styles from './HeroStyles.module.css'
import heroImg from '/src/assets/myphoto.jpeg'
import sun from '/src/assets/sun.svg'
import moon from '/src/assets/moon.svg'
import twitterLight from '/src/assets/twitter-light.svg'
import githubLight from '/src/assets/github-light.svg'
import linkedinLight from '/src/assets/linkedin-light.svg'
import twitterDark from '/src/assets/twitter-dark.svg'
import githubDark from '/src/assets/github-dark.svg'
import linkedinDark from '/src/assets/linkedin-dark.svg'
import CV from '/src/assets/HAMZA NABEEL-WEB.pdf'
import { useTheme } from '../../common/ThemeContext'
import { useTypewriter, Cursor } from 'react-simple-typewriter'

const Hero = () => {
  const [text] = useTypewriter({
    words: ['Front-end Developer', 'Designer'],
    loop: {},
    typeSpeed: 120,
    deleteSpeed: 80,
  })

  const { theme, toggleTheme } = useTheme()

  const themeIcon = theme === 'light' ? sun : moon
  const twitterIcon = theme === 'light' ? twitterLight : twitterDark
  const githubIcon = theme === 'light' ? githubLight : githubDark
  const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img className={styles.hero} src={heroImg} alt="heroImg" />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color mode icon"
          onClick={toggleTheme}
        />
      </div>

      {/* title of the portfolio project */}
      <div className={styles.info}>
        <h1>
          Hamza <br /> Nabeel
        </h1>
        <h2>
          I'm a{' '}
          <span style={{color: '#44b6f8' }}>{text}</span>
          <span style={{ color: 'red' }}>
            <Cursor/>
          </span>
        </h2>
        <span>
          {/* twitter icon section  */}
          <a href="https://x.com/hamzanabeel01" target="_blank">
            <img src={twitterIcon} alt="Twitter icon" />
          </a>
          {/* Github icon */}
          <a href="https://github.com/HamzaNabeel" target="_blank">
            <img src={githubIcon} alt="github icon" />
          </a>
          {/* Linkedin Icon */}
          <a
            href="https://www.linkedin.com/in/hamza-nabeel-3b542a220/"
            target="_blank"
          >
            <img src={linkedinIcon} alt="Linkedin icon" />
          </a>
        </span>
        <p className={styles.description}>
          With a passion for developing modern react web apps for commercial
          businesses.
        </p>
        <a href={CV} download>
          <button className="hover">Resume</button>
        </a>
      </div>
    </section>
  )
}

export default Hero
