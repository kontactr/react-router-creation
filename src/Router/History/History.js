import { getBrowserHistory } from "../Utils";

class History {
  constructor() {
    this.__generatedTime = new Date().toUTCString();
    //this.__history = getBrowserHistory();
  }

  push({ to, title = "Application", data = {} }) {
    let __history = getBrowserHistory();
    __history.pushState(data, title, to);
  }

  replace({ to, title = "Application", data = {} }) {
    let __history = getBrowserHistory();
    __history.replaceState(data, title, to);
  }

  get currentState() {
    let __history = getBrowserHistory();
    return __history.state || {};
  }
}

export default new History();
