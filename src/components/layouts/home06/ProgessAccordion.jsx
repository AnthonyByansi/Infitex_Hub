import React, { Component } from 'react';
class ProgessAccordion extends Component {
	constructor(props) {
        super(props);
        this.state = {
            titleprogres: [
                {
                    id: 1,
					title: 'company progress',
					description: 'In your life, you may have many times facing financial issues. It’s good if you know how to handle it by yourself and have enough time to take care of it. In other cases, it’s time you get a financial consulting service. And the article below will show',
                }
			],
			flatprogress: [
				{
					id: 1,
					nameflat: 'Workshops',
					perc: '40',
					datapercent: '40'
				},
				{
					id: 2,
					nameflat: 'Education',
					perc: '70', 
					datapercent: '70'
				},
				{
					id: 3,
					nameflat: 'Insurance',
					perc: '90',
					datapercent: '90' 
				}
			],
			titleAccordion: [
				{
					id: 1,
					title: 'Frequently Asked Questions',
				}
			],
			flattoggle: [
				{
					id: 1,
					toggletitle: 'What are all the different types of accountants?',
					togglecontent: 'If you are interested in pursuing a career in accounting, there are various specialized fields you can consider. Some of the different types of accountants include: tax accountants, audit accountants, forensic accountants, management accountants, and government accountants.'
				  },
				  {
					id: 2,
					toggletitle: 'What do accountants without their CPA do?',
					togglecontent: 'Not all accountants have their Certified Public Accountant (CPA) designation. Those without a CPA may still work in areas such as bookkeeping, financial analysis, accounts payable or receivable, budgeting, and payroll processing. Earning a CPA license, however, can open up additional career opportunities and higher earning potential.'
				  },
				  {
					id: 3,
					toggletitle: 'How do I make a mid-career switch into accounting?',
					togglecontent: 'Making a mid-career switch into accounting is possible with the right approach. Consider taking relevant accounting courses or pursuing a degree in accounting to build the necessary skills and knowledge. Networking with professionals in the accounting field and seeking internships or entry-level positions can also help you transition into a career in accounting.'
				  }
			]
        }
    }
    render() {
        return (
            	<section className="flat-row flat-progress-accordion bg-theme">
					<div className="container">
						<div className="row">
							<div className="col-md-6">
								{
									this.state.titleprogres.map(data =>(
										<div className="progres" key={data.id} >
											<div className="progress-title">
												<h2>{data.title}</h2>
											</div>
											<div className="progress-content">
												<p>
													{data.description}
												</p>
											</div>
											{
												this.state.flatprogress.map(data => (
													<div className="flat-progress " key={data.id} >
														<div className="name">{data.nameflat}</div>
														<div className="perc">{data.perc}</div>
														<div className="progress-bar" data-percent={data.datapercent} data-waypoint-active="yes">
															<div className="progress-animate" data-duration="3000"></div>
														</div>
													</div>
												))
											}
											
								</div>
							

									))
								}
								</div>

							<div className="col-md-6">
								<div className="accordion">
									{
										this.state.titleAccordion.map(data=> (
											<div className="accordion-title" key={data.id} >
												<h2>{data.title}</h2>
											</div>
										))
									}
									<div className="flat-accordion style2">
										{
											this.state.flattoggle.map(data=> (
												<div className="flat-toggle" key={data.id} >
													<h6 className="toggle-title ">{data.toggletitle}</h6>
													<div className="toggle-content">
														<p>{data.togglecontent}</p>                               
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

export default ProgessAccordion;