function formatDate(dateOfBirth, language) {
  if (dateOfBirth) {
    const dateTransform = new Date(dateOfBirth);
    let dateFormat = "en-GB";
      if (language === "cy") {
        dateFormat = "cy";
      }
    return dateTransform.toLocaleDateString(dateFormat, {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  }
};

module.exports = { formatDate };
