import React, { Component } from 'react'
import {Link} from 'react-router-dom'
class EventBoxs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataEvents: [
                {
                    id: 4,
                    srcimg: 'images/imagebox/004.jpg',
                    title: 'Empowering Women Through Entrepreneurship',
                    description: 'Discover inspiring stories of women entrepreneurs who have turned innovative business ideas into successful ventures. Learn about their journey, challenges, and the impact of financial empowerment on their lives.',
                  },
                  {
                    id: 5,
                    srcimg: 'images/imagebox/005.jpg',
                    title: 'Fintech Solutions for Inclusive Growth',
                    description: 'Explore the latest fintech innovations that are driving financial inclusion for women worldwide. From mobile banking to blockchain-based solutions, see how technology is transforming access to finance.',
                  },
                  {
                    id: 6,
                    srcimg: 'images/imagebox/006.jpg',
                    title: 'Financial Planning for Women: A Roadmap to Success',
                    description: 'Join our comprehensive financial planning sessions designed to help women set financial goals, manage debt, and invest wisely. Gain the knowledge and tools needed to achieve financial freedom.',
                  }
                  
            ]
        }
    }
    
    render() {
        return (
            <div className="row">
                {
                    this.state.dataEvents.map(data => (
                        <div className="col-md-4" key={data.id}>
                            <div className="imagebox-item">
                                <div className="imagebox style1">
                                    <div className="imagebox-image">
                                        <img src={data.srcimg} alt="financial" />
                                    </div>
                                    {/* <!-- /.imagebox-image --> */}
                                    
                                    <div className="imagebox-title">
                                        <h3><Link to="/blog" onClick={() => {window.location.href="/blog"}} title="">{data.title}</Link></h3>
                                    </div>
                                    {/* <!-- /.iamgebox-title --> */}
                                    <div className="imagebox-content">
                                        <div className="imagebox-desc">{data.description}</div>
                                        <div className="imagebox-button">
                                            <Link to="/blog" onClick={() => {window.location.href="/blog"}} title="">read more</Link>
                                        </div>
                                    </div>
                                    {/* <!-- /.imagebox-content --> */}
                                </div>
                                {/* <!-- /.imagebox --> */}
                            </div>
                            {/* <!-- /.imagebox-item --> */}
                        </div>
                    ))
                }
            </div>
        );
    }
}

export default EventBoxs;