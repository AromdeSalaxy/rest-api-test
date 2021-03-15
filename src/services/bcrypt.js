const bcrypt = require("bcrypt"); // require bcrypt

const saltRounds = 10; //  Data processing speed

export const checkPassword = (originPass, hashPass) => {
  return new Promise((resolve) => {
    bcrypt.compare(originPass, hashPass, function (err, result) {
      // Compare
      // if passwords match
      if (result) {
        resolve(true);
      }
      // if passwords do not match
      else {
        resolve(false);
      }
    });
  });
};

export const hashPassword = (password) => {
  return new Promise((resolve, rejects) => {
    bcrypt.hash(password, saltRounds, function (err, hash) {
      if (err) {
        rejects(err);
      }
      resolve(hash);
    });
  });
};
