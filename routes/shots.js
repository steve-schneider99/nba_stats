StatTracker.ShotsRoute = Ember.Route.extend({
  needs: ['player'],
  model: function(params) {
    var player = this.modelFor('player');
    var shot = this.store.createRecord('shotAttempt');
    player.get('shotAttempts').then(function(shotAttempts) {
      shotAttempts.pushObject(shot);
    });
    return shot;
  }
});
