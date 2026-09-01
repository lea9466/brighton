type JsonLdData = Record<string, unknown>;

/**
 * Renders one or more schema.org nodes as a single `application/ld+json` script.
 * Pass an array to emit several nodes in one graph.
 */
export function JsonLd({ data }: { data: JsonLdData | JsonLdData[] }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
