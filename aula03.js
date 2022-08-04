function validade(username, password) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (username === 'rayane123' && password === '123456') {
        resolve('success');
      } else {
        reject('failed');
      }
    }, 5000);
  });
}

function loadPlaylist() {
  //
}

async function login() {
  try {
    let username = 'rayane1323';
    let password = '123456';
    const validateResult = await validade(username, password);
    console.log(validateResult);
    if (validateResult === 'success') {
      console.log('logado');
      loadPlaylist();
    } else {
      console.error('usauario ou senha incorreta');
    }
  } catch (err) {
    console.log(err);
  }
}

login();
