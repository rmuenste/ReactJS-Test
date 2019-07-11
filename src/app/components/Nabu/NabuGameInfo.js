import React, {Component} from "react";

class NabuGameInfo extends Component {
  constructor(props) {
    super();
  }

  toggleGame = () => {

  }

  render() {

    let barValue = 100.0 * 0.25;
    let progressBarValue = barValue + "%";
    let barStyle = "progress-bar bg-danger";
    if ((barValue > 60.0) && (barValue < 80.0)) {
      barStyle = "progress-bar bg-warning";
    }
    if (barValue > 80.0) {
      barStyle = "progress-bar bg-success";
    }

    let buttonText = "Start";

    return(
        <div className="card">
        <div className="card-header">
            Nabu
        </div>
        <div className="card-body">
            <h5 className="card-title">Spielregeln Level 1</h5>

            <div className="mylist">
                <ul>
                    <li>Tierarten unter Naturschutz</li>
                    <li>Zufällige Antworten vorgegeben</li>
                    <li>Identifizieren Sie die Tierart</li>
                    <li>Meistern Sie 27 Tierarten</li>
                </ul>
            </div>
            <form>
                <div className="form-group">
                    <label htmlFor="exampleFormControlSelect1">Schwierigkeit</label>
                    <select className="form-control" id="exampleFormControlSelect1" disabled={true}>
                    <option>Level 1</option>
                    <option>Level 2</option>
                    <option>Level 3</option>
                    </select>
                </div>
            </form>
            <label htmlFor="progress1">Punktestand</label>
            <div className="progress" id="progress1">
                <div className={barStyle} role="progressbar" style={{width: progressBarValue}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            <label htmlFor="progress2">Verbleibende Fragen:</label>
            <h5 className="card-title" id="progress2">27/27</h5>
            <button type="button" className="btn btn-primary btn-block" onClick={this.toggleGame}>{buttonText}</button>	
        </div>
    </div>
    );
  }
}

export default NabuGameInfo;
