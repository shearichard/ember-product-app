import Ember from 'ember';

export default Ember.Controller.extend({
    categoryName: 'Dri',

    upperCaseCategoryName: Ember.computed('categoryName', function(){
        return this.get('categoryName').toUpperCase();
    }),

    categoryNameChanged: Ember.observer('categoryName', function(){
        console.log('categoryName observer was called');
    }),

    isDisabled: Ember.computed('categoryName', function(){
        return this.get('categoryName') === '';
    })
});
