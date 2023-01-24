import styles from './styles.module.scss'

interface SectionTitleProps {
    title:string
}

const SectionTitle = ({title}: SectionTitleProps) => {
    return <h3 className={styles.sectionTitle}>{title}</h3>
}

export default SectionTitle