StatTracker.Team = DS.Model.extend({
  teamName: DS.attr(),
  players: DS.hasMany('players', {async: true})
});
