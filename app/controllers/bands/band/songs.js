import Controller from '@ember/controller';
import { empty } from '@ember/object/computed';

export default Controller.extend({
    isAddingSong: false,
    newSongName: '',
    isAddButtonDisabled: empty('newSongName'),
    actions: {
        addSong() {
            this.set('isAddingSong', true);
        },
        cancelAddSong() {
            this.set('isAddingSong', false);
        },
        async saveSong(event) {
            event.preventDefault();
            let newSong = this.store.createRecord('song', {title: this.newSongName, band: this.model});
            await newSong.save()
            this.model.songs.pushObject(newSong);
            this.set('newSongName', '');
        },
        updateRating(song, rating) {
            song.set('rating', rating === song.rating ? 0 : rating);
        },
    },
});
