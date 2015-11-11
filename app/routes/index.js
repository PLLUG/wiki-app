import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    search(q) {
      let promise = Ember.$.ajax({
        url: 'http://en.wikipedia.org/w/api.php',
        dataType: 'jsonp',
        data: {
          action: 'opensearch',
          format: 'json',
          search: q
        }
      }).promise();

      promise.then((terms) => {
        this.controller.set('items', terms[3]);
      });
    }
  }
});
