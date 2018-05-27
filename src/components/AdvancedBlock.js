
import React, { Fragment } from 'react';

const AdvancedBlock = () => {
    return(
        <Fragment>
            <div className="advanced-title">
                <h3>Advanced</h3>
            </div>
            <span className="printing-title" id="print">Printing</span>
            <div className="printing-part">
                <span>Printers</span>
            </div>
            <span className="reset-title" id="reset">
                Reset
            </span>
            <div className="reset-part">
                <span className="reset-ref">Reset</span>
                <span className="reset-explanation">Restore settings to their original defaults</span>
            </div>
        </Fragment>
    )
}

export default AdvancedBlock;