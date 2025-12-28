/**
 * Smooth scrolls to a specific element ID with custom duration and easing.
 * Handles the offset for fixed headers automatically.
 * 
 * @param targetId The ID of the DOM element to scroll to
 * @param duration Duration in milliseconds (default: 1200ms)
 */
export const smoothScrollTo = (targetId: string, duration: number = 1200) => {
  const target = document.getElementById(targetId);
  if (!target) return;

  // Header offset calculation (approx. height of navbar + some breathing room)
  const headerOffset = 80;
  
  const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerOffset;
  const startPosition = window.pageYOffset;
  const distance = targetPosition - startPosition;
  let startTime: number | null = null;

  // Easing function: easeInOutCubic for a very smooth acceleration and deceleration
  // t: current time, b: start value, c: change in value, d: duration
  const ease = (t: number, b: number, c: number, d: number) => {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t * t + b;
    t -= 2;
    return c / 2 * (t * t * t + 2) + b;
  };

  const animation = (currentTime: number) => {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    
    // Calculate new position
    const run = ease(timeElapsed, startPosition, distance, duration);
    
    window.scrollTo(0, run);

    if (timeElapsed < duration) {
      requestAnimationFrame(animation);
    }
  };

  requestAnimationFrame(animation);
};