function filterImages(images, filter) {

    return images.filter(image => {

        const horns = image.horns >= filter.horns;
        const title = image
            .title
            .toLowerCase()
            .includes(filter.text.toLowerCase());
        const keyword = image
            .keyword
            .toLowerCase()
            .includes(filter.text.toLowerCase());
        const description = image
            .description
            .toLowerCase()
            .includes(filter.text.toLowerCase());
        return horns && (title || keyword || description);
    });

}
export default filterImages;