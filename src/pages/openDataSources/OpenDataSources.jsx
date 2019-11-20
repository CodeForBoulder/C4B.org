import React from 'react';
import './OpenDataSources.css'

export default function OpenDataSources() {
        return(
            <div className="container">
                <div id="open-data-sources" className="row">
                    <div id="paragraph-container">
                        <h4 id="open-data-sources-header"> OPEN DATA SOURCES</h4>
                        <p id="open-data-sources-para"> 
                            Open data plays a crucial part in Code for Boulder. 
                            Without open data, there would be no open projects! 
                            Here are a few sources of data curated by municipalities and organizations both in Boulder and across the state.
                        </p>
                    </div>    
                </div>
                <div id="paragraph-and-button" className="row">
                    <div id="city-of-boulder-div">
                      <h4 id="city-of-boulder-header">
                        CITY OF BOULDER OPEN DATA CATALOG
                      </h4>    
                      <p id="city-of-boulder-paragraph">
                        Collection of nearly 100 different datasets from across Boulder, CO
                      </p>
                    </div>
                    <button id="boulder-visit-page" type="button"></button>
                </div>
            </div>
        )
}