import {
  __POP_STATE_SUPPORTED,
  __ONLY_POLLING_SUPPORTED,
  __POLL_CHECKING_INTERVAL
} from "./Constants";
import { getCurrentUrl } from "./Utils";

export const __IdentifyType = () => {
  if ("onpopstate" in window) {
    return __POP_STATE_SUPPORTED;
  } else {
    return __ONLY_POLLING_SUPPORTED;
  }
};

export const requestChange = callback => {
  let type = __IdentifyType();
  if (type === __POP_STATE_SUPPORTED) {
    callback();
  } else {
  }
};

export const pollIntervalCheckingUrl = (() => {
  let __thenUrl = getCurrentUrl();
  return () => {
    let q = __thenUrl !== getCurrentUrl();
    if (q) __thenUrl = getCurrentUrl();
    return q;
  };
})();

const __attachListener = ({ type, callBack }) => {
  if (type === __POP_STATE_SUPPORTED) {
    window.addEventListener("popstate", callBack);
    return true;
  } else {
    return setInterval(() => {
      if (pollIntervalCheckingUrl()) {
        console.log("YES");
        callBack();
      } else {
        console.log("NO");
      }
    }, __POLL_CHECKING_INTERVAL);
  }
};

const __detechListener = ({ type, callBack, result }) => {
  if (type === __POP_STATE_SUPPORTED) {
    window.removeEventListener("popstate", callBack);
  } else {
    return clearInterval(result);
  }
};

class Register {
  constructor() {
    this.__listeners = 0;
    this.callBacks = {};
  }
  addListener({ routeId, callBack, type }) {
    type = type || __IdentifyType();
    let temp = { type, callBack };
    temp["result"] = __attachListener(temp);
    this.callBacks[routeId] = temp;
  }

  removeListener(routeId) {
    __detechListener(this.callBacks[routeId]);
    delete this.callBacks[routeId];
  }
}

const REGISTRATION_HANDLER = new Register();

export default REGISTRATION_HANDLER;
