import SkillList from '../../common/SkillList'
import styles from './SkillsStyles.module.css'
import checkMarkDark from '/src/assets/checkmark-dark.svg'
import checkMarkLight from '/src/assets/checkmark-light.svg'
import { useTheme } from '../../common/ThemeContext'

const Skills = () => {
  const { theme, toggleTheme } = useTheme()
  const checkMark = theme === 'light' ? checkMarkLight : checkMarkDark

  return (
    <section id='skills' className={styles.container}>
        <h1 className='sectionTitle'>Skills</h1>
        <div className={styles.skillList}>
            <SkillList src={checkMark} skill='HTML'/>
            <SkillList src={checkMark} skill='CSS'/>
            <SkillList src={checkMark} skill='JavaScript'/>

        </div>
        <hr />
        <div className={styles.skillList}>
            <SkillList src={checkMark} skill='React'/>
            <SkillList src={checkMark} skill='Tailwind CSS'/>
        </div>
        <hr />
        <div className={styles.skillList}>
            <SkillList src={checkMark} skill='Git'/>
            <SkillList src={checkMark} skill='Github'/>
        </div>

    </section>
  )
}

export default Skills