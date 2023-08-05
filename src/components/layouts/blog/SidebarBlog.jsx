import React, { Component } from 'react';
import { Link } from 'react-router-dom'
class SidebarBlog extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listrecentpost: [
                {
                    id: '1',
          title: 'The Power of Financial Empowerment for Women',
          datapost: 'June 20, 2023'
                },
                {
                    id: '2',
          title: 'Achieving Financial Independence: A Guide for Women',
          datapost: 'June 20, 2023'
                },
                {
                    id: '3',
          title: 'Empowering Women Through Investment: Opportunities and Strategies',
          datapost: 'June 20, 2023'
                },
                {
                    id: '4',
                    title: 'Financial Literacy: Key to Womens Financial Well-being',
                    datapost: 'January 11, 2023'
                }
            ],
            category: [
                {
                    id: '1',
                    title: 'Business'
                },
                {
                    id: '2',
                    title: 'Finance'
                },
                {
                    id: '3',
                    title: 'Insurance'
                },
                {
                    id: '4',
                    title: 'Leasing'
                },
            ],
            tabcloud: [
                {
                    id: '1',
                    tablink: 'Business'
                },
                {
                    id: '2',
                    tablink: 'Consulting'
                },
                {
                    id: '5',
                    tablink: 'Insurance'
                },
                {
                    id: '6',
                    tablink: 'Leasing'
                },
                {
                    id: '7',
                    tablink: 'Management'
                }
            ]
        }
    }
    render() {
        return (
                <div className="col-md-4">
                    <div className="sidebar right">
                        <aside id="recent-post" className=" widget widget-recent">
                            <h3 className="widget-title">RECENT POSTs</h3>
                            <ul>
                                {
                                    this.state.listrecentpost.map(data => (
                                        <li key={data.id} >
                                            <Link to="blog-single" onClick={() => {window.location.href="/blog-single"}} title="">{data.title}</Link>
                                            <span>{data.datapost}</span>
                                        </li>
                                    ))
                                }
                            </ul>
                        </aside>
                        <aside className=" widget widget-categories">
                            <h3 className="widget-title">CATEGORIES</h3>
                            <ul>
                                {
                                    this.state.category.map(data => (
                                        <li key={data.id} ><Link to="#" title="">{data.title}</Link></li>
                                    ))
                                }
                            </ul>
                        </aside>
                        <aside className="widget widget-brochure">
                            <div className="brochure-box-title">
                                <h5 className="brochure-title">Our Brochure</h5>
                                <p>Explore our comprehensive financial prospectus brochure for an easy-to-read guide on the range of services offered. Our prospectus provides valuable insights into empowering women through financial literacy, investment opportunities, microfinance, and more.</p>
                            </div>
                            <p className="btn-download">
                                <Link to="#" title="" className="pdf">Download .PDF</Link>
                            </p>
                            <p className="btn-download doc">
                                <Link to="#" title="" className="doc">Download .DOC</Link>
                            </p>
                        </aside>
                        <aside className="widget widget-tags">
                            <h3 className="widget-title">TAGS</h3>
                            <div className="tag-cloud">
                                {
                                    this.state.tabcloud.map(data =>(
                                        <Link key={data.id} to="#" title="" className="tag-link">{data.tablink}</Link>
                                    ))
                                }
                            </div>
                        </aside>
                    </div>
                </div>
        );
    }
}

export default SidebarBlog;