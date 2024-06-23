import ProjectCard from '../../common/ProjectCard'
import styles from './ProjectsStyles.module.css'
import DiceGame from '/src/assets/dices.png'
import tradeBoard from '/src/assets/trade-board.png'
import currencyConverter from '/src/assets/currencyConvorter.png'
import QuickVideoCall from '/src/assets/QuickVideoCall.png'

const Projects = () => {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        {/* first project */}
        <ProjectCard
          src={tradeBoard}
          link="https://trade-board-web.netlify.app/"
          h3="Trade Board"
          p="React , Chakra UI"
        />
        <ProjectCard
          src={DiceGame}
          link="https://dicegamehamza.netlify.app/"
          h3="Dice Game"
          p="React, styled components"
        />
        <ProjectCard
          src={currencyConverter}
          link="https://benevolent-profiterole-e8d540.netlify.app/"
          h3="Currency Converter"
          p="React, tailwind CSS, rest API"
        />
        <ProjectCard
          src={QuickVideoCall}
          link="https://quick-video-call.netlify.app/"
          h3="Quick VideoCall"
          p="React, vanilla CSS, ZegoCloud"
        />
      </div>
    </section>
  )
}

export default Projects
