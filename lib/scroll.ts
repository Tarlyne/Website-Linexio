/**
 * Smooth scrolls to a specific element ID with custom duration and easing.
 * Handles the offset for fixed headers automatically.
 * 
 * @param targetId The ID of the DOM element to scroll to
 * @param duration Duration in milliseconds (default: 1200ms)
 */
export const smoothScrollTo = (targetId: string, duration: number = 800) => {
  const target = document.getElementById(targetId);
  if (!target) return;

  // Header offset calculation (approx. height of navbar + some breathing room)
  const headerOffset = 80;

  const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerOffset;
  const startPosition = window.pageYOffset;
  const distance = targetPosition - startPosition;
  let startTime: number | null = null;

  // Easing function: easeOutExpo (starts immediately, decelerates gently)
  const ease = (t: number, b: number, c: number, d: number) => {
    return (t === d) ? b + c : c * (-Math.pow(2, -10 * t / d) + 1) + b;
  };

  const animation = (currentTime: number) => {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;

    // Calculate new position
    const run = ease(timeElapsed, startPosition, distance, duration);

    window.scrollTo({ top: run, behavior: 'auto' });

    if (timeElapsed < duration) {
      requestAnimationFrame(animation);
    }
  };

  requestAnimationFrame(animation);
};