import images from '../../data/data.js';
import Component from './Component.js';
import Header from './Header.js';
import ImageList from './image-list.js';

class App extends Component {

    render() {
        const dom = this.renderDOM();

        const header = new Header();
        const headerDOM = header.render();
        const main = dom.querySelector('main');
        dom.insertBefore(headerDOM, main);
        
        const props = {
            images: images
        };

        const imageList = new ImageList(props);
        const imageListDom = imageList.render();
        main.appendChild(imageListDom);


        return dom;
    }

    renderTemplate() {
        return /*html*/`
            <div>
                <main>
                </main>
            </div>
        `;
    }
}

export default App;