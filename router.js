StatTracker.Router.map(function() {
  this.resource('teams', {path: '/'});
  this.resource('team', {path: 'teams/:team_id'});
});
