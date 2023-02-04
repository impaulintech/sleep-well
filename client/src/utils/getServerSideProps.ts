export const UserSignInOutAuthCheck = async ({ req }: any) => {
  const token = req?.cookies["token"];
  const path = req?.url;

  const privateRoutes = [
    path.includes("welcome"),
    path.includes("pre-question"),
    path.includes("main-question"),
    path.includes("recommendations"),
    path.includes("check-list"),
  ];

  const publicRoutes = [path.includes("login"), path.includes("register")];

  if (publicRoutes.includes(true) && !token) return { props: {} };

  if (!token) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  if (privateRoutes.includes(true) && !token) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  if (publicRoutes.includes(true) && token) {
    return {
      redirect: {
        destination: "/welcome",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
};
