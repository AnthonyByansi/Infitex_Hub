import React, { Component } from 'react'
import {Link} from 'react-router-dom'
class EventBoxs2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataEvents: [
                // {
                //     id: 1,
                //     classicon: 'icon-rounded clipboard',
                //     title: 'Accumulation',
                //     description: 'Our Accumulation services are designed to help you build wealth over time through strategic investments and financial planning. We analyze your financial goals and risk tolerance to create a customized accumulation strategy that aligns with your aspirations. Whether you are saving for retirement, education, or other long-term objectives, our team of experts will guide you every step of the way to maximize your potential for growth and financial success.',
                // },
                // {
                //     id: 2,
                //     classicon: 'icon-rounded line-chart',
                //     title: 'Mutual Funds',
                //     description: 'Diversify your investment portfolio with our selection of top-performing mutual funds. We offer a wide range of mutual fund options, each carefully curated to meet various risk profiles and investment objectives. Our experienced advisors will help you choose the right mutual funds based on your financial goals and risk tolerance. With our mutual funds, you can benefit from professional fund management and tap into the potential of various asset classes to achieve your financial milestones.',
                //     },
                // {
                //     id: 3,
                //     classicon: 'icon-rounded clock',
                //     title: 'Risk Management',
                //     description: 'Effective risk management is essential to safeguarding your financial future. Our Risk Management services provide you with comprehensive solutions to mitigate potential risks and protect your assets. We conduct a thorough assessment of your financial situation and design risk management strategies tailored to your unique needs. Whether it is protecting your investments from market fluctuations or securing your family financial well-being in the event of unforeseen circumstances, we have got you covered with expert risk management advice and solutions.',
                // },
            ]
        }
    }
    
    render() {
        return (
            <div className="row">
                {
                    this.state.dataEvents.map(data => (
                        <div className="col-md-4" key={data.id}>
                            <div className="iconbox-item">
                                <div className="iconbox style1">
                                    <div className="box-header">
                                        <div className={data.classicon}>
                                            
                                        </div>
                                        {/* <!-- /.icon-rounded --> */}
                                        <div className="box-title">
                                            <Link to="#" title="">{data.title}</Link>
                                        </div>
                                        {/* <!-- /.box-title --> */}
                                        </div>
                                        {/* <!-- /.box-header --> */}
                                    <div className="box-content">{data.description}</div>
                                    {/* <!-- /.box-content --> */}
                                </div>
                                 {/* <!-- /.iconbox --> */}
						    </div>
                            {/* <!-- /.iconbox-item --> */}
                        </div>
                    ))
                }
            </div>
        );
    }
}

export default EventBoxs2;