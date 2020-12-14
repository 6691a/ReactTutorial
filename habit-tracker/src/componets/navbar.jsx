import React, { PureComponent } from 'react';

class Navbar extends PureComponent {
    render() {
        return (
            <div className="navbar">
                <i className="navbar-logo fas fa-leaf"></i>
                <span className="navbar-title">Habit Tracker</span>
                <span className="nevbar-count">{this.props.totalCount}</span>
            </div>
        );
    }
}

export default Navbar;