import React, { Component } from 'react';
import { Link } from "react-router-dom";
class BoxPost extends Component {
	constructor(props) {
        super(props);
        this.state = {
            infobox: [
                {
                    id: '1',
                    srcimg: 'images/about/01.jpg',
                    subtitle: 'Founder & CEO',
                    title: 'Fortune Tumusime',
                    description: 'Passionate Founder & CEO with extensive financial industry experience.',
                  },
                  {
                    id: '2',
                    srcimg: 'images/about/02.jpg',
                    subtitle: 'Company Director',
                    title: 'Daisy Nakisanzi',
                    description: 'Experienced Company Director driving growth and customer satisfaction.',
                  },
                  {
                    id: '3',
                    srcimg: 'images/about/03.jpg',
                    subtitle: 'Finance & Commerce',
                    title: 'Linda',
                    description: 'Dedicated member of the Finance & Commerce team with expertise in financial analysis.',
                  },
                  {
                    id: '4',
                    srcimg: 'images/about/04.jpg',
                    subtitle: 'CTO',
                    title: 'Anthony Byansi',
                    description: 'Innovative CTO leading the development of cutting-edge financial technologies.',
                  },
            ]
            
        }
    }
    render() {
        return (
            <div>
                {
                    this.state.infobox.map(data =>(
                        <div key={data.id} >
                        <article className="entry">
                            <div className="feature-post">                                    
                                <Link to="#">
                                    <img src={data.srcimg} alt="img" />
                                </Link>                                    
                            </div>
                            <div className="content-post">
                                <div className="position">{data.subtitle}</div>	
                                <h3 className="title-post"><Link to="#">{data.title}</Link></h3>
                                <div className="entry-post">
                                    <p>{data.description}</p>
                                </div>
                                <div className="wrap-button s2">
                                    <Link className="flat-button" to="#">View Profile</Link>
                                </div>                                  
                            </div>
                        </article>
                         <div className={data.classdivider}></div>
                        </div>
                    ))
                }
                
            </div>
        )
                                
    }
}

export default BoxPost;