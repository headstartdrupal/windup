(function ($) {

  'use strict';

  /**
   * Example function.
   * @see https://www.drupal.org/node/304258#drupal-behaviors
   */
  Drupal.behaviors.sayHello = {
    attach: function (context) {
      console.log('Hello, world!');
    }
  };

})(jQuery);
