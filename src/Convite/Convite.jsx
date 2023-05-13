import React from "react";
import "./Convite.css";
// import Header from "../../Components/Header";
// import Footer from "../../Components/Footer";

function Convite (){
    return(
        <>
        {/* <Header /> */}
        <div class="conviteEspecial">

            <h3>
                Buscamos promover a transformação social atráves da educação.
                <br/>
                Contribuímos com a alfabetização digital por meio de capitações realizadas para nossos alunos e aproximando parceiros interessados em nossas causas, oferenendo oportunidades.
            </h3>

            <br/>
            <br/>
            <h3>Entre em contato com a gente</h3>

            <div class="container">
                <p> Nome </p>
                <input type="text" id ="botao"/>
                <p> Email </p>
                <input type="text" id="botao"/>
                <p> Mensagem </p>
                <input type="text" id="botao" class="someclass"/>
                <br/>
                <br/>

                <button id="botao"> Enviar </button>
            </div>
        </div>
        {/* <Footer /> */}
        
        </>
    )
    
}

export default Convite;