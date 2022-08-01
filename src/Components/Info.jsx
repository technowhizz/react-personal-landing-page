import React from "react"


export default function Info() {
    return(
        <div className="info">
            <img src="src/assets/profpic.png" className="info--pic" />
            <h2 className="info--name">Technowhizz</h2>
            <h4 className="info--role">Software Developer</h4>
            <a href="https://google.com" className="info--website">website.me</a><br/>
            <div className="info--buttons">
                <a className="info--email" href=""> 
                    <i className="fa-solid fa-envelope"></i>Email
                </a>
                <a className="info--linkedin" href="https://linkedin.com"> 
                    <i className="fa-brands fa-linkedin"></i>LinkedIn
                </a>
            </div>
        </div>
    )

} 
