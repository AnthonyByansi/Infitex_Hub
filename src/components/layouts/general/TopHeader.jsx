import React, { Component } from 'react';
import {Link} from 'react-router-dom'
class TopBar extends Component {
    render() {
        return (
            <div className="top style2 v1">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 col-xs-12">
                            <div id="logo" className="logo">
                                <Link to="#" title="">
                                    <img src="images/logo-blog.png" alt="logo Finance Business" />
                                </Link>
                            </div>
                            {/* <!-- /.logo --> */}
                        </div>
                        {/* <!-- /.col-md-4 --> */}
                        <div className="col-md-8 col-xs-12">
                            <div className="flat-open-hours">
                                <p className="icon"><i className="ion-android-watch"></i></p>
                                <p className="text">
                                    Open Hours<br />
                                    <span>Mon - Sat: 8 am - 5 pm, Sunday: CLOSED </span>
                                </p>
                            </div>
                            <div className="flat-address">
                                <p className="icon"><i className="ion-android-pin"></i></p>
                                <p className="text">
                                    Call us: +256 787 686 313<br />
                                    <span>Plot 123, Kampala Road</span>
                                </p>
                            </div>
                            <div className="clearfix"></div>
                        </div>
                    </div>
                </div>
            </div>
            // <!-- /.top style2 -->
		
        );
    }
}

export default TopBar;