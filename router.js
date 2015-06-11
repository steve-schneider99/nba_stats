StatTracker.Router.map(function() {
  this.resource('teams', {path: '/'});
  this.resource('team', {path: ':team_id'}, function() {
    this.resource('new-player');
    this.resource('shots');
  });
});
