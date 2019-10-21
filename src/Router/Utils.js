export const getCurrentUrl = () => {
  return window.location.pathname;
};

export const setMetaHeaders = metas => {
  const { title } = metas || {};
  if (title) document.title = title;
};

export const setWindowTitle = (title = "Application") => {
  document.title = title;
};

export const getBrowserHistory = () => {
  return window.history;
};

const __stringMatching = (regExCaSen = "", currentCaSen = "") => {
  let regEx = regExCaSen.toLowerCase();
  let current = currentCaSen.toLowerCase();

  if (regEx.startsWith(":")) {
    return true;
  } else if (regEx === current) {
    return true;
  } else {
    return false;
  }
};

const __pathMatching = (regex, current, exact = false) => {
  const regExSplit = (regex || "").split("/").filter(Boolean);
  const currentSplit = (current || "").split("/").filter(Boolean);
  if (exact) {
    if (regExSplit.length === currentSplit.length) {
      let result = true;
      for (let k = 0; result && k < regExSplit.length; k++) {
        result = result && __stringMatching(regExSplit[k], currentSplit[k]);
      }
      return result;
    } else {
      return false;
    }
  } else {
    let result = true;
    for (let k = 0; result && k < regExSplit.length; k++) {
      result = result && __stringMatching(regExSplit[k], currentSplit[k]);
    }
    return result;
  }
};

export const pathMatch = (compare, current, exact = false) => {
  if (!compare) {
    return true;
  }

  current = current || getCurrentUrl() || "";
  return __pathMatching(compare, current, exact);
};

export const uniqueID = ((start = 0) => {
  return () => {
    return start++;
  };
})(0);
