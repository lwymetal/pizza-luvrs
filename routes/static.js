module.exports = handlers => ({
  method: 'GET',
  path: '//pizza-luvrs-lw.s3.us-west-1.amazonaws.com/{param*}',
  handler: {
    directory: {
      path: 'assets'
    }
  },
  options: {
    auth: false
  }
})
