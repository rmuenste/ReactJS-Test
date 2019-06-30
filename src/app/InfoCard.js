import React from 'react';

class InfoCard extends React.Component {
  constructor() {
    super();
  }
  render() {
    return(
        <div className="card">
        <div className="card-header">
            Gezeiten
        </div>
        <div className="card-body">
            <h5 className="card-title">Spielregeln Level 1</h5>

            <div className="mylist">
                <ul>
                    <li>Zufällige Antworten vorgegeben</li>
                    <li>Wählen Sie den Beginn und</li>
                    <li>Das Ende der Jagdzeit aus</li>
                    <li>Meistern Sie 14 Tierarten</li>
                </ul>
            </div>
            <form>
                <div className="form-group">
                    <label htmlFor="exampleFormControlSelect1">Schwierigkeit</label>
                    <select className="form-control" id="exampleFormControlSelect1">
                    <option>Level 1</option>
                    <option>Level 2</option>
                    <option>Level 3</option>
                    </select>
                </div>
            </form>
            <label htmlFor="progress1">Punktestand</label>
            <div className="progress" id="progress1">
                <div className="progress-bar bg-success" role="progressbar" style={{width: "25%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            <button type="button" className="btn btn-primary btn-block">Start</button>	
        </div>
    </div>
    );
  }
}

export default InfoCard;
