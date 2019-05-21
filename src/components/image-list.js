import Component from '../components/Component.js';

class ImageList extends Component {

    renderTemplate() {
        return /*html*/`
        <ul id="pictures">
            <li>
                <h2>Lego</h2>
                <img src="https://images.unsplash.com/photo-1518946222227-364f22132616?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=4836a6fca62e7dce9324346bacfde085&auto=format&fit=crop&w=2534&q=80" alt="">
                <p>Lego description</p>
            </li>
            <li>
                <h2>Dragon</h2>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Smaug_par_David_Demaret.jpg/290px-Smaug_par_David_Demaret.jpg">
                <p>Dragon description</p>
            </li>
        </ul>
        `;
    }
}

export default ImageList;