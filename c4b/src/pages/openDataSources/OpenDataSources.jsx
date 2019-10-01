import React, {Component} from 'react';
import './OpenDataSources.css'

class OpenDataSources extends Component {

    render() {
        return(
            <div className="container">
                <div id="open-data-sources" className="row">
                    <h4 id="open-data-sources-header"> OPEN DATA SOURCES</h4>
                    <p id="open-data-sources-para"> 
                        Open data plays a crucial part in Code for Boulder. 
                        Without open data, there would be no open projects! 
                        Here are a few sources of data curated by municipalities and organizations both in Boulder and across the state.
                    </p>    
                </div>
            </div>
        )
    }
}

export default OpenDataSources;