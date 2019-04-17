import { module, test } from 'qunit';
import { visit } from '@ember/test-helpers';
import { pauseTest, resumeTest } from '@ember/test-helpers';
import { createBand, createSong, goToSongForBand } from 'rarwe/tests/helpers/custom-helpers';
import { setupApplicationTest } from 'ember-qunit';
import setupMirageTest from 'ember-cli-mirage/test-support/setup-mirage';

module('Acceptance | Bands', function(hooks) {
  setupApplicationTest(hooks);
  setupMirageTest(hooks);

  test('List bands', async function(assert) {
    this.server.create('band', { name: 'Radiohead' });
    this.server.create('band', { name: 'Long Distance Calling' });
    await visit('/');
    assert.dom('[data-test-rr=band-link]').exists({count: 2}, 'All band links are rendered');
    assert.dom('[data-test-rr=band-list-item]:last-child').hasText('Long Distance Calling', 'The other band link contains the band name')
  });

  test('Create a band', async function(assert) {
    this.server.create('band', { name: 'Royal Blood' });
    await visit('/');
    await createBand('Caspian');
    assert.dom('[data-test-rr=band-list-item]').exists({count: 2}, 'OK')
    assert.dom('[data-test-rr=songs-nav-item] > .active').hasText('Songs', 'Song tab active')
  });

});

module('Acceptance | Songs', function(hooks) {
  setupApplicationTest(hooks);
  setupMirageTest(hooks);

  test('Create a song', async function(assert) {
    server.logging = true;
    let band = this.server.create('band', { name: 'Royal Blood', description: "foo bar" });
    await visit('/');
    await goToSongForBand(band.id);
    await createSong('Avant');
    assert.dom('[data-test-rr=song-list-item]').exists({count: 1}, 'OK');
  });
});
