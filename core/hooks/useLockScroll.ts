const useLockScroll = () => {
  const lock = () => {
    // Get original body overflow
    // const originalStyle = window.getComputedStyle(document.body).overflow;
    // Prevent scrolling on mount
    document.body.style.overflow = "hidden";
  };

  const unlock = () => {
    // Get original body overflow
    // const originalStyle = window.getComputedStyle(document.body).overflow;
    // Prevent scrolling on mount
    document.body.style.overflow = "auto";
  };

  return { lock, unlock };
};

export default useLockScroll;
