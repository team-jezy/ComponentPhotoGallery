import Component from './Component.js';

class Filter extends Component {

    render() {
        const dom = this.renderDOM();
        const input = dom.querySelector('input');
        const hornsInput = dom.querySelector('.horns-input');
        input.addEventListener('input', () => {
            this.props.onFilter({ 
                text: input.value,
                horns: ''
            }); 
        });

        hornsInput.addEventListener('input', () => {
            this.props.onFilter({ 
                text: '',
                horns: hornsInput.value
            }); 
        });
        return dom;
    }

    renderTemplate() {
        return /*html*/`
        <section class="filter-section">
            Search By Keyword: <input class="filter" name="filter">
            Or Search By Horn #: <input class="horns-input" type="number"> 
        </section>
        `;
    }
}

export default Filter;