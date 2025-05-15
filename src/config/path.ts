export const paths = {
  home: {
    getHref: () => "/",
  },

  auth: {
    register: {
      getHref: (redirectTo?: string | null | undefined) =>
        `/auth/register${
          redirectTo ? `?redirectTo=${encodeURIComponent(redirectTo)}` : ""
        }`,
    },
    login: {
      getHref: (redirectTo?: string | null | undefined) =>
        `/auth/login${
          redirectTo ? `?redirectTo=${encodeURIComponent(redirectTo)}` : ""
        }`,
    },
    confirm: {
      pending: {
        getHref: (redirectTo?: string | null | undefined) =>
          `/auth/confirm/pending${
            redirectTo ? `?redirectTo=${encodeURIComponent(redirectTo)}` : ""
          }`,
      },
      success: {
        getHref: (redirectTo?: string | null | undefined) =>
          `/auth/confirm/success${
            redirectTo ? `?redirectTo=${encodeURIComponent(redirectTo)}` : ""
          }`,
      },
    },
    reset: {
      forgotPassword: {
        getHref: (redirectTo?: string | null | undefined) =>
          `/auth/forgot-password${
            redirectTo ? `?redirectTo=${encodeURIComponent(redirectTo)}` : ""
          }`,
      },
      resetPassword: {
        getHref: (redirectTo?: string | null | undefined) =>
          `/auth/reset-password${
            redirectTo ? `?redirectTo=${encodeURIComponent(redirectTo)}` : ""
          }`,
      },
    },
  },

  app: {
    root: {
      getHref: () => "/app",
    },
  },
};
