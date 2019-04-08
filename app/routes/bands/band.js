import Route from '@ember/routing/route';
// import { isEmpty } from '@ember/utils';

export default Route.extend({
    model(params) {
        let bands = this.modelFor('bands');
        return bands.findBy('slug', params.slug);
    },
});
