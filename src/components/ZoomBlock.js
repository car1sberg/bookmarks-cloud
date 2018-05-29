
import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';


class ZoomBlock extends Component {
    // constructor()
    handleZoomOut() {
        const val = 0.75
        this.props.onSwitchZoom(val);
    }

    handleZoomDefault() {
        const val = 1
        this.props.onSwitchZoom(val);
    }

    handleZoomIn() {
        const val = 1.25
        this.props.onSwitchZoom(val);
    }

    render() {
        const { zoom } = this.props;
        document.getElementById('root').style.transform = `scale(${zoom})`;

        return(
            <div className="zoom-part">
                <span>Page zoom</span>
                <div className="dropdown-block">
                    <div className="zoom-dropdown">
                        <div className="dropdown-title">
                            <span>{zoom*100}%</span>
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

ZoomBlock.propTypes = {
    onSwitchZoom: PropTypes.func,
    zoom: PropTypes.number,
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