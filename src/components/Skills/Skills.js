import uniqid from 'uniqid'
import { skills } from '../../portfolio'
import './Skills.css'

const Skills = () => {
  if (!skills.length) return null

  return (
    <section className='section skills' id='skills'>
      <h2 className='section__title'>Skills</h2>
      <ul className='skills__list'>
        {skills.map((skill) => (
          <li key={uniqid()} className='skills__list-item btn--plain'>
            <img src={skill.icon} alt={skill.name} className='skills__icon' />
            <span className='skills__name'>{skill.name}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Skills
