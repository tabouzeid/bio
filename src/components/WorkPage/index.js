import React from 'react';
import ProjectDetail from '../ProjectDetail/';
import './style.css';

function WorkPage () {
    const projectsToDisplay = [
        {
            id: "tabouzeid/meditation_app",
            title: "Meditation App",
            description: "ShotGlass is a simple, mental refreshment app that allows the user to tailor their own timed meditative experience by selecting from a pool of randomly-generated affirmations & visual- and audio-themes.",
            imageUrl: "https://github.com/tabouzeid/meditation_app/raw/master/assets/visuals/sg.gif",
            bgColor: "red",
            appUrl: "https://tabouzeid.github.io/meditation_app/",
        },
        {
            id: "tabouzeid/weather_dashboard",
            title: "Weather App",
            description: "The weather dashboard app allows the user to bring up the weather forecast for today as well as the next five days for the city enetered into the search field.",
            imageUrl: "https://github.com/tabouzeid/weather_dashboard/blob/master/assets/img/app_screenshot.png?raw=true",
            bgColor: "goldenrod",
            appUrl: "https://tabouzeid.github.io/weather_dashboard/",
        },
        {
            id: "tabouzeid/burger_challenge",
            title: "Burger Challenge",
            description: "The burger challenge app allows the user to add a new burger to the Queued list and then Devour them and move them to the devoured list. This app is deployed on Heroku and uses JAWS Db in the background to store all of the burgers as well as whether they are devoured or not.",
            imageUrl: "https://github.com/tabouzeid/burger_challenge/raw/master/public/assets/img/app_screenshot.png",
            bgColor: "rgba(0, 255, 38, 0.838)",
            appUrl: "https://rocky-escarpment-73645.herokuapp.com/",
        },
        {
            id: "tabouzeid/heimdall",
            title: "Heimdall Inventory Managent System",
            description: "The Heimdall app is an inventory management system that maintains product information selected from the Best Buy API, including the quantity in inventory as well as it's purchase and sale price. The app also has the feature to input orders to buy and sell the products in inventory. This app is deployed on Heroku and uses JAWS Db in the background to store all of the product and order information.",
            imageUrl: "https://github.com/tabouzeid/heimdall/raw/master/public/img/app_screenshot.png",
            bgColor: "rgba(242, 255, 0, 0.838)",
            appUrl: "https://mysterious-falls-36558.herokuapp.com/",
        },
        {
            id: "tabouzeid/google_book_search",
            title: "Google Book Search",
            description: "This application searches google books for whatever you specify in the search field. You may save the books you find and view them later ont he 'Saved' tab. You can also remove them by clicking on the 'Remove' button in the saved page. This application has a react frontend and an express backend with a Mongo DB to persist information.",
            imageUrl: "https://github.com/tabouzeid/google_book_search/blob/master/public/assets/images/app_screenshot.png",
            bgColor: "bronze",
            appUrl: "https://radiant-crag-34329.herokuapp.com/",
        },
    ];

    return (
        <div>
            <div className="bg-color">
                <div className="container">
                    <div className="row ">
                        <section className="col-12 text-center">
                            <p id="i-am-taher">Work.</p>
                        </section>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <section className="col-12 justify-content-center text-center">
                        <img src="./assets/img/pencil.svg" className="pencil" alt="Pencil"/>
                        <p className="title">What I've been up to.</p>
                        <p>Here's a selection of some of my work.</p>
                    </section>
                </div>
            </div>
            {projectsToDisplay.map((project) => <ProjectDetail key={project.id} project={project} />)}
        </div>
    );
}

export default WorkPage;