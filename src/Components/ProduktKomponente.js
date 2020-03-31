import React from 'react';
import ProdunktKomponente from './ProduktKomponentestyle.css';



const ProdunktKomponenteFunk = (props) => {
    return (
        <div className="div-ProKom" >
            <figure>
                <img src={props.urlAd} alt></img>
                <figcaption>{props.modell}</figcaption>
            </figure>
            <h3>{props.preis}</h3>
        </div>
    );
}

export default ProdunktKomponenteFunk;