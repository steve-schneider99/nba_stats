StatTracker.TeamsController = Ember.ArrayController.extend({
  actions: {
    create: function() { // <-- creates new team, create is linked in form
      var newTeam = this.store.createRecord('team', {
        teamName: this.get('teamName')
      });
      newTeam.save();
      this.set('teamName', ''); // <-- clears form after submission
    }
  }
});
