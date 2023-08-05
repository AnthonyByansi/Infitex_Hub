import React, { Component } from 'react';
class MainPost extends Component {
	constructor(props) {
        super(props);
        this.state = {
            tabpost: [
                {
                    id: '1',
                    classcategory: 'wrap-one-half services',
                },
                {
                    id: '2',
                    classcategory: 'wrap-one-half services',
                },
                {
                    id: '3',
                    classcategory: 'wrap-one-half services',
                },
                {
                    id: '4',
                    classcategory: 'wrap-one-half services',
                },
                {
                    id: '5',
                    classcategory: 'wrap-one-half services',
                },
                {
                    id: '6',
                    classcategory: 'wrap-one-half services',
                },
            ],
            boxcontent: [
                {
                    id: '4',
                    title: 'Investing for Your Future',
                    description: 'Explore various investment options and strategies to secure your financial future. From stocks and bonds to real estate, learn how to make informed investment decisions to achieve long-term goals.',
                  },
                  {
                    id: '5',
                    title: 'Budgeting for Financial Success',
                    description: 'Join our budgeting workshops to master the art of managing your finances effectively. Learn practical tips for creating and maintaining a budget that aligns with your financial goals.',
                  },
                  {
                    id: '6',
                    title: 'Women in Leadership: Empowering Change',
                    description: 'Discover the inspiring journeys of women leaders who have broken barriers and made a significant impact. Gain insights into leadership skills, diversity, and creating inclusive workplaces.',
                  }
                  
            ],
            flatlist: [
                {
                  id: '1',
                  text: 'Achieve Work-Life Balance: Work Fewer Hours and Earn More'
                },
                {
                  id: '2',
                  text: 'Attract and Retain High-Paying, Quality Customers'
                },
                {
                  id: '3',
                  text: 'Master Time Management to Maximize Productivity'
                },
                {
                  id: '4',
                  text: 'Enhance Leadership Skills for Effective Team Management'
                },
                {
                  id: '5',
                  text: 'Strategies for Effective Risk Management and Growth'
                },
                {
                  id: '6',
                  text: 'Financial Planning for a Secure Future'
                },
              ],git a              
            flattoggle: [
                {
                    id: '1',
                    title: 'Strategy Development',
                    content: 'Good strategy is the antidote to competition. Strategic thinking is the process of developing a strategy that defines your value proposition and your unique value chain. This process includes market and competitive research as well as an assessment of the company’s capabilities and the industry forces impacting it.',
                    classtoggle: 'toggle-title active'
                },
                {
                    id: '2',
                    title: 'Strategic Plan Development',
                    content: 'Good strategy is the antidote to competition. Strategic thinking is the process of developing a strategy that defines your value proposition and your unique value chain. This process includes market and competitive research as well as an assessment of the company’s capabilities and the industry forces impacting it.',
                    classtoggle: 'toggle-title'
                },
                {
                    id: '3',
                    title: 'Strategic Plan Execution',
                    content: 'Good strategy is the antidote to competition. Strategic thinking is the process of developing a strategy that defines your value proposition and your unique value chain. This process includes market and competitive research as well as an assessment of the company’s capabilities and the industry forces impacting it.',
                    classtoggle: 'toggle-title'
                },
            ],
            titleplan: [
                {
                    id: '1',
                    title: 'Research beyond the business plan'
                }
            ],
            textplan: [
                {
                    id: '1',
                    text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore'
                },
                {
                    id: '2',
                    text: 'In your life, you may have many times facing financial issues. It’s good if you know how to handle it by yourself and have enough time to take care of it. In other cases, it’s time you get a financial consulting service. And the article below will show you those cases.'
                },
                {
                    id: '3',
                    text: 'In your life, you may have many times facing financial issues. It’s good if you know how to handle it by yourself and have enough time to take care of it. In other cases, it’s time you get a financial consulting service. And the article below will show you those cases.'
                },
                {
                    id: '4',
                    text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore'
                }
            ]
            
        }
    }
    render() {
        return (
            <div className="col-md-9 content-tab">
                {
                    this.state.tabpost.map(data =>(
                        <div className="content-inner" key={data.id} >
                            <div className={data.classcategory}>
                                <div className="one-half v1">
                                    <div className="box-content">
                                        {
                                            this.state.boxcontent.map(data =>(
                                                <div key={data.id} >
                                                   <div className="title">{data.title}</div>
                                                    <p>{data.description}</p>
                                                    <div className="dividers dividers-bc-v1"></div> 
                                                </div>
                                            ))
                                        }
                                        <ul className="flat-list">
                                            {
                                                this.state.flatlist.map(data=> (
                                                    <li key={data.id} >{data.text} </li>
                                                ))
                                            }
                                        </ul>
                                    </div>									
                                </div>
                                <div className="one-half v2">
                                    <div className="flexslider s1">
                                        <div className="flat-slides">                            
                                            <ul className="slides">
                                                <li>   
                                                    <img src="images/slides/sv1.jpg" alt="img" />
                                                </li>
                                                
                                                <li>
                                                    <img src="images/slides/sv1.jpg" alt="img" />
                                                </li>
                                            </ul> 
                                        </div>
                                    </div>

                                    <div className="flat-accordion style">
                                        {
                                            this.state.flattoggle.map(data =>(
                                                <div className="flat-toggle" key={data.id} >
                                                    <h6 className={data.classtoggle}>{data.title}</h6>
                                                    <div className="toggle-content">
                                                        <p>{data.content}</p>                               
                                                    </div>
                                                </div>
                                            ))
                                        }
                                    </div>
                                </div>
                                <div className="dividers dividers-bc-v2"></div>
                                <div className="box-content">
                                    {
                                        this.state.titleplan.map(data =>(
                                            <div key={data.id} className="title">{data.title}</div>
                                        ))
                                    }
                                    {
                                        this.state.textplan.map(data =>(
                                            <div key={data.id} >
                                                <p>{data.text}</p>
                                                <div className="dividers dividers-bc-v3"></div>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
						</div>

                    ))
                }
                
            </div>
        )
                                
    }
}

export default MainPost;