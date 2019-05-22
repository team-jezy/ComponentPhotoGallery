import Component from './Component.js';

class AddImage extends Component {

    render() {
        const form = this.renderDOM();
        const onAdd = this.props.onAdd;

        form.addEventListener('submit', event => {
            event.preventDefault();

            const formData = new FormData(form);

            const newImage = {
                title: formData.get('title'),
                url: formData.get('url'),
                description: formData.get('description')
            };

            onAdd(newImage);

        });

        return form;
    }

    renderTemplate() {
        return /*html*/`
            <form class="add-image">
                <label>Title: <input name="title"></label>
                <label>URL: <input type="url" name="url"></label>
                <label>Description: <input name="description"></label>
                <button>Submit</button>
            </form>
        `;
    }
}

export default AddImage;