const worksView = {
    namespace: 'works',
    beforeEnter({ next }) {
        const header = next.container.querySelector('header');
        header.classList.add('is-absolute');
    }
}

export default worksView;