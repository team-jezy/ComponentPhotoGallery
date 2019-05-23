import Component from '../components/Component.js';
import ImageItem from './ImageItem.js';

class ImageList extends Component {

    render() {
        const dom = this.renderDOM();
        const images = this.props.images;
    
        images.forEach(image => {
            const imageItem = new ImageItem({ image });
            const imageItemDOM = imageItem.render();
            dom.appendChild(imageItemDOM);
        });
        return dom;
    }

    renderTemplate() {
        return /*html*/`
        <ul id="pictures"></ul>
        `;
    }
}

export default ImageList;