import { useEffect, useState } from 'react'
import styles from './GroupStandings.module.css'

function GroupStandings() {
   
    const[ classificacao, setClassificacao ] = useState([])
    const[letraSelecionada, setLetraSelecionada] = useState('A')

    useEffect(() => {
        const buscarClassificacao = async() => {
            const response = await fetch('https://raw.githubusercontent.com/edsonmaia/apifakecopa2023/main/classificacao-por-grupos-2023.json')
            const data = await response.json()
            setClassificacao(data)
        }
        buscarClassificacao()
    }, [])
   
    return (
        <>
             <div className={styles.div_select}>
                <select value={letraSelecionada} onChange={(e) => setLetraSelecionada(e.target.value)}>
                    <option value="A">Grupo A</option>
                    <option value="B">Grupo B</option>
                    <option value="C">Grupo C</option>
                    <option value="D">Grupo D</option>
                    <option value="E">Grupo E</option>
                    <option value="F">Grupo F</option>
                    <option value="G">Grupo G</option>
                    <option value="H">Grupo H</option>
                </select>
             </div>
             
             <table className={styles.table}>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Seleção</th>
                        <th>Pontos</th>
                        <th>Vitórias</th>
                        <th>Empates</th>
                        <th>Derrotas</th>
                        <th>Gols Pró</th>
                        <th>Gols Contra</th>
                        <th>Saldo de Gols</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        classificacao.filter( classificacao => classificacao.grupo === letraSelecionada).map( classificacao => (
                            <tr key={classificacao.selecao}>
                                <td>{classificacao.posicao}</td>
                                <td className={styles.esquerda}>{classificacao.selecao}</td>
                                <td>{classificacao.pontos}</td>
                                <td>{classificacao.vitorias}</td>
                                <td>{classificacao.empates}</td>
                                <td>{classificacao.derrotas}</td>
                                <td>{classificacao.gols_pro}</td>
                                <td>{classificacao.gols_contra}</td>
                                <td>{classificacao.saldo_gols}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </>

    )
}
export default GroupStandings