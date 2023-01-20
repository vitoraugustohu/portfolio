import socialList from './socialList'

import styles from './styles.module.scss'

const SocialLinks = () => {
  return (
    <>
      <nav className={styles.navBar__container}>
        <ul className={styles.navBar__items}>
          {socialList.map((item, index) => (
            <li key={`${item.NAME}-${index}`}>
              <a href={item.LINK}>{item.ICON}</a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  )
}

export default SocialLinks
