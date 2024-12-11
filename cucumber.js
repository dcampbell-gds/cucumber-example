module.exports = {
  default: {
    paths: ['test/ui/features'],
    requireModule: ['ts-node/register'],
    require: ['test/ui/support/setup.ts', 'test/ui/features/step_definitions/**/*.ts'],
  },
}