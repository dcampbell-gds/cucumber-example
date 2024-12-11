module.exports = {
  default: {
    // paths: ['test/ui/features'],
    requireModule: ['ts-node/register'],
    require: ['features/step_definitions/**/*.ts'],
  },
}