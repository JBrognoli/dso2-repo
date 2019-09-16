const UPDATE_BASE_SNACKBAR = (state, payload) => {
  state.baseSnackbar = payload;
};

const UPDATE_DRAWER = (state) => {
  state.navDrawer = !state.navDrawer;
};

const UPDATE_LOGGED = (state) => {
  state.logged = !state.logged;
}


export {
  UPDATE_BASE_SNACKBAR,
  UPDATE_DRAWER,
  UPDATE_LOGGED
}
