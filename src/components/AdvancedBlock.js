
import React, { Fragment, Component } from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';


const defaultConfig = {
    theme: true,
    font: 'Medium',
    zoom: '100%',
    inputValue: ''
}

class AdvancedBlock extends Component {

    handlePrint() {
        console.log('printing was sent')
        const printing = true; 
        this.props.onPrint(printing);
    }

    handleResetSettings() {
        this.props.onSwitchTheme(defaultConfig.theme);
        this.props.onSwitchFont(defaultConfig.font);
        document.getElementById('body').classList.remove('darkTheme');
        this.props.onSwitchZoom(defaultConfig.zoom);
        this.props.onFindUser(defaultConfig.inputValue);
    }

    render() {
        return(
            <Fragment>
                <div className="advanced-title">
                    <h3>Advanced</h3>
                </div>
                <span className="printing-title" id="print">Printing</span>
                <div className="printing-part">
                    <span onClick={this.handlePrint.bind(this)}>Printers</span>
                </div>
                <span className="reset-title" id="reset">
                    Reset
                </span>
                <div className="reset-part">
                    <span
                        className="reset-ref"
                        onClick={this.handleResetSettings.bind(this)}>
                        Reset
                    </span>
                    <span className="reset-explanation">Restore settings to their original defaults</span>
                </div>
            </Fragment>
        )
    }
}

export default withRouter(connect(
    state => ({
        lightTheme: state.theme,
        font: state.pageFont,
        zoom: state.pageZoom,
        searchValue: state.userSearchValue
    }),
    dispatch => ({
        onSwitchTheme: (bool) => {
            const payload = bool;
            dispatch({ type: 'SWITCH_THEME', payload })
        },
        onSwitchFont: (value) => {
            const payload = value;
            dispatch({ type: 'SET_FONT', payload })
        },
        onSwitchZoom: (value) => {
            const payload = value;
            dispatch({ type: 'SET_ZOOM', payload })
        },
        onFindUser: (inputValue) => {
            const payload = inputValue;
            dispatch({ type: 'FIND_USER', payload })
        },
        onPrint: (value) => {
            const payload = value;
            dispatch({ type: 'START_PRINTING', payload })
        }
    })
)(AdvancedBlock));