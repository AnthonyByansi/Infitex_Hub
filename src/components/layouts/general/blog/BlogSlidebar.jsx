import React, { Component } from 'react'
import {Link} from 'react-router-dom'
class newBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            datanewBox: [
                {
                    id: 1,
                    srcimg: 'images/news/image-small-01.png',
                    title: 'Empowering Women Through Financial Inclusion',
                    description:'Discover the power of financial inclusion and its impact on women\'s lives. Learn about innovative solutions and opportunities for women to achieve financial stability and independence',
                    day: '3, July 2023',
                },
                {
                    id: 2,
                    srcimg: 'images/news/image-small-02.png',
                    title: 'Microfinance for Women: Driving Financial Independence',
                    description: 'Explore the transformative impact of microfinance in empowering women to start and grow their own businesses. Learn how microloans are enabling financial independence for women in underserved communities.',
                    day: '4, July 2023',
                },
                {
                    id: 3,
                    srcimg: 'images/news/image-small-03.png',
                    title: 'Financial Literacy Workshops: Empowering Women to Take Control',
                    description: 'Join our interactive financial literacy workshops designed to equip women with essential money management skills. Learn how to budget, save, and make informed financial decisions to achieve your goals.',
                    day: '5, July 2023',
                }
            ]
        }
    }
    
    render() {
        return (
            <div className="col-md-4">
                <div className="slidebar-news">
                    <aside className="widget widget-recent-news">
                        <ul className="recent-news">
                                {
                                    this.state.datanewBox.map(data => (
                                        <li key={data.id} >                                    
                                            <div className="thumb">
                                                <span className="overlay-pop"></span>
                                                <Link to="blog-single" onClick={() => {window.location.href="/blog-single"}}>
                                                    <img src={data.srcimg} alt="" />
                                                </Link>
                                                {/* <!-- /.thumb -->  */}
                                            </div>
                                            {/* <!-- /.row --> */}
                                            <div className="text">
                                                <h4>
                                                    <Link to="blog-single" onClick={() => {window.location.href="/blog-single"}} title="">{data.title}</Link>
                                                </h4>
                                                <div className="entry-post">
                                                    <p>{data.day}</p>
                                                </div>
                                            </div>
                                            {/* <!-- /.content-post -->*/}
                                        </li>
                                    ))
                                    
                                }
                        </ul>
                    </aside>
                    {/* <!-- /.widget-recent-news --> */}
                </div>
                {/* <!-- /.slidebar-news --> */}
            </div>
        );
    }
}

export default newBox;