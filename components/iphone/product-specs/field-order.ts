import type { SpecFieldKey, SpecGroupKey } from "./types";

export const groupedSpecFields: ReadonlyArray<Readonly<{
  group: SpecGroupKey;
  fields: ReadonlyArray<SpecFieldKey>;
}>> = [
  {
    group: "design",
    fields: ["availability", "finishes", "dimensions", "display", "durability"],
  },
  {
    group: "performance",
    fields: ["chip", "memory", "capacity", "authentication", "compatibility"],
  },
  {
    group: "media",
    fields: ["camera", "frontCamera", "audio", "sensors"],
  },
  {
    group: "power",
    fields: ["battery", "charging", "ports", "connectivity", "accessories"],
  },
];
