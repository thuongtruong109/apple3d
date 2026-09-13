import type { Model } from "../product-data";
import { airPodsTechnicalSpecs } from "./airpods";
import { appleWatchTechnicalSpecs } from "./apple-watch";
import { ipadTechnicalSpecs } from "./ipad";
import { iphoneTechnicalSpecs } from "./iphone";
import { macTechnicalSpecs } from "./mac";
import type { ProductTechnicalSpec } from "./types";
import { visionTechnicalSpecs } from "./vision";

export const productTechnicalSpecs: Record<Model, ProductTechnicalSpec> = {
  ...iphoneTechnicalSpecs,
  ...ipadTechnicalSpecs,
  ...appleWatchTechnicalSpecs,
  ...airPodsTechnicalSpecs,
  ...macTechnicalSpecs,
  ...visionTechnicalSpecs,
};
