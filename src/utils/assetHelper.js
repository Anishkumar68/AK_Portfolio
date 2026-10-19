// Asset and Resume resolver utility for standalone Vite frontend

// Eagerly glob all asset files from src/assets so Vite bundles and resolves them automatically
const assetModules = import.meta.glob("../assets/*", {
	eager: true,
	query: "?url",
	import: "default",
});

// Map base filenames (e.g. "logoak.png", "ak_pic.png") to their Vite bundled URLs
const assetMap = {};
for (const [pathKey, url] of Object.entries(assetModules)) {
	const filename = pathKey.split("/").pop();
	if (filename) {
		assetMap[filename.toLowerCase()] = url;
		assetMap[decodeURIComponent(filename).toLowerCase()] = url;
	}
}

// Minimal safe SVG fallback avatar if an image cannot be found
export const DEFAULT_FALLBACK_AVATAR =
	"data:image/svg+xml;utf8," +
	encodeURIComponent(`
<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 200 200">
  <rect width="100%" height="100%" fill="#141419"/>
  <circle cx="100" cy="80" r="40" fill="#2a2a35"/>
  <path d="M40 180 c0 -35 25 -60 60 -60 s60 25 60 60" fill="#2a2a35"/>
  <text x="100" y="185" text-anchor="middle" fill="#c5ff41" font-family="sans-serif" font-size="16" font-weight="bold">AK</text>
</svg>
`);

// Minimal safe SVG fallback project banner
export const DEFAULT_FALLBACK_BANNER =
	"data:image/svg+xml;utf8," +
	encodeURIComponent(`
<svg xmlns="http://www.w3.org/2000/svg" width="600" height="340" viewBox="0 0 600 340">
  <rect width="100%" height="100%" fill="#141419"/>
  <rect x="20" y="20" width="560" height="300" rx="12" fill="#1c1c24" stroke="rgba(255,255,255,0.08)"/>
  <text x="300" y="170" text-anchor="middle" fill="#9ca3af" font-family="sans-serif" font-size="20" font-weight="600">Project Preview</text>
</svg>
`);

/**
 * Robust image path resolver:
 * 1. If path is a remote URL (http/https/data:), returns as is.
 * 2. Checks bundled assets in src/assets/ (matching filename even if path was written as "/logoak.png", "src/assets/logoak.png", or "logoak.png").
 * 3. Fallbacks to public/ path respecting Vite's base URL (essential for GitHub Pages).
 * 4. Graceful fallback if path is empty.
 */
export function resolveImage(path, fallback = DEFAULT_FALLBACK_AVATAR) {
	if (!path || typeof path !== "string") {
		return fallback;
	}

	const trimmed = path.trim();
	if (
		trimmed.startsWith("http://") ||
		trimmed.startsWith("https://") ||
		trimmed.startsWith("data:")
	) {
		return trimmed;
	}

	// Extract basename (e.g. "logoak.png" from "/logoak.png" or "src/assets/logoak.png")
	const cleanName = trimmed.split("/").pop()?.trim() || "";
	const lowerName = cleanName.toLowerCase();
	const decodedName = decodeURIComponent(lowerName);

	// Check if the image exists in src/assets/
	if (assetMap[lowerName]) {
		return assetMap[lowerName];
	}
	if (assetMap[decodedName]) {
		return assetMap[decodedName];
	}

	// Otherwise resolve from public directory with base URL
	const base = import.meta.env.BASE_URL || "/";
	const normalizedBase = base.endsWith("/") ? base : `${base}/`;
	const normalizedPath = trimmed.startsWith("/") ? trimmed.slice(1) : trimmed;

	// Encode URI components safely (handling filenames with spaces like "git code pushing map.png")
	const encodedPath = normalizedPath
		.split("/")
		.map((part) => encodeURIComponent(part))
		.join("/");

	return `${normalizedBase}${encodedPath}`;
}

/**
 * Robust Resume Link helper:
 * Supports Google Drive URLs, Dropbox, Cloud storage, or local PDF paths.
 */
export function getResumeInfo(personal) {
	const rawUrl = (personal?.resumeUrl || personal?.resumePdf || "").trim();
	const isExternal =
		rawUrl.startsWith("http://") || rawUrl.startsWith("https://");
	const isDrive = rawUrl.includes("drive.google.com");

	return {
		url: rawUrl,
		isExternal,
		isDrive,
		filename: personal?.resumeFilename,
	};
}
