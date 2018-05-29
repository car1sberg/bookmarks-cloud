
import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class FontBlock extends Component {

    handleDecreaseFont() {
        const val = 'Small'; 
        this.props.onSwitchFont(val);
    }

    handleDefaultFont() {
        const val = 'Medium'; 
        this.props.onSwitchFont(val);
    }

    handleIncreaseFont() {
        const val = 'Large'; 
        this.props.onSwitchFont(val);
    }

    render() {
        const { font } = this.props;
        document.getElementById('root').style.fontSize = font;

        return(
            <div className="fontSize-part">
                <span>Font size</span>
                <div className="dropdown-block">
                    <div className="font-dropdown">
                        <div className="dropdown-title">
                            <span>{font}</span>
                        </div>
                    </div>
                    <div className="dropdown">
                        <i className="fa fa-caret-down caret"></i>
                        <div className="dropdown-content-font">
                            <ul>
                                <li onClick={this.handleDecreaseFont.bind(this)}>Small</li>
                                <li onClick={this.handleDefaultFont.bind(this)}>Medium</li>
                                <li onClick={this.handleIncreaseFont.bind(this)}>Large</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

FontBlock.propTypes = {
    onSwitchFont: PropTypes.func,
    font: PropTypes.string
}

export default withRouter(connect(
    state => ({
        font: state.pageFont
    }),
    dispatch => ({
        onSwitchFont: (value) => {
            const payload = value;
            dispatch({ type: 'SET_FONT', payload })
        },
    })
)(FontBlock));