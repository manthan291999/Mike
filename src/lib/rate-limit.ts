const bucket = new Map<string, number[]>();

export function rateLimit(key: string, max = 10, windowMs = 60_000): boolean {
  const now = Date.now();
  const previous = (bucket.get(key) ?? []).filter((ts) => now - ts < windowMs);
  previous.push(now);
  bucket.set(key, previous);
  return previous.length <= max;
}
