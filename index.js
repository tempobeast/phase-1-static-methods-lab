class Formatter {
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }
  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9-' ]+/g, "")
  }
  static titleize(string) {
    let splitStrings = string.split(" ");
    let exceptions = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from', 'is']
    let sentence = splitStrings.map(word => {
      
      let formatted = exceptions.indexOf(word) === -1 ?
      word.charAt(0).toUpperCase() + word.slice(1) : word;
    
      return formatted;
    });
    let final = sentence.join(" ")
    
    return this.capitalize(final)
  }
} 
  
Formatter.titleize("A Tale of Two Cities")
Formatter.titleize("Getting Giggles")

