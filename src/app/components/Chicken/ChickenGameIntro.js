import React from "react";

const ChickenGameIntro = (props) => {
    return (
        <div className="container-fluid padding">
            <div className="row welcome text-center">
                <div className="col-12">
                    <h1 className="display-4">Wildhühner</h1>
                    <hr/>
                </div>
                <div className="col-12">
                    <p className="lead">
                        Zu den hühnerartigen Vögeln (Galliformes) gehören die Rauhfußhühner, de Feldhühner und die Truthühner. Das sog. Rackelwild ist keine eigene Art, sondern 
                        eine Kreuzung zwischen Auer- und Birkwild. Die in Deutschland vorkommenden Hühnervögel sind mit Ausnahme der Wachtel, die ein Zugvogel ist, alle Standvögel.
                        Als Lebensraum bevorzugen die Feldhühner, wie der Name es vermuten läßt, Felder, Wiesen und Weiden mit Deckungsangebot und die Rauhfußhühner (auch Waldhühner) 
                        eine Waldumgebung. Das Birkwild ist, wie das Alpenschneehuhn im Hochgebirge anzutreffen. Alle Hühnervögel sind Bodenbrüter und die Jungen demzufolge Nestflüchter. 
                        Die Brutzeit bei den Hühnervögel beträgt überlicherweise 3-4 Wochen (21-28T), nur die Wachtel bildet eine Ausnahme mit 17 Tagen. Im Durchschnitt legen die Wildhühner 
                        10 Eier, minimal 5 (Auerwild) und maximal ca. 20 (Rebhuhn). Alle Wildhühner nehmen Sämereien, Knospen und Beeren als Nahrung an, sowie Insekten (eiweissreich), vor allem für Jungvögel.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default ChickenGameIntro;