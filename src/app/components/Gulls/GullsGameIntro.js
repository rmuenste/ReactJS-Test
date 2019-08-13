import React from "react";

const GeeseGameIntro = (props) => {
    return (
        <div className="container-fluid padding">
            <div className="row welcome text-center">
                <div className="col-12">
                    <h1 className="display-4">Möwen</h1>
                    <hr/>
                </div>
                <div className="col-12">
                    <p className="lead">
                        Die Möwen gehören zur Ordnung der Storchenverwandten und bilden dort eine Untergruppe die lateinisch als <strong>Laridae</strong> bezeichnet wird.
                        Die meisten Möwenarten bevorzugen als Lebensraum Meeresküsten, die Lachmöwe ist aber auch an Binnengewässern oder Seen zu finden. Die Möwen sind 
                        Allesfresser, die ihre Nahrung hauptsächlich in Ufernähe suchen. Falls sich in diesem Bereich Wiesen, Äcker oder Müllkippen finden, ist ein hohes 
                        Vorkommen von Möwen sehr wahrscheinlich. Möwen sind Koloniebrüter und leben in einer Jahresehe, in der sich beide Geschlechter an der Brut beteiligen.
                        Die Größe eines Möwengeleges umfaßt 2-3 Eier.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default GeeseGameIntro;