import { ref, computed, onMounted, onUnmounted } from "vue";
import { isTransitioning } from "./useProjectTransition";

const normalizePath = (pathname: string) => {
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");

  if (base && pathname.startsWith(base)) {
    const pathWithoutBase = pathname.slice(base.length) || "/";
    return pathWithoutBase.startsWith("/") ? pathWithoutBase : `/${pathWithoutBase}`;
  }

  return pathname || "/";
};

export const path = ref(typeof window !== "undefined" ? normalizePath(window.location.pathname) : "/");

export const isProjectRoute = (path: string) => {
  return path.match(/^\/project\/([^/]+)$/);
};

export const projectId = computed(() => {
  const match = isProjectRoute(path.value);
  return match ? match[1] : null;
});

export const projectVisible = computed(() => {
  return projectId.value !== null && !isTransitioning.value;
});

export const recentProject = ref<string | null>(null);

export const recentProjectId = computed(() => {
  if (projectId.value) {
    recentProject.value = projectId.value;
  }
  return recentProject.value;
});

let historyPatched = false;

function patchHistory() {
  if (historyPatched || typeof window === "undefined") return;
  historyPatched = true;

  const wrap = (key: "pushState" | "replaceState") => {
    const original = history[key];
    history[key] = function (...args) {
      // @ts-ignore
      original.apply(this, args);

      queueMicrotask(() => {
        window.dispatchEvent(new Event("route-change"));
      });
    };
  };

  wrap("pushState");
  wrap("replaceState");
}

export function useRouteObserver() {
  const update = () => {
    const newPath = normalizePath(window.location.pathname);
    if (newPath !== path.value) {
      path.value = newPath;
    }
  };

  onMounted(() => {
    patchHistory();
    update();

    window.addEventListener("popstate", update);
    window.addEventListener("route-change", update);
  });

  onUnmounted(() => {
    window.removeEventListener("popstate", update);
    window.removeEventListener("route-change", update);
  });

  return {
    path,
    projectId,
    recentProjectId,
  };
}
