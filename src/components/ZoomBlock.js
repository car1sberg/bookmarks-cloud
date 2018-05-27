
import React from 'react';

const ZoomBlock = () => {
    return(
        <div className="zoom-part">
            <span>Page zoom</span>
            <div className="dropdown-block">
                <div className="zoom-dropdown">
                    <div className="dropdown-title">
                        <span>100%</span>
                    </div>
                </div>
                <div className="dropdown">
                    <i className="fa fa-caret-down caret"></i>
                    <div className="dropdown-content-zoom">
                        <ul>
                            <li>90%</li>
                            <li>100%</li>
                            <li>110%</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ZoomBlock;