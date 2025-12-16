const promiseOne = new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Async Task is complete");
    resolve();
  }, 1000);
});
promiseOne.then(function () {
  console.log("Resolve done");
});

const promiseTwo = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve({ username: "jatin singh", email: "jatin@google.com" });
  }, 1000);
});
promiseTwo.then(function (user) {
  console.log(user);
});

const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true;
    if (!error) {
      resolve({ username: "jatinsingh", password: "12345" });
    } else {
      reject("Something went wrong");
    }
  }, 1000);
});

promiseThree
  .then(function (user) {
    console.log(user);
    return user.username;
  })
  .then(function (username) {
    console.log(username);
  })
  .catch(function (error) {
    console.log(error);
  });
// .finally(() =>
// console.log("Either resolved or rejected, this will always run")
// );

async function consumePromiseThree() {
  try {
    const response = await promiseThree;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}
consumePromiseThree();

const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(function () {
    error = false;
    if(!error){
      console.log('async is running of promiseFour'); 
    } else {
      console.log('ERROR of promiseFour'); 
    }
  },1000);
});
promiseFour.then(function (user) {
  console.log(user);
}).catch(function(error){
  console.log(error);
  
})

async function sinkpromiseFour(){
  try {
    const result = await promiseFour
    console.log(result);
    
  } catch (error) {
    console.log(error);
    
  }
}
sinkpromiseFour()
