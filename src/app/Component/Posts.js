import React from 'react'

const Posts = ({ date, title, topic, info, event, info2, line1, line2, line3, line4, img, feedBack, downLoad_btn, consultation, readMore }) => {
    return (
        <div>
            <main className="post_container">
                <article className="article">
                    <p className='date'>{date}</p>
                    <div className="post_title">
                        <h1>{title}</h1>
                        <h1>{topic}</h1>
                    </div>
                    <p className="para">{info}</p>
                    <div className="description">
                        <p>{line1}</p>
                        <p className="para">{info2}</p>
                        <p>{line2}</p>
                        <p>{line3}</p>
                        <p>{line4}</p>
                    </div>
                    {feedBack && <div className="download">
                       <div className="">
                       <p>{feedBack}</p>
                       <h4 className='event'>{event}</h4>
                       </div>
                        <span>{downLoad_btn}</span>
                    </div>}
                   {consultation && <div className="download">
                        <p>{consultation}</p>
                        <span>{readMore}</span>
                    </div>}
                </article>
                <section className='section'>
                    <img src={img} alt={title} />
                </section>
            </main>
        </div>
    )
}

export default Posts