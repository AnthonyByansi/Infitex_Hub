import React, { Component } from 'react';
import { Link } from "react-router-dom";
import TabPortfolio from './TabPortfolio';

class Layout extends Component {
	constructor(props) {
        super(props);
        this.state = {
			itemcontent: [
				{
					id: '1',
					srcimg: 'images/news/inclusion.jpg',
					classitem: 'item trading management',
					title: 'Investment Planning',
					category: 'Business /',
					subcategory: 'Trading',
				},
				{
					id: '2',
					srcimg: 'images/news/Bola Sokunbi (1).jpg',
					classitem: 'item invoicing services',
					title: 'Enterprise Loan',
					category: 'Finance',
					subcategory: '',
				},
				{
					id: '3',
					srcimg: 'images/news/women.jpg',
					classitem: 'item services savings',
					title: 'Oak Tree Solutions',
					category: 'Business',
					subcategory: '',
				},
				{
					id: '4',
					srcimg: 'images/portfolio/05.jpg',
					classitem: 'item invoicing finance',
					title: 'Event Finder',
					category: 'Invoicing',
					subcategory: '',
				},
				{
					id: '5',
					srcimg: 'images/news/round.jpg',
					classitem: 'item finance trading',
					title: 'Financial Report',
					category: 'Management /',
					subcategory: 'Trading',
				},
				{
					id: '6',
					srcimg: 'images/news/incent.jpg',
					classitem: 'item management finance',
					title: 'Money Market',
					category: 'Services /',
					subcategory: 'Trading',
				},
				{
					id: '7',
					srcimg: 'images/news/round.jpg',
					classitem: 'item business savings trading',
					title: 'Business Solutions',
					category: 'Services /',
					subcategory: 'Trading',
				},
				{
					id: '8',
					srcimg: 'images/news/growth.jpg',
					classitem: 'item savings services',
					title: 'MO Insurance',
					category: 'Services /',
					subcategory: 'Trading',
				}
			]
        }
    }
    render() {
        return (
				/* <!-- Portfolio --> */
				<section className="flat-row pd-portfolio-s3" id="work">  
					<TabPortfolio />
					<div className="container">   
						<div className="row">
							<div className="col-md-12">
								<div className="dividers portfolio"></div>
								<div className="flat-portfolio">             
									<div className="portfolio-wrap portfolio-gallery one-four clearfix">
										{
											this.state.itemcontent.map(data =>(
												<div key={data.id} className={data.classitem}>
													<div className="wrap-iconbox">
														<div className="featured-post">
															<img src={data.srcimg} alt="img" />
														</div>
														<div className="title-post">
															<Link to="#">{data.title}</Link>
														</div>
														<div className="category-post">
															<Link to="#" title="">{data.category} </Link>
															<Link to="#" title="">{data.subcategory}</Link>
														</div>
													</div> 
												</div>
											))
										}
										</div>
								</div>
							</div>
						</div>
		        </div>
				</section> 

				 
        );
    }
}

export default Layout;