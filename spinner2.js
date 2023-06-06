['|', '/', '-', '\\', '|'].forEach((character, index) => {
  setTimeout(() => {
    process.stdout.write(`\r ${character}    `);
  }, 300 * index);
});