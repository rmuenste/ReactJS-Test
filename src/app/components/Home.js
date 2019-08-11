import React from "react";

let listStyle = {
listStyleType: 'none'
};

let listItemStyle = {
fontWeight: 'bold'
};

function Home() {
    return (
        <div className="container-fluid padding">
            <div className="row welcome text-center">
                <div className="col-12">
                    <h1 className="display-4">E-Learning für den Jagdschein</h1>
                    <hr/>
                </div>
                <div className="col-12">
                    <p className="lead">
                        Für den Erhalt des Jagdscheins müssen die Anwärter eine Reihe von Prüfungen bestehen, in denen Wissen über verschiedene Themengebiete abgefragt wird.
                        Die in der schriftlichen und mündlichen Prüfung behandelten Hauptthemengebiete sind:
                    </p>
                    <ul className="lead" style={listStyle}>
                        <li style={listItemStyle}>Kenntnis der Tierarten, Wildbiologie, Wildhege, Naturschutz</li>
                        <li style={listItemStyle}>Jagdbetrieb, Wildkrankheiten, Land- und Waldbau</li>
                        <li style={listItemStyle}>Waffenkunde</li>
                        <li style={listItemStyle}>Jagdrecht, Waffenrecht, Tierschutzrecht und Naturschutzgesetz</li>
                    </ul>
                    <p className="lead">
                        Auf den folgenden Seite finden Sie einige Web-Applikationen mit denen Sie in "spielerischer" Form sich dieses Wissen aneignen können oder 
                        ihr vorhandenes Wissen auf die Probe stellen können.
                    </p>
                </div>
            </div>
        </div>
    );

}

export default Home;