import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    searchWiki() {
      this.sendAction('search', this.get('q'));
    }
  }
});
