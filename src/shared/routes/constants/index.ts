export const routesName = {
  PUBLIC: {
    LOGIN: "/login",
    STORAGE: "/storage",
  },
  ERROR: {
    UNAUTHORIZED: "/unauthorized", // 403
  },
  PRIVATE: {
    DASHBOARD: "/dashboard",
    PROFILE: "/profile",
    OFFICER: {
      OFFICER_INDEX: "/officer",
    },
    ADMIN: {
      DASHBOARD: "/admin/dashboard",
      OFFICER: {
        OFFICER_INDEX: "/admin/officer",
      },
    },
  },
};
