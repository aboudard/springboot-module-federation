const { share, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

  name: 'mfe1',

  exposes: {
    './orders': './src/app/orders/orders.module.ts',
    './plans': './src/app/plans/plans.module.ts',
  },

  // Explicitly share packages:
  shared: share({
    "@angular/core": { singleton: true, strictVersion: true, requiredVersion: 'auto' },
    "@angular/common": { singleton: true, strictVersion: true, requiredVersion: 'auto' },
    "@angular/common/http": { singleton: true, strictVersion: true, requiredVersion: 'auto' },
    "@angular/router": { singleton: true, strictVersion: true, requiredVersion: 'auto' },
    "@ngrx/store": { singleton: true, strictVersion: true, requiredVersion: 'auto' },
    "core": { singleton: true, strictVersion: true, requiredVersion: 'auto' },
  }),

});
