StatTracker.TeamController = Ember.ObjectController.extend({
  isEditing: false,
  actions: {
    edit: function() {
      this.set('isEditing', true);
    },
    save: function() {
      this.set('isEditing', false);
    },
    delete: function() {
      if(confirm("Are you sure? This is a pretty awesome team...")) {
        this.get('model').destroyRecord();
        this.transitionToRoute('teams');
      }
    }
  }
});
