
import React from 'react';

class ResultCard extends React.Component {
  constructor() {
    super();
  }
  render() {
    return(
        <div className="card">
        <div className="card-header">
            Übersicht
        </div>
        <div className="card-body">
            <h5 className="card-title">Richtige Antworten:</h5>
            <div className="mylist">
                <ul>
                    <li>27/27</li>
                </ul>
            </div>

            <h5 className="card-title">Benötigte Zeit: </h5>
            <div className="mylist">
                <ul>
                    <li>2 Minuten</li>
                </ul>
            </div>

            <h5 className="card-title">Resultat: </h5>
            <div className="mylist">
                <ul>
                    <li>Bestanden!</li>
                </ul>
            </div>
        </div>
    </div>
    );
  }
}

export default ResultCard;