import React, { Component } from 'react';
class Testimonials extends Component {
	constructor(props) {
        super(props);
        this.state = {
			titleTes: [
				{
					id: 1,
					title: 'Testimonials'
				}
			],
            itemTes: [
				{
					id: 1,
					srcimg: './images/testimonials/img-01.png',
					content: 'I am impressed with the exceptional service provided by Infitx. Their financial advice has helped me make better decisions for my business. I highly recommend their services!',
					author: 'James Kato',
					authorinfo: 'Entrepreneur & Business Owner'
				  },
				  {
					id: 2,
					srcimg: './images/testimonials/img-02.png',
					content: 'Infitx has been instrumental in managing my finances. Their team is knowledgeable and always available to answer my queries. Thanks to them, I feel more confident about my financial future.',
					author: 'Sarah Nakato',
					authorinfo: 'Investor & Financial Enthusiast'
				  }
            ]
        }
    }
    render() {
        return (
			<section className="flat-row flat-testimonials">
				<div className="container">
					<div className="row">
						<div className="flat-testimonials-title center">
							{
								this.state.titleTes.map(data =>(
									<h2 key={data.id} >{data.title}</h2>
								))
							}
						</div>
					</div>
					<div className="row">
						<div className="col-md-12 col-xs-12">
						<ul className="flat-testimonials-post" data-item="2" data-nav="false" data-dots="false" data-auto="true">
							{
								this.state.itemTes.map(data =>(
									<li className="item" key={data.id} >        					
										<article className="testimonials-post">
											<div className="featured-post">
												<img src={data.srcimg} alt="financial" />
											</div>
											<div className="content-post">
												<div className="entry-post">
													{data.content}
												</div>
												<div className="testimonials-author">
													<div className="author-name">
														{data.author}
													</div>
													<div className="author-infomation">
														{data.authorinfo}
													</div>
												</div>
											</div>
										</article>     					
									</li>
								))
							}
							
						</ul>
						</div>
					</div>
				</div>
		    </section>
           
        );
    }
}

export default Testimonials;