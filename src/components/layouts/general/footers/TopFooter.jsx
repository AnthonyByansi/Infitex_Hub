import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class TopFooter extends Component {
    render() {
        return (
            <div className="widget-infomation">
                <ul className="infomation-footer">
                    <li><i className="fa fa-envelope" aria-hidden="true"></i><Link to="mailto:support@infitxhub.com" title="">support@infitxhub.com</Link></li>
                    <li><i className="fa fa-phone" aria-hidden="true"></i><Link to="tel:+256 787 686 313" title="">+256 787 686 313</Link></li>
                    <li><i className="fa fa-map-marker" aria-hidden="true"></i><span>Plot 123, Kampala Road</span> <br/> <span></span></li>
                </ul>
                {/* <!-- /.infomation-footer --> */}
            </div>
        /* <!-- /.widget-infomation --> */
        );
    }
}

export default TopFooter;
