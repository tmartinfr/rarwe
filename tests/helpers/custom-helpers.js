import { click, fillIn } from '@ember/test-helpers';

export async function createBand(name) {
    await click('[data-test-rr=new-band-label]');
    await fillIn('[data-test-rr=new-band-input]', name);
    return click('[data-test-rr=new-band-button]');
}

export async function createSong(name) {
    await click('[data-test-rr=new-song-label]');
    await fillIn('[data-test-rr=new-song-input]', name);
    return click('[data-test-rr=new-song-button]');
}

export async function goToSongForBand() {
    await click('[data-test-rr=band-link]');
    await click('[data-test-rr=songs-nav-item] > a');
}
