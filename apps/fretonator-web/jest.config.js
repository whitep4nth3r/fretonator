module.exports = {
  name: 'fretonator-web',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/fretonator-web',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
