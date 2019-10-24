const MinhaPromise = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("OK");
    }, 200);
  });

MinhaPromise().then((response) => {
  console.log(response);
});

async function executePromise() {
  const response = await MinhaPromise();
  console.log(response);
}

executePromise();
