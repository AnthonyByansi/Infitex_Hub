import React, { Component } from 'react';
import { Link } from "react-router-dom";

class MainGrid extends Component {
	constructor(props) {
        super(props);
        this.state = {
            titlegird: [
                {
                    id: 1,
					title: 'Company profile - Our team',
					description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor<br />incididunt ut labore et dolore magna aliqua.',
				},
			],
			boxgrid: [
				{
					id: '1',
					image: 'images/about/t01.jpg',
					subtitle: 'Founder & CEO',
					name: 'Fortune Tumusime',
					socialMedia: [
						{
							id: '1',
							title: 'Facebook',
							classTitle: 'facebook',
							iconClass: 'fab fa-facebook-f'
						},
						{
							id: '2',
							title: 'LinkedIn',
							classTitle: 'linkedin',
							iconClass: 'fab fa-linkedin-in'
						},
						{
							id: '3',
							title: 'Google Plus',
							classTitle: 'google-plus',
							iconClass: 'fab fa-google-plus-g'
						}
					]
				},
				
				{
					id: '2',
					srcimg: 'images/about/t02.jpg',
					subtitle: 'Company Director',
					title: 'Daisy Nakisanzi'
				},
				{
					id: '3',
					srcimg: 'images/about/t03.jpg',
					subtitle: 'Finance & Commerce',
					title: 'Linda'
				},
				{
					id: '4',
					srcimg: 'images/about/t04.jpg',
					subtitle: 'CTO',
					title: 'Anthony Byans'
				}
			],
			
        }
    }
    render() {
        return (
			<section className="flat-row pd-about-team">
				<div className="container">
					<div className="row">
						<div className="col-md-12">
								{
									this.state.titlegird.map(data =>(
										<div className="title-section center s1" key={data.id} >
											<h2>{data.title}</h2>
											<p className="sub-title-section">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor<br />incididunt ut labore et dolore magna aliqua.</p>
										</div>		
									))
								}
							<div className="dividers dividers-about-team"></div>
						</div>
					</div>

					<div className="row">
						{
							this.state.boxgrid.map(data =>(
								<div className="col-md-3" key={data.id} >
									<div className="flat-team team-grid has-image">			
										<div className="team-image">
											<img src={data.srcimg} alt="img" />
										</div>										
										<div className="team-info">	
											<div className="team-subtitle">{data.subtitle}</div>
											<div className="team-name">{data.title}</div>			
											<div className="team-desc"></div>
											<div className="social-links">
												<Link to="#" data-title="Facebook" className="facebook"><i className="fa fa-facebook"></i></Link> 
												<Link to="#" data-title="LinkedIn" className="linkedin"><i className="fa fa-linkedin"></i></Link> 
												<Link to="#" data-title="Google Plus" className="google-plus"><i className="fa fa-google-plus"></i></Link>
											</div>
										</div>
									</div> 
								</div> 

						
							))
						}
					</div>				
				</div>
			</section>
            //   flat-row-iconbox
        );
    }
}

export default MainGrid;