const {
  PHASE_DEVELOPMENT_SERVER,
  PHASE_PRODUCTION_SERVER,
} = require("next/constants");

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      reactStrictMode: true,
      env: {
        mongodb_user: "",
        mongodb_password: "",
        mongodb_cluster: "",
        mongodb_database: "",
      },
    };
  }

  return {
    reactStrictMode: true,
    env: {
      mongodb_user: "",
      mongodb_password: "",
      mongodb_cluster: "",
      mongodb_database: "",
    },
  };
};
