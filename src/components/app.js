import images from '../../data/data.js';
import Component from './Component.js';
import Header from './Header.js';
import ImageList from './ImageList.js';
import AddImage from './AddImage.js';
import Filter from './Filter.js';
import filterImages from '../filter-function.js';

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

        const addImage = new AddImage({
            onAdd: (newImage) => {
                images.unshift(newImage);
                imageList.update({ images });
                filter.update();
            }

        });
        const addImageDOM = addImage.render();
        main.appendChild(addImageDOM);

        const imageList = new ImageList(props);
        const imageListDom = imageList.render();
        main.appendChild(imageListDom);

        const filter = new Filter({
            onFilter: filter => {
                const filtered = filterImages(images, filter);
                imageList.update({ images: filtered });
            }
        });
        dom.insertBefore(filter.render(), main);


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