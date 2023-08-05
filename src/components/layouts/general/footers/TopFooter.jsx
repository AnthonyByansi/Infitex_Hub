import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class TopFooter extends Component {
    render() {
        return (
            <div className="widget-infomation">
                <ul className="infomation-footer">
                    <li><i className="fa fa-envelope" aria-hidden="true"></i><Link to="mailto:support@infitxhub.com" title="">support@infitxhub.com</Link></li>
                    <li><i className="fa fa-phone" aria-hidden="true"></i><Link to="tel:+256XXXXXXXXX" title="">+256 XXX XXX XXX</Link></li>
                    <li><i className="fa fa-map-marker" aria-hidden="true"></i><span>Plot XX, Street Name,</span> <br/> <span>City, Country (Uganda)</span></li>
                </ul>
                {/* <!-- /.infomation-footer --> */}
            </div>
        /* <!-- /.widget-infomation --> */
        );
    }
}

export default TopFooter;
