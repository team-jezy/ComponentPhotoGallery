import ImageItem from '../src/components/ImageItem.js';
const test = QUnit.test;

test('template', assert => {
    //arrange
    const image = {
        url: 'https://images.unsplash.com/photo-1518946222227-364f22132616?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=4836a6fca62e7dce9324346bacfde085&auto=format&fit=crop&w=2534&q=80',
        title: 'Lego',
        description: 'Lego description'
    };
    const expected = /*html*/`
    <li>
        <h2>Lego</h2>
        <img src="https://images.unsplash.com/photo-1518946222227-364f22132616?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=4836a6fca62e7dce9324346bacfde085&auto=format&fit=crop&w=2534&q=80">
        <p>Lego description</p>
    </li>
`;

    //act
    const imageItem = new ImageItem({ image });
    const html = imageItem.renderTemplate();
    //assert
    assert.htmlEqual(html, expected);

});