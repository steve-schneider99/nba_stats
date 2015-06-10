StatTracker.TeamsRoute = Ember.Route.extend({
  // controllerName: 'teams',
  renderTemplate: function() {
    this.render('teams');
  }, model: function() {
    return this.store.find('team');
  }
});
