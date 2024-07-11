/* eslint-disable react/prop-types */
import styles from './ExtraInfoComponent.module.css'

function ExtraInfoComponent({ jogo }) {
  return (
    <div className={styles.centralizar}>
      {jogo.prorrogacao === 'Sim' && (
        <div className={styles.centralizar}>
          <span>Prorrogação? {jogo.prorrogacao} | Placar Prorrogação: {jogo.placar_prorrogacao}</span>
        </div>
      )}
      {jogo.penaltis === 'Sim' && (
        <div className={styles.centralizar}>
          <span>Pênaltis? {jogo.penaltis} | Placar Pênaltis: {jogo.placar_penaltis}</span>
        </div>
      )}
    </div>
  )
}

export default ExtraInfoComponent
