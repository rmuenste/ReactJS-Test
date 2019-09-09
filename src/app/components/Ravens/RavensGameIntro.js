import React from "react";

const RavensGameIntro = (props) => {
    return (
        <div className="container-fluid padding">
            <div className="row welcome text-center">
                <div className="col-12">
                    <h1 className="display-4">Rabenvögel</h1>
                    <hr/>
                </div>
                <div className="col-12">
                    <p className="lead">
                      Die bei uns vorkommenden Wildtauben sind die Ringeltaube, die Hohltaube, die Turteltaube und die Türkentaube. Jedoch unterliegen nur die Ringeltaube und in 
                      manchen Bundesländern die Türkentaube dem Jagdrecht. Tauben ernähren sich sich von Grünpflanzen, Sämereien (Roggen, Gerste, Weizen, ...), Beeren, Eicheln oder 
                      Bucheckern. Wildtauben gehen eine Jahresehe ein und führen 2-3 Jahresbruten durch. Die Brutzeit beträgt ca. 2-3 Wochen bzw. 14-17 Tage, wobei sich beide Geschlechter
                      an der Brut beteiligen. Die Jungen werden beginnend mit einem Sekret genannt Kropfmilch gefüttert. Wildtauben, wie die Ringeltaube können erhebliche Schäden im 
                      Gemüsebau verursachen, wie ein Zerhacken und Verkoten der Pflanzen.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default RavensGameIntro;