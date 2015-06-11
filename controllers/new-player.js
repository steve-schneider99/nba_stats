StatTracker.NewPlayerController = Ember.ObjectController.extend({
  needs: ['team'],
  actions: {
    add: function() {
      var newPlayer = this.store.createRecord('player', {
        name: this.get('playerName'),
        shotAttempts: 0,
        shotsMade: 0,
        shotPercentage: 0
      });
      newPlayer.save();


      var controller = this;
      team.get('players').pushObject(newPlayer);
      newPlayer.get('team').then(function(team) {
        team.save();
      })

      this.transitionToRoute('team', team.id)
    }
  }
});
