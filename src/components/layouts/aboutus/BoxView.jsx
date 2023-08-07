import React, { Component } from 'react';
class BoxView  extends Component {
	constructor(props) {
        super(props);
        this.state = {
            imgslide: [
                {
                    id: '1',
                    srcimg: 'images/about/s01.jpg'
                },
                {
                    id: '2',
                    srcimg: 'images/about/s01.jpg'
                }
            ],
            content: [
                {
                    id: '1',
                    title: 'Want to know more about Finance Plus?',
                    description: 'In your life, you may have many times facing financial issues. It’s good if you know how to handle it by yourself and have enough time to take care of it. In other cases, it’s time you get a financial consulting service. And the article below will show you those cases.quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.',
                }
            ],
            blogtimeline: [
                {
                    id: '1',
                    year: '2023',
                    title: 'Inception of Our Company',
                    description: 'In 2012, our company embarked on a journey with a vision to provide a unique and unmatched service that no one else was offering. At the beginning, we faced uncertainty and challenges, unsure of how far we would go or if we would even survive. However, our determination and passion drove us forward, and we started by offering small but valuable services.',
                },
                {
                    id: '2',
                    year: '2023',
                    title: 'Expanding Our Horizons',
                    description: 'As our company grew, we recognized the importance of online presence and digital marketing. In 2013, we ventured into website design and SEO marketing, enabling us to reach a wider audience and provide more comprehensive solutions. Our commitment to excellence and customer satisfaction remained at the core of our operations.',
                },
                
            ]
            
        }
    }
    render() {
        return (
            <div>
                <div className="flexslider s2">
                    <div className="flat-slides">                            
                        <ul className="slides">
                            {
                                this.state.imgslide.map(data =>(
                                    <li key={data.id}>   
                                        <img src={data.srcimg} alt="img" />
                                    </li>
                                ))
                            }
                            
                        </ul> 
                    </div>
                </div> 
                    {
                        this.state.content.map(data =>(
                            <div className="box-content" key={data.id} >
                                <div className="title">{data.title}</div>
                                <p>{data.description}</p>
                                <div className="dividers dividers-bc-v4"></div>
                            </div>
                            ))
                    }
                
                    {
                        this.state.blogtimeline.map(data =>(
                            <div className="flat-text-block-timeline" key={data.id} >
                                <div className="year">{data.year}</div>
                                <div className="flat-timeline-content">
                                <div className="box-content">
                                    <div className="title">{data.title}</div>
                                    <p>{data.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
								
        )
                                
    }
}

export default BoxView;