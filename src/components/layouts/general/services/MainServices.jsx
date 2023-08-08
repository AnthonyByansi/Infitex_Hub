import React, { Component } from 'react';
import { Link } from "react-router-dom";
class MainServices extends Component {
	constructor(props) {
        super(props);
        this.state = {
            titleServices: [
                {
                    id: 1,
					title: 'Our Services',
                    description: 'Explore our wide range of financial services designed to meet your specific needs and help you achieve your financial goals.',
                }
			],
			imagebox: [
				{
					id: '1',
					imgsrc: 'images/imagebox/Investplanning.jpg',
					title: 'Investment Planning', 
                    description: 'Create a comprehensive investment plan tailored to your financial goals and risk tolerance for a secure financial future.',
				},
				{
					id: '2',
					imgsrc: 'images/imagebox/planning.jpg',
					title: 'Mutual Funds',
                    description: 'Diversify your investments and benefit from pooled money to purchase a broad range of assets, such as stocks and bonds.',
				},
				{
					id: '3',
					imgsrc: 'images/imagebox/06.jpg',
					title: 'Personal Insurance',
					description: 'Protect yourself and your loved ones with our personalized insurance solutions to safeguard against life uncertainties.',
				},
				{
					id: '4',
					imgsrc: 'images/imagebox/07.jpg',
					title: 'Industrial Insurance',
					description: 'Safeguard your business and employees with our industrial insurance plans designed to mitigate potential risks.',
				},
				{
					id: '5',
					imgsrc: 'images/imagebox/08.jpg',
					title: 'INVESTMENT IN BONDS',
					description: 'Invest in bonds to earn fixed interest income and enhance the diversification of your investment portfolio.',
				},
				{
					id: '9',
					imgsrc: 'images/imagebox/09.jpg',
					title: 'Retirement Planning',
					description: 'Plan for a comfortable retirement with our expert guidance and strategies to secure your financial future.'
				}
			]
        }
    }
    render() {
        return (
			<section className="flat-row pd-services-post">
				<div className="container">
					<div className="row">
						<div className="col-md-12">
							{
								this.state.titleServices.map(data =>(
									<div className="title-section center s1" key={data.id} >
										<h2>{data.title} </h2>
										<p className="sub-title-section">{data.description} </p>
									</div>
								))
							}
							<div className="dividers dividers-imagebox"></div>
						</div>
					</div>
					<div className="row">
						<div className="col-md-12">
							<div className="wrap-imagebox-grid">
									{
										this.state.imagebox.map(data =>(
											<div className="flat-imagebox services-grid item" key={data.id} >
												<div className="flat-imagebox-inner"  >
													<div className="flat-imagebox-image">
														<img src={data.imgsrc} alt="img" />
													</div>
													<div className="flat-imagebox-header">
														<h3 className="flat-imagebox-title">
															<Link to="#">{data.title}</Link>	
														</h3>
													</div>
													<div className="flat-imagebox-content">
														<div className="flat-imagebox-desc">{data.description}</div>
														<div className="flat-imagebox-button">
															<Link to="#" target="_blank">Read More</Link>
														</div>
													</div>
												</div>
											</div> 
								
										))
									} 
							</div>
						</div>
					</div>
				</div>
			</section>

				



        );
    }
}

export default MainServices;