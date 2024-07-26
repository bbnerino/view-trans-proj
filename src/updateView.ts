export const updateView = (callback: () => void) => {
  if (!document.startViewTransition) {
    callback();
    return;
  }

  document.startViewTransition(callback);
}; 
