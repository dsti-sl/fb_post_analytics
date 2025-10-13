/**
 * Get the full path for an asset with base path prefix
 */
export function getAssetPath(path: string): string {
  // Return absolute URLs unchanged
  if (path.startsWith('http') || path.startsWith('data:') || path.startsWith('//')) {
    return path;
  }

  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  return `${basePath}${normalizedPath}`;
}