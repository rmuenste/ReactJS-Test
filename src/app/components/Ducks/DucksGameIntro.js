import React from "react";

const DucksGameIntro = (props) => {
    return (
        <div className="container-fluid padding">
            <div className="row welcome text-center">
                <div className="col-12">
                    <h1 className="display-4">Enten</h1>
                    <hr/>
                </div>
                <div className="col-12">
                    <p className="lead">
                        Die Wildenten sind eine artenreiche Gruppe in der Familie des Federwilds. In NRW kommen die Wildenten als Stand- Strich- oder Zugvögel vor, so dass
                        einige dementsprechend hier überwintern, während sich andere Unterarten in wärmere Gegenden zurückziehen. Die Erpel tragen von Oktober bis Mitte Mai ein 
                        Prachtkleid, an dem sich die verschiedenen Arten aus der Familie der Wildenten unterscheiden lassen. In diesem Modul beschäftigen wir uns mit der Unterscheidung
                        der verschiedenen Entenarten und einigen ihrer grundlegenden Eigenschaften.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default DucksGameIntro;