export const __POLL_CHECKING_INTERVAL = 250;
export const __SETINTERVAL_REGISTERED = (() => {
  let __REGISTERED = false;
  let __CONTER = 0;
  let __REGISTRATION_ID = null;
  let getRegisterStatus = () => {
    return __REGISTERED;
  };
  let resetRegisterStatus = (value = false) => {
    __REGISTERED = value;
  };
  let incCounter = () => {
    __CONTER += 1;
  };
  let decCounter = () => {
    __CONTER -= 1;
  };
  let getCounter = () => {
    return __CONTER;
  };
  return {
    getRegisterStatus: getRegisterStatus,
    setRegisterStatus: resetRegisterStatus,
    getCounter: getCounter,
    incCounter: incCounter,
    decCounter: decCounter,
    getRegistrationId: () => {
      return __REGISTRATION_ID;
    },
    setRegistrationId: __ID => {
      __REGISTRATION_ID = __ID;
    }
  };
})();
