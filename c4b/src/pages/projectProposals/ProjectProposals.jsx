import React, {Component} from 'react';
import './ProjectProposals.css';

class ProjectProposals extends Component {
    render() {
        return(
            <div className="container">
                <div id="start-here" className="row">
                    <div className="thumbnail">
                        <img id="start-here-image" src="https://images.squarespace-cdn.com/content/v1/5ab1bc5412b13f4dc838bc43/1538344653368-Y4C7ADL94E0G3KQ253EC/ke17ZwdGBToddI8pDm48kDHPSfPanjkWqhH6pl6g5ph7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0mwONMR1ELp49Lyc52iWr5dNb1QJw9casjKdtTg1_-y4jz4ptJBmI9gQmbjSQnNGng/IMG_20180923_122602.jpg?format=1500w"></img>
                        <p id="start-here-text">START HERE</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default ProjectProposals;