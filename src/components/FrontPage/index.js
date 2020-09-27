import React from 'react';
import './style.css';

function FrontPage() {
    return (
        <div>
            <div className="bg-color">
                <div className="container">
                    <div className="row">
                        <section className="col-12 text-center">
                            <p id="i-am-taher">I'm Taher.</p>
                            <p>a software engineer</p>
                        </section>
                    </div>

                    <div className="row">
                        <section className="col-12 justify-content-center center">
                            <img src="./assets/img/background.png" className="hello-image" alt="Background" />
                        </section>
                    </div>
                </div>
            </div>
            <div>
                <div className="container">
                    <div className="row about-me">
                        <section className="col-12 text-center">
                            <article className="about-me-article">
                                <figure>
                                    <img src="./assets/img/me.jpg" className="bio-image" alt="me" />
                                </figure>
                                <p className="title">Hi</p>
                                <p>I'm a software engineer based in New York, USA. I have a passion for coding and love to create new sites
                        </p>
                            </article>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FrontPage;