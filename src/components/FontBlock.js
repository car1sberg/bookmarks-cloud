
import React from 'react';

const FontBlock = () => {
    return(
        <div className="fontSize-part">
            <span>Font size</span>
            <div className="dropdown-block">
                <div className="font-dropdown">
                    <div className="dropdown-title">
                        <span>Medium</span>
                    </div>
                </div>
                <div className="dropdown">
                    <i className="fa fa-caret-down caret"></i>
                    <div className="dropdown-content-font">
                        <ul>
                            <li>Small</li>
                            <li>Medium</li>
                            <li>Large</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FontBlock;