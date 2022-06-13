module.exports = ({ env }) => {
  return {
    plugins: {
      'cssnano': env === 'development' ? false : { preset: 'default' },
    }
  }
}
