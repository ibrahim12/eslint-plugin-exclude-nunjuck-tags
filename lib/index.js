module.exports = {
  processors: {
    '.js': {
      preprocess: (text, filename) => [text.replace(/{%.*%}/g, '0')],
      postprocess: (messages, filename) => messages[0]
    }
  }
}

