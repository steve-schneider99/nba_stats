StatTracker.TeamsController = Ember.ArrayController.extend({
  actions: {
    create: function() {
      var newTeam = this.store.createRecord('team', {
        teamName: this.get('teamName')
      });
      newTeam.save();
      alert("Got to new team var")
      this.transitionToRoute('/');
    }
  }


});
