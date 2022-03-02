import styles from './Score.module.css'
import Icon from '../icon/icon'

function Score ( {winnerO, winnerX}) {
  return (
    <>
      <h4>Placar:</h4>
      <div className={styles.score}>
        <div className={styles.scoreContent}>
          <Icon iconName="circle" />
          <h2>{winnerO}</h2>
        </div>
        <div className={styles.scoreContent}>
          <Icon iconName="x" />
          <h2>{winnerX}</h2>
        </div>
     </div>
    </>
  )
}

export default Score