module.exports = {
    format_date: date => {
        // same logic as before... 
    },
    format_plural: (word, amount) => {
        if (amount !== 1) {
            reutn `${word}s`;
        }



      return word;
    }
  }

  format_url: url => {
      return url 
        .replace('https://', '')
        .replace('https://', '')
        .replace('www.', '')
        .split('/')[0]
        .split('?')[0];
  };