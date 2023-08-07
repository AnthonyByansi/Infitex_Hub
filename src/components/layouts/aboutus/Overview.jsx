import React, { Component } from 'react';
import { SlideBar } from '.';
import MainOverView from './MainOverView';
class Overview extends Component {
	constructor(props) {
        super(props);
        this.state = {
            itembox: [
                {
                    id: 1,
					title: 'Wealth Management',
					classicon: 'icon-benefit',
					boxcontent: 'Achieve financial success with our expert wealth management services. Our team of experienced professionals will work closely with you to create a personalized wealth management plan that aligns with your financial goals and aspirations. We provide comprehensive solutions to help you grow and preserve your wealth, manage risks, and plan for a secure future. With our wealth management services, you can navigate the complexities of the financial market with confidence and peace of mind.'
				},
            ]
        }
    }
    render() {
        return (
			
			<section className="flat-row pd-about-post">
                        <div className="container">
                            <div className="row flat-tabs" data-effect ="fadeIn">
								<SlideBar />
                                <MainOverView />
                            </div>				
                        </div>
			        </section>
                    // flat-row-iconbox
        );
    }
}

export default Overview;