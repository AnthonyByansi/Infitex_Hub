import React, { Component } from 'react';
import { Header, TopBar , Footer,  Loader } from '../layouts/general';
import { Link } from "react-router-dom";
import { SidebarBlog} from '../layouts/blog';
class BlogGrid extends Component {
    constructor(props) {
        super(props);
        this.state = {
            headers: [
                {
                    id: 1,
                    names: 'Why Do I Need To Use Financial ?',
                }
            ],
            titleheading: [
                {
                    id: '1',
                    title: 'Why Do I Need To Use Financial ?'
                }
            ],
            breadcrumbs: [
                {
                    id: 1,
                    title: 'Home',
                    classicon: 'fa fa-angle-right',
                    aria: 'true'
                },
                {
                    id: 2,
                    title: 'Why Do I Need To Use Financial ?',
                    classicon: '',
                    aria: ''
                }
            ],
            list: [
                {
                  id: 1,
                  text: 'User Experience: Our platform prioritizes user experience, ensuring that the homepage and overall design style create a positive impression on our users. We aim to provide a seamless and satisfying experience as our users interact with the site and perform various tasks.'
                },
                {
                  id: 2,
                  text: 'Service Reliability: At INFITX, we place great emphasis on responsiveness and reliability. Our platform is designed to quickly respond to user commands, ensuring smooth navigation and minimal downtime. We strive to deliver a dependable experience for all our users.'
                },
                {
                  id: 3,
                  text: 'Best Practices: We adhere to industry best practices to enhance user satisfaction. Our platform prioritizes ease of use, maintaining high-quality standards, and ensuring availability and security. We are committed to complying with data laws, safeguarding customer information, and maintaining the integrity of customer accounts.'
                }
              ],
              
            datablog: [
                {
                  id: '1',
                  srcimg: 'images/blog/blog-post-01.png',
                  title: 'The Power of Financial Empowerment for Women',
                  time: '3 August, 2023',
                  author: 'INFITX Empowerment Hub Team',
                  category: 'Financial Empowerment',
                  comments: '0 Comments',
                  description: 'Welcome to the INFITX Empowerment Hub blog post on the power of financial empowerment for women. In this article, we will explore the importance of financial literacy and its positive impact on women\'s lives.',
                  description1: 'Financial empowerment goes beyond traditional notions of handling money. It is about gaining the knowledge and skills to make informed financial decisions that align with your goals and aspirations. By becoming financially empowered, women can take control of their financial future and achieve financial independence.',
                  description2: 'At INFITX, we are committed to providing a platform that offers comprehensive financial literacy courses, access to microfinance opportunities, and a diverse range of investment options tailored to women\'s needs. Our supportive community, comprising mentors and networking events, creates a nurturing environment for women to learn and grow financially.',
                },
              ],
              
            tabcloud: [
                {
                    id: '1',
                    tablink: 'Creative'
                },
                {
                    id: '2',
                    tablink: 'Portfolio'
                },
                {
                    id: '3',
                    tablink: 'ThemeForest'
                },
            ]
        }
    }
    render() {
        return (
            <div className="bg-body">
                <div className="boxed">
                <Loader />
                <TopBar />
                    {
                        this.state.headers.map(data => (
                            <Header data={data} key={data.id}/>
                        ))
                    }
                    <div className="page-title">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="page-title-heading">
                                        {
                                            this.state.titleheading.map(data =>(
                                                <h1 key={data.id} className="h1-title">{data.title}</h1>
                                            ))
                                        }       
                                    </div>
                                    <ul className="breadcrumbs">
                                        {
                                            this.state.breadcrumbs.map(data =>(
                                                <li key={data.id} ><Link to="#" title="">{data.title}<i className={data.classicon} aria-hidden={data.aria}></i></Link></li>
                                            ))
                                        }
                                    </ul>
                                    <div className="clearfix"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <section className="main-content">
                        <div className="container">
                            <div className="row">
                            <div className="col-md-8">
						    <div className="post-wrap">
                            {
                                this.state.datablog.map(data =>(
                                    <article className="main-post" key={data.id} >
                                        <div className="entry-post-title">
                                            <h2 className="post-title"><Link to="#" title="">{data.title}</Link></h2>
                                            <ul className="entry-meta">
                                                <li className="date"><Link to="#" title="">{data.time}</Link></li>
                                                <li className="author"><Link to="#" title="">{data.author}</Link></li>
                                                <li className="categories"><Link to="#" title="">{data.category}</Link></li>
                                                <li className="comment"><Link to="#" title="">{data.comments}</Link></li>
                                            </ul>
                                        </div>
                                        <div className="featured-post">
                                            <Link to="#" title="">
                                                <img src={data.srcimg} alt="financial" />
                                            </Link>
                                        </div>
                                        <div className="entry-content">
                                            <p> {data.description}
                                            </p> <br />
                                            <p> {data.description1}
                                            </p> <br />
                                            <ul className="list">
                                                {
                                                    this.state.list.map(data=> (
                                                        <li key={data.id}><em>{data.text}</em></li>
                                                    ))
                                                }
                                                
                                                
                                            </ul>
                                            <p> {data.description2}
                                            </p> <br />
                                            <div className="widget widget-tags">
                                                <div className="tag-cloud">
                                                    {
                                                        this.state.tabcloud.map(data =>(
                                                            <Link key={data.id} to="#" title="" className="tag-link">{data.tablink}</Link>
                                                        ))
                                                    }
                                                </div>
                                            </div>

                                            
                                            
                                            </div>
                                            
							        </article>
                                ))
                            }
                            
						</div>
                            <div className="main-single">
                                <div id="comments" className="comments-area">
                                    <div id="respond" className="comment-respond">
                                        <h3 id="reply-title" className="comment-reply-title">Leave A Reply <small><Link rel="nofollow" id="cancel-comment-reply-link" to="" >Cancel reply</Link></small></h3>
                                        <form action="" method="" id="commentform" className="clearfix"  >
                                            <div className="comment-left">
                                                <fieldset className="name-container">									
                                                <input type="text" id="author" placeholder="Name" className="tb-my-input" name="author" tabIndex="1"  size="32" aria-required="true" />
                                                </fieldset>
                                            </div>
                                            <fieldset className="email-container">									
                                                <input type="text" id="email" placeholder="Email" className="tb-my-input" name="email" tabIndex="2"  size="32" aria-required="true" />
                                            </fieldset>
                                            <p className="comment-form-cookies-consent"><input id="wp-comment-cookies-consent" name="wp-comment-cookies-consent" type="checkbox" value="yes" />
                                                <label htmlFor="wp-comment-cookies-consent">Save my name, email, and website in this browser for the next time I comment.
                                                </label>
                                            </p>
                                            <div className="comment-right">
                                                <fieldset className="message">
                                                    <textarea id="comment-message" placeholder="Comment" name="comment" rows="8" tabIndex="4"></textarea>
                                                </fieldset>
                                            </div>
                                                <p className="form-submit">
                                                    <input name="submit" type="submit" id="comment-reply" className="submit" value="Post Comment" />
                                                    {/* <input type="hidden" name="comment_post_ID" value="225" id="comment_post_ID" />
                                                    <input type="hidden" name="comment_parent" id="comment_parent" value="0" /> */}
                                                </p>
                                        </form>
                                </div>
                            </div>
					</div>        
                            
                            </div>
			            
                            <SidebarBlog /></div>
                        </div>
                    </section>
                <Footer />
                </div>
            </div>
            
        );
    }
}

export default BlogGrid;