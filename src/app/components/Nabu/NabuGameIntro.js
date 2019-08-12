import React from "react";

const NabuGameIntro = (props) => {
    return (
        <div className="container-fluid padding">
            <div className="row welcome text-center">
                <div className="col-12">
                    <h1 className="display-4">Nabu</h1>
                    <hr/>
                </div>
                <div className="col-12">
                    <p className="lead">
                        Der Naturschutz ist ein Teil des modernen Jagdrechts. An mehreren Stellen bezieht sich das BJG explizit auf Belange des Naturschutzes, z.B. in §21, Absatz 1,
                        Satz 2 wird der Schutz von Tierarten, deren Bestand bedroht erscheint erwähnt. Desweiteren muss der Jäger die Tierarten erkennen können, die unter
                        Naturschutz stehen. Testen Sie hier ihre Fähigkeit Tierarten, die unter Naturschutz stehen, zu identifizieren.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default NabuGameIntro;