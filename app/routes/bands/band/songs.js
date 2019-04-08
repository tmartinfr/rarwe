import Route from '@ember/routing/route';

export default Route.extend({
    // model() {
    //     return this.modelFor('bands.band');
    // }
    resetController(controller) {
        controller.setProperties({
            'isAddingSong': false,
            'newSongName': '',
        });
    },
    actions: {
        didTransition() {
            let band = this.modelFor('bands.band');
            document.title = `${band.name} songs - Rock & Roll`;
        }
    }
});
