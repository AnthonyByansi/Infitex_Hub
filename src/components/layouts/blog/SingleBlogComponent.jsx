import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SingleBlogComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      datablog: [
        {
          id: '1',
          srcimg: 'images/blog/blog-post-01.png',
          title: 'The Power of Financial Empowerment for Women',
          description: 'Welcome to our INFITX Empowerment Hub blog post! In this article, we will explore the importance of financial literacy and its positive impact on women\'s lives.',
          day: '20',
          month: 'JUN',
        },
        {
          id: '2',
          srcimg: 'images/blog/blog-post-02.png',
          title: 'Achieving Financial Independence: A Guide for Women',
          description: 'At INFITX, we believe that every woman deserves to achieve financial independence. Join us on this journey to discover the path to financial freedom.',
          day: '20',
          month: 'JUN',
        },
        {
          id: '3',
          srcimg: 'images/blog/blog-post-03.png',
          title: 'Empowering Women Through Investment: Opportunities and Strategies',
          description: 'Learn how investing can be a powerful tool for women to grow their wealth and achieve their financial goals. Explore various investment opportunities tailored for women.',
          day: '20',
          month: 'JUN',
        },
      ],
    };
  }

  render() {
    return (
      <section className="main-content blog-single-post">
        <div className="container">
          <div className="row">
            <div className="post-wrap">
              {this.state.datablog.map((data) => (
                <div className="col-md-4" key={data.id}>
                  <article className="post style2">
                    <div className="featured-post">
                      <Link to="/blog-single" title="" className="post-image">
                        <img src={data.srcimg} alt="img" />
                      </Link>
                      <ul className="post-date">
                        <li className="day">{data.day}</li>
                        <li className="month">{data.month}</li>
                      </ul>
                    </div>
                    <div className="content-post">
                      <h4 className="title-post">
                        <Link to="/blog-single" title="">{data.title}</Link>
                      </h4>
                      <div className="entry-post">
                        <p>{data.description}</p>
                        <div className="more-link">
                          <Link to="/blog-single" title="">Read more</Link>
                        </div>
                      </div>
                    </div>
                  </article>
                </div>
              ))}
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="dividers dividers-pagination"></div>
              <div className="blog-single-pagination">
                <ul className="flat-pagination">
                  <li>
                    <Link to="#" className="active" title="">
                      1
                    </Link>
                  </li>
                  <li>
                    <Link to="#" title="">
                      2
                    </Link>
                  </li>
                  <li>
                    <Link to="#" title="">
                      &gt;
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default SingleBlogComponent;
