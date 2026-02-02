function nameGenerator() {
  return {
    names: [
      "Alex",
      "Jordan",
      "Taylor",
      "Morgan",
      "Chris",
      "Jamie",
      "Riley",
      "Casey",
      "Avery",
      "Quinn"
    ],
    currentName: "",

    getRandomName() {
      const randomIndex = Math.floor(Math.random() * this.names.length);
      this.currentName = this.names[randomIndex];
    }
  };
}
