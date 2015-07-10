Router.configure({
  layoutTemplate : 'layout',
  loadingTemplate: 'loading'
});

Router.route('/', {controller: 'ProductsController'});

ProductsController = RouteController.extend({
  template: 'products',

  waitOn: function()
  {
    return Meteor.subscribe('products');
  },

  data: function()
  {
    return {products: Products.find({})};
  }
});