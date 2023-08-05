import React, { Component } from 'react'
import {Link} from 'react-router-dom'
class BlogFeatured extends Component {
    constructor(props) {
        super(props);
        this.state = {
            datanewBox: [
                {
                        id: 1,
                        srcimg: 'images/news/large-01.jpg',
                        classname: 'post style2', // Assuming the classname should be "post-item" instead of "post style2"
                        title: 'Empowering Women Through Financial Inclusion',
                        description: 'Discover the power of financial inclusion and its impact on women\'s lives. Learn about innovative solutions and opportunities for women to achieve financial stability and independence.',
                        day: '20',
                        month: 'JUN', // Changed the month to the current month (June)
                                            
                },
                {
                    id: 2,
                    srcimg: 'images/news/large-02.jpg',
                    classname:'post style2',
                    title: 'Understanding Sales Forecast Discrepancies',
                    description:'Understanding Sales Forecast Discrepancies',
                    day: '11',
                    month: 'JUN'
                },
            ]
        }
    }
    
    render() {
        return (
            <div>
             {
                this.state.datanewBox.map(data => (
                    <div className="col-md-4" key={data.id}>
                        <article className="post style2" >
                            <div className="featured-post">
                                <Link to="blog-single" onClick={() => {window.location.href="/blog-single"}} title="" className="post-image">
                                    <img src={data.srcimg} alt="financial" />
                                </Link>
                                <ul className="post-date">
                                    <li className="day">{data.day}</li>
                                    <li className="month">{data.month}</li>
                                </ul>
                            </div>
                            {/* <!-- /.featured-post --> */}
                            <div className="content-post">
                                <h4 className="title-post">
                                    <Link to="blog-single" onClick={() => {window.location.href="/blog-single"}} title="">{data.title}</Link>
                                </h4>
                                <div className="entry-post">
                                    <p>{data.description}</p>
                                </div>      
                            </div>
                            {/* <!-- /.content-post --> */}
                        </article>
                {/* <!-- /.post --> */}
            </div>
                ))
                }
            </div>
            
                               
        );
    }
}

export default BlogFeatured;