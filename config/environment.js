'use strict';

module.exports = function(environment) {
  let ENV = {
    modulePrefix: 'home-maker',
    environment,
    rootURL: '/',
    locationType: 'auto',
    firebase: {
      apiKey: 'AIzaSyC6y6AUnj00Gsztl2RYX24yssQ19F9m300',
      authDomain: 'homemaker-a7613.firebaseapp.com',
      projectId: 'homemaker-a7613',
      databaseURL: 'https://homemaker-a7613-default-rtdb.firebaseio.com/',
      storageBucket: 'homemaker-a7613.appspot.com',
    },  
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. EMBER_NATIVE_DECORATOR_SUPPORT: true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
    ENV['ember-cli-mirage'] = {
      enabled: true
    };  

    ENV.contentSecurityPolicy = {
      // ... other stuff here
      'connect-src': "'self' https://homemaker-a7613-default-rtdb.firebaseio.com/"
    }    
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
    ENV.APP.autoboot = false;
  }

  if (environment === 'production') {
    // here you can enable a production-specific feature
  }

  return ENV;
};
