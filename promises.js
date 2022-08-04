let p = new Promise((resolve, reject) => {
  let a = 1 + 2;
  if (a == 2) {
    resolve('Success');
  } else {
    reject('Failed');
  }
});

p.then((message) => {
  console.log('This is in the then ' + message);
}).catch((message) => {
  console.log('this is the catch ' + message);
});

// ex 02
// a promisse tem o objetivo de diminuir o número de callbacks

//ex02 com callback
// const userLeft = false;
// const userWatchingCatMeme = false;

function watchTutorialCallback(callback, errorCallback) {
  if (userLeft) {
    errorCallback({
      name: 'User Left',
      message: ':(',
    });
  } else if (userWatchingCatMeme) {
    errorCallback({
      name: 'User Watching Cat Meme',
      message: 'you < cat',
    });
  } else {
    callback('ThumbsUp and Subscribe');
  }
}

function successMsg(message) {
  console.log('Sucessssss: ' + message);
}

function errorMsg(error = {}) {
  console.log(error.name + ' ' + error.message);
}

watchTutorialCallback(successMsg, errorMsg);

// watchTutorialCallback((message)=>{
//     console.log('Sucess: ' + message);
// }, (error) =>{
//     console.log(error.name + ' ' + error.message)
// })

//ex02 com promisse
const userLeft = false;
const userWatchingCatMeme = true;

function watchTutorialPromise() {
  return new Promise((resolve, reject) => {
    if (userLeft) {
      reject({
        name: 'User Left',
        message: ':(',
      });
    } else if (userWatchingCatMeme) {
      reject({
        name: 'User Watching Cat Meme',
        message: 'you < cat',
      });
    } else {
      resolve('ThumbsUp and Subscribe');
    }
  });
}

watchTutorialPromise()
  .then((message) => {
    console.log('Sucess: ' + message);
  })
  .catch((error) => {
    console.log(error.name + ' ' + error.message);
  });
