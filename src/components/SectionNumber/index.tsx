import styles from './styles.module.scss'

interface SectionNumberProps {
  currentNumber: number
}

const SectionNumber = ({ currentNumber }: SectionNumberProps) => {
  return (
    <>
      <div className={styles.SectionNumber__container}>
        <span>0</span>
        <span>{currentNumber}</span>
      </div>
    </>
  )
}

export default SectionNumber
