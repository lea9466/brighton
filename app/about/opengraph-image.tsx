// The About route sets its own `openGraph` object, which replaces the root
// one — so it needs its own image convention file. Reuse the site-wide card.
export { default, alt, size, contentType } from "../opengraph-image";
