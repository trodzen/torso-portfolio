var PageHeaderView = require('./widgets/page-header/PageHeaderView');

/**
 * View for the portfolio main nav
 */

module.exports = new (PageHeaderView.extend({
  authorName: 'Todd Rodzen',
  authorPhoto: './assets/img/author.jpg',
}))();