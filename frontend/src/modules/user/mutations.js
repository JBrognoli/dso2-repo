const UPDATE_BASE_SNACKBAR = (state, payload) => {
  state.baseSnackbar = payload;
};

const UPDATE_DRAWER = (state) => {
  state.navDrawer = !state.navDrawer;
};

const UPDATE_STATUS = (state, payload) => {
  state.logged = payload;
};

const UPDATE_LOGIN = (state) => {
  state.logged = true;
};

const UPDATE_LOGOUT = (state) => {
  state.logged = false;
};

const UPDATE_USER = (state, payload) => {
  state.userInfo = payload;
};

const UPDATE_THEME = (state, payload) => {
  state.darkTheme = payload;
}


export {
  UPDATE_BASE_SNACKBAR,
  UPDATE_DRAWER,
  UPDATE_LOGOUT,
  UPDATE_LOGIN,
  UPDATE_STATUS,
  UPDATE_USER,
  UPDATE_THEME
}
