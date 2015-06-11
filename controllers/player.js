StatTracker.PlayerController = Ember.ObjectController.extend({
  actions: {
    made: function() {
      this.set('shotAttempts', this.get('shotAttempts') + 1);
      this.set('shotsMade', this.get('shotsMade') + 1);
    },
    missed: function() {
      this.set('shotAttempts', this.get('shotAttempts') + 1);
    }
  }
});
