import React from "react";

const SeedsGameIntro = (props) => {
    return (
        <div className="container-fluid padding">
            <div className="row welcome text-center">
                <div className="col-12">
                    <h1 className="display-4">Sämereien</h1>
                    <hr/>
                </div>
                <div className="col-12">
                    <p className="lead">
                    Der Themenbereich Land- und Waldbau umfasst unter anderem auch die Kenntnis bestimmter Nutzpflanzen und des dazugehörigen Saatgutes (auch 
                    Sämereien genannt). Das Identifizieren verschiedener Proben von Sämereien ist häufig ein Bestandteil der mündlichen Prüfung, weshalb dieses 
                    Thema bzw. diese Aufgabe mit einen Beispielen hier geübt werden kann. Die Kenntnis der Nutzpflanzen hilft einem Jäger z.B. bei der Anlage von 
                    Wildäckern zu Hegezwecken. Darüberhinaus gibt es bei den Wildarten bestimmte Präferenzen bezüglich der Äsung. Sind einem Jäger diese bekannt, 
                    so kann dies bei der Bestimmung welche Schänden an Pflanzen von welcher Wildart verursacht werden könnten.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default SeedsGameIntro;