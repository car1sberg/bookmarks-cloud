
import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';

class ZoomBlock extends Component {
    // constructor()
    handleZoomOut() {
        const val = '75%'
        this.props.onSwitchZoom(val);
    }

    handleZoomDefault() {
        const val = '100%'
        this.props.onSwitchZoom(val);
    }

    handleZoomIn() {
        const val = '125%'
        this.props.onSwitchZoom(val);
    }

    render() {
        const { zoom } = this.props;
        let rootZoom = document.getElementById('root').style.zoom = zoom;

        return(
            <div className="zoom-part">
                <span>Page zoom</span>
                <div className="dropdown-block">
                    <div className="zoom-dropdown">
                        <div className="dropdown-title">
                            <span>{zoom}</span>
                        </div>
                    </div>
                    <div className="dropdown">
                        <i className="fa fa-caret-down caret"></i>
                        <div className="dropdown-content-zoom">
                            <ul>
                                <li onClick={this.handleZoomOut.bind(this)}>75%</li>
                                <li onClick={this.handleZoomDefault.bind(this)}>100%</li>
                                <li onClick={this.handleZoomIn.bind(this)}>125%</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(connect(
    state => ({
        zoom: state.pageZoom
    }),
    dispatch => ({
        onSwitchZoom: (value) => {
            const payload = value;
            dispatch({ type: 'SET_ZOOM', payload })
        },
    })
)(ZoomBlock));