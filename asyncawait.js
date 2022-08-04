function makeRequest(location) {
  return new Promise((resolve, reject) => {
    if (location === 'google') {
      resolve('google says hi');
    } else {
      reject('we can only talk to google');
    }
  });
}

function processRequest(response) {
  return new Promise((resolve, reject) => {
    console.log('processins response');
    resolve(`extra information + ${response}`);
  });
}

// makeRequest('google')
//   .then((response) => {
//     console.log('Response Recived');
//     return processRequest(response);
//   })
//   .then((processesResponse) => {
//     console.log(processesResponse);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

async function doWork() {
  try {
    const response = await makeRequest('googl');
    console.log('Response Recived');
    const processesResponse = await processRequest(response);
    console.log(processesResponse);
  } catch (err) {
    console.log(err);
  }
}

doWork();
