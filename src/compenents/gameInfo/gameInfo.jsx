import Icon from '../icon/icon'
import styles from './GameInfo.module.css'
import Button from '../button/button'

function GameInfo({ currentPlayer, winner, onReset, isDraw }) {
  
  const shouldEnableButton = () => winner !== 0 || isDraw
  /* Essa acima é a versao melhorada/simplificada, dos ifs abaixo, podendo ser feita quando retorna booleano
  true ou false, quando se tem 2 opçoes/condições.
  {
    if (winner !== 0) return true
    if (isDraw !== 0) return true
  }*/
  return (
    <div className={styles.gameInfo}>
      {
        !isDraw && winner === 0 &&
        <>
          <h4>Próximo a jogar:</h4>
          {
            currentPlayer === 1 && <Icon iconName="circle" />
          }
          {
            currentPlayer === -1 && <Icon iconName="x" />
          }
        </>
      }
      {
        !isDraw && winner !== 0 &&
        <>
          <h4>Fim de Jogo! Vencedor:</h4>
          {
            winner === 1 && <Icon iconName="circle" />
          }
          {
            winner === -1 && <Icon iconName="x" />
          }

        </>
      }
      {
        isDraw && <h4>Empate!</h4>
      }
      <Button
        onClick={onReset}
        disabled={!shouldEnableButton()}
      >
        Reiniciar
      </Button>
    </div>
  )
}

export default GameInfo