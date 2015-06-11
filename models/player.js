StatTracker.Player = DS.Model.extend({
  team: DS.belongsTo('team', {async: true}),
  playerName: DS.attr(),
  shotAttempts: DS.attr(),
  shotsMade: DS.attr(),
  shotPercentage: DS.attr()
});
