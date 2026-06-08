const withBase = (path: string) => {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");

  if (!base) {
    return normalizedPath;
  }

  return normalizedPath === "/" ? `${base}/` : `${base}${normalizedPath}`;
};

export const useRouter = () => {
  const push = (path: string) => {
    if (typeof window !== "undefined") {
      window.history.pushState(null, "", withBase(path));
    }
  };

  const replace = (path: string) => {
    if (typeof window !== "undefined") {
      window.history.replaceState(null, "", withBase(path));
    }
  };

  const back = () => {
    if (typeof window !== "undefined") {
      window.history?.back?.();
    }
  };

  return {
    push,
    replace,
    back,
  };
};
