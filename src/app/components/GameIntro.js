
import React from "react";

const GameIntro = (props) => {
    return (
        <div className="container-fluid padding">
            <div className="row welcome text-center">
                <div className="col-12">
                    <h1 className="display-4">Die Jagdzeiten</h1>
                    <hr/>
                </div>
                <div className="col-12">
                    <p className="lead">
                        Wann ist die korrekte Zeit zur Jagd auf eine bestimmte Wildart? Der erfahrene Jäger oder Anwärter weiss, dass dies in §1 der LJZeitVO geregelt ist.
                        Testen Sie hier ihr Wissen über diesen Paragraphen.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default GameIntro;