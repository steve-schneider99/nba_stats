StatTracker.TeamController = Ember.ObjectController.extend({
  isEditing: false,
  actions: {
    edit: function() {
      this.set('isEditing', true); // <-- shows edit form
    },
    save: function() {
      this.set('isEditing', false); // <-- hides edit form
      this.get('model').save('teamName');
    },
    delete: function() {
      if(confirm("Are you sure? This is a pretty awesome team...")) {
        this.get('model').destroyRecord();
        this.transitionToRoute('teams');
      }
    }
  }
});
