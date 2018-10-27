import html from '../html.js';
//import Header from './header.js';
//import Footer from './footer.js';

let template = function() {
    return html`
        <main class="grid">
            <div class="content">
                <div class="welcome-text">
                    <p><span>Landing page for Spooky Quiz<span></p>
                </div>
                <div class="button-container">
                    <button>Get Started</button>
                </div>
            </div>
            <div class="picture">
                <div class="picture-container">
                </div>
            </div>
        </main>
    `;
};

export default class App {
    constructor() {

    }

    render() {
        let dom = template();
        let main = dom.querySelector('main');

        //let header = new Header();
        //let footer = new Footer();

        //main.appendChild(header.render());
        //main.appendChild(footer.render());

        return dom;
    }
}
