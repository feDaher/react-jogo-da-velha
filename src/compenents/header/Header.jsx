import styles from "./Header.module.css"
import Title from "../title/title"
import Subtitle from "../subtitle/subtitle"
import Icon from "../icon/icon"

function Header (){
  return (
    <>
      <div className={styles.header}>
        <Title>Jogo da Velha</Title>
        <Subtitle>Criado por Felipe Daher</Subtitle>
        <div className={styles.icon}>
          <Icon iconName="github" link="https://github.com/feDaher" />
        </div>
      </div>
    </>
  )
}

export default Header