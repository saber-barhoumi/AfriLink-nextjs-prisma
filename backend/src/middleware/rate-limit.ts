export function rateLimit() {
  // Placeholder for rate limiter; integrate Redis-backed limiter in production
  return {
    check: (_key: string) => true,
  }
}
