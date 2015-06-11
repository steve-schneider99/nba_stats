StatTracker.ShotAttempt = Ember.ObjectController.extend({
  player: DS.belongsTo('player', {async: true}),
  shots: DS.attr()
});
