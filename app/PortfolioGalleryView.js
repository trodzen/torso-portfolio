var TorsoView = require('torso/modules/View'),
    galleryTemplate = require('./portfolioGalleryTemplate.hbs');
    portfolioPageHeaderView = require('./portfolioPageHeaderView');

/**
 * Gallery View
 *
 * @class GalleryView
 */
module.exports = TorsoView.extend({
  tagName: 'main',
  className: 'portfolio-page-content',
  id: 'main-content',
  moduleNamespace: 'Todd Rodzen',
  template: galleryTemplate,

  /**
   * @method initialize
   * @override
   */

  initialize: function() {
    portfolioPageHeaderView.updateHeaderIcon({
      icon: 'icon-pictures'
    });
  }
});