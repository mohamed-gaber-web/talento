import React from 'react';

import './club-data.page.css';

export function ClubData() {
    return (
        <div className="club-data mt-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <div className="data-info">
                            <h3> 128 </h3>
                            <h4> Players </h4>
                        </div>
                    </div>

                    <div className="col-md-3">
                        <div className="data-info">
                            <h3> 20 </h3>
                            <h4> Coaches </h4>
                        </div>
                    </div>

                    <div className="col-md-3">
                        <div className="data-info">
                            <h3> 82 / 376 </h3>
                            <h4> Hours of Training </h4>
                        </div>
                    </div>

                    <div className="col-md-3">
                        <div className="data-info">
                            <h3> 90% / 82% </h3>
                            <h4> Succesrate </h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
