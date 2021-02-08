class Formatter {
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  static sanitize(string) {
    return string.replace(/[.!*+?^@#${}()|[\]\\]/g, "")
  }

  static titleize(string) {
    let newString = string.toLowerCase()
      .split(' ')
      .map((s) => s.charAt(0).toUppercase() + s.substring(1))
      .join(' ');
  }
}


