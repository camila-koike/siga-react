import "./Tabuleiro.css"
import Celula from "../Celula/Celula"
import { useState } from "react"

export default function Tabuleiro() {
    //celulas = document.querySelectorAll(".celula");
    const [celulas, setCelulas] = useState(['xis', 'xis', 'circulo', null, 'circulo', null, null, null, null])
    const [vezX, setVezX] = useState(true);

    

    
    return (
        <>
        <div className="tabuleiro">
            <Celula nomeClasse={celulas[0]} vezDoXis={vezX} onClick={function () { joga(0); }} />
            <Celula nomeClasse={celulas[1]} vezDoXis={vezX} onClick={function () { joga(1); }} />
            <Celula nomeClasse={celulas[2]} vezDoXis={vezX} onClick={function () { joga(2); }} />
            <Celula nomeClasse={celulas[3]} vezDoXis={vezX} onClick={function () { joga(3); }} />
            <Celula nomeClasse={celulas[4]} vezDoXis={vezX} onClick={function () { joga(4); }} />
            <Celula nomeClasse={celulas[5]} vezDoXis={vezX} onClick={function () { joga(5); }} />
            <Celula nomeClasse={celulas[6]} vezDoXis={vezX} onClick={function () { joga(6); }} />
            <Celula nomeClasse={celulas[7]} vezDoXis={vezX} onClick={function () { joga(7); }} />
            <Celula nomeClasse={celulas[8]} vezDoXis={vezX} onClick={function () { joga(8); }} />
        </div>
        </>
    )
}
