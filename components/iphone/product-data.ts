export type LegacyModel = "pro" | "duo";
export type Iphone17Model =
  | "17-pro"
  | "17-pro-max"
  | "air"
  | "17"
  | "17e";
export type Iphone16Model =
  | "16-pro"
  | "16-pro-max"
  | "16"
  | "16-plus"
  | "16e";
export type Iphone15Model =
  | "15-pro"
  | "15-pro-max"
  | "15"
  | "15-plus";
export type Iphone14Model =
  | "14-pro"
  | "14-pro-max"
  | "14"
  | "14-plus";
export type IpadModel =
  | "ipad-pro-m5"
  | "ipad-air-m4"
  | "ipad-a16"
  | "ipad-mini-a17-pro";
export const appleWatchModelIds = [
  "apple-watch-series-11",
  "apple-watch-series-10",
  "apple-watch-series-9",
  "apple-watch-series-8",
  "apple-watch-series-7",
  "apple-watch-series-6",
  "apple-watch-series-5",
  "apple-watch-series-3",
  "apple-watch-ultra-3",
  "apple-watch-ultra-2",
  "apple-watch-ultra",
  "apple-watch-se-3",
  "apple-watch-se",
] as const;
export type AppleWatchModel = (typeof appleWatchModelIds)[number];
export const airPodsModelIds = [
  "airpods-5",
  "airpods-5-wireless",
  "airpods-4",
  "airpods-4-anc",
  "airpods-3",
  "airpods-pro-3",
  "airpods-pro-2",
  "airpods-pro",
  "airpods-max-2",
  "airpods-max",
] as const;
export type AirPodsModel = (typeof airPodsModelIds)[number];
export type MacModel =
  | "macbook-air-m5"
  | "macbook-air-15-m5"
  | "macbook-pro-m5"
  | "imac-m4"
  | "mac-mini-m6"
  | "mac-studio-m5"
  | "mac-pro-m2-ultra";
export type AppleVisionModel = "apple-vision-pro-m5";
export type NewModel =
  | Iphone17Model
  | Iphone16Model
  | Iphone15Model
  | Iphone14Model
  | IpadModel
  | AppleWatchModel
  | AirPodsModel
  | MacModel
  | AppleVisionModel;
export type Model = LegacyModel | NewModel;
export type IphoneSeries = "18" | "17" | "16" | "15" | "14";
export type IpadSeries = "ipad-pro" | "ipad-air" | "ipad" | "ipad-mini";
export type AppleWatchSeries = "apple-watch-series" | "apple-watch-ultra" | "apple-watch-se";
export type AirPodsSeries = "airpods" | "airpods-pro" | "airpods-max";
export type MacSeries = "macbook-air" | "macbook-pro" | "imac" | "mac-mini" | "mac-studio" | "mac-pro";
export type AppleVisionSeries = "apple-vision-pro";
export type Series = IphoneSeries | IpadSeries | AppleWatchSeries | AirPodsSeries | MacSeries | AppleVisionSeries;

export type Finish =
  | "burgundy"
  | "glacier"
  | "silver"
  | "black"
  | "night-sky"
  | "star-white"
  | "sky-blue"
  | "lavender"
  | "soft-pink"
  | "cosmic-orange"
  | "desert-titanium"
  | "natural-titanium"
  | "space-black"
  | "deep-purple"
  | "rose-gold"
  | "starlight"
  | "midnight"
  | "ultramarine"
  | "blue"
  | "green"
  | "purple"
  | "pink"
  | "white";

type ProductDefinition = {
  label: string;
  shortLabel: string;
  defaultFinish: Finish;
  isFoldable: boolean;
  sceneHeight: number;
  sceneRotationX?: number;
  sceneRotationY?: number;
  sceneRotationZ?: number;
  sceneOrientation?: "native";
};

export const productCatalog: Record<Model, ProductDefinition> = {
  pro: {
    label: "iPhone 18 Pro",
    shortLabel: "18 Pro",
    defaultFinish: "burgundy",
    isFoldable: false,
    sceneHeight: 6.42,
  },
  duo: {
    label: "iPhone Duo",
    shortLabel: "Duo",
    defaultFinish: "night-sky",
    isFoldable: true,
    sceneHeight: 6.1,
  },
  "17-pro": {
    label: "iPhone 17 Pro",
    shortLabel: "17 Pro",
    defaultFinish: "cosmic-orange",
    isFoldable: false,
    sceneHeight: 6.42,
  },
  "17-pro-max": {
    label: "iPhone 17 Pro Max",
    shortLabel: "17 Pro Max",
    defaultFinish: "cosmic-orange",
    isFoldable: false,
    sceneHeight: 6.99,
  },
  air: {
    label: "iPhone Air",
    shortLabel: "Air",
    defaultFinish: "sky-blue",
    isFoldable: false,
    sceneHeight: 6.42,
  },
  "17": {
    label: "iPhone 17",
    shortLabel: "17",
    defaultFinish: "lavender",
    isFoldable: false,
    sceneHeight: 6.42,
  },
  "17e": {
    label: "iPhone 17e",
    shortLabel: "17e",
    defaultFinish: "soft-pink",
    isFoldable: false,
    sceneHeight: 6.42,
  },
  "16-pro": {
    label: "iPhone 16 Pro",
    shortLabel: "16 Pro",
    defaultFinish: "desert-titanium",
    isFoldable: false,
    sceneHeight: 6.42,
  },
  "16-pro-max": {
    label: "iPhone 16 Pro Max",
    shortLabel: "16 Pro Max",
    defaultFinish: "desert-titanium",
    isFoldable: false,
    sceneHeight: 7,
  },
  "16": {
    label: "iPhone 16",
    shortLabel: "16",
    defaultFinish: "ultramarine",
    isFoldable: false,
    sceneHeight: 6.31,
  },
  "16-plus": {
    label: "iPhone 16 Plus",
    shortLabel: "16 Plus",
    defaultFinish: "ultramarine",
    isFoldable: false,
    sceneHeight: 6.9,
  },
  "16e": {
    label: "iPhone 16e",
    shortLabel: "16e",
    defaultFinish: "white",
    isFoldable: false,
    sceneHeight: 6.28,
  },
  "15-pro": {
    label: "iPhone 15 Pro",
    shortLabel: "15 Pro",
    defaultFinish: "natural-titanium",
    isFoldable: false,
    sceneHeight: 5.77,
  },
  "15-pro-max": {
    label: "iPhone 15 Pro Max",
    shortLabel: "15 Pro Max",
    defaultFinish: "natural-titanium",
    isFoldable: false,
    sceneHeight: 6.29,
  },
  "15": {
    label: "iPhone 15",
    shortLabel: "15",
    defaultFinish: "pink",
    isFoldable: false,
    sceneHeight: 5.81,
  },
  "15-plus": {
    label: "iPhone 15 Plus",
    shortLabel: "15 Plus",
    defaultFinish: "pink",
    isFoldable: false,
    sceneHeight: 6.33,
  },
  "14-pro": {
    label: "iPhone 14 Pro",
    shortLabel: "14 Pro",
    defaultFinish: "deep-purple",
    isFoldable: false,
    sceneHeight: 5.81,
    sceneOrientation: "native",
  },
  "14-pro-max": {
    label: "iPhone 14 Pro Max",
    shortLabel: "14 Pro Max",
    defaultFinish: "deep-purple",
    isFoldable: false,
    sceneHeight: 6.33,
    sceneOrientation: "native",
  },
  "14": {
    label: "iPhone 14",
    shortLabel: "14",
    defaultFinish: "blue",
    isFoldable: false,
    sceneHeight: 5.78,
    sceneOrientation: "native",
  },
  "14-plus": {
    label: "iPhone 14 Plus",
    shortLabel: "14 Plus",
    defaultFinish: "blue",
    isFoldable: false,
    sceneHeight: 6.33,
    sceneOrientation: "native",
  },
  "ipad-pro-m5": {
    label: "iPad Pro 13″ (M5)",
    shortLabel: "Pro 13″",
    defaultFinish: "space-black",
    isFoldable: false,
    sceneHeight: 7.2,
    sceneRotationY: 1.05,
    sceneRotationZ: Math.PI,
  },
  "ipad-air-m4": {
    label: "iPad Air 13″ (M4)",
    shortLabel: "Air 13″",
    defaultFinish: "blue",
    isFoldable: false,
    sceneHeight: 7.1,
    sceneRotationY: 1.05,
    sceneRotationZ: Math.PI,
  },
  "ipad-a16": {
    label: "iPad (A16)",
    shortLabel: "A16",
    defaultFinish: "pink",
    isFoldable: false,
    sceneHeight: 6.9,
    sceneRotationY: 0.32,
  },
  "ipad-mini-a17-pro": {
    label: "iPad mini (A17 Pro)",
    shortLabel: "mini",
    defaultFinish: "purple",
    isFoldable: false,
    sceneHeight: 6.15,
  },
  "apple-watch-series-11": {
    label: "Apple Watch Series 11",
    shortLabel: "Series 11",
    defaultFinish: "rose-gold",
    isFoldable: false,
    sceneHeight: 6.4,
    sceneRotationX: 1.92,
    sceneRotationY: -0.18,
  },
  "apple-watch-series-10": {
    label: "Apple Watch Series 10",
    shortLabel: "Series 10",
    defaultFinish: "black",
    isFoldable: false,
    sceneHeight: 6.4,
    sceneRotationX: 1.92,
    sceneRotationY: -0.18,
  },
  "apple-watch-series-9": {
    label: "Apple Watch Series 9",
    shortLabel: "Series 9",
    defaultFinish: "starlight",
    isFoldable: false,
    sceneHeight: 6.4,
    sceneRotationX: 1.92,
    sceneRotationY: -0.18,
  },
  "apple-watch-series-8": {
    label: "Apple Watch Series 8",
    shortLabel: "Series 8",
    defaultFinish: "starlight",
    isFoldable: false,
    sceneHeight: 6.4,
    sceneRotationX: 1.92,
    sceneRotationY: -0.18,
  },
  "apple-watch-series-7": {
    label: "Apple Watch Series 7",
    shortLabel: "Series 7",
    defaultFinish: "midnight",
    isFoldable: false,
    sceneHeight: 6.4,
    sceneRotationX: 1.92,
    sceneRotationY: -0.18,
  },
  "apple-watch-series-6": {
    label: "Apple Watch Series 6",
    shortLabel: "Series 6",
    defaultFinish: "silver",
    isFoldable: false,
    sceneHeight: 6.4,
    sceneRotationX: 1.92,
    sceneRotationY: -0.18,
  },
  "apple-watch-series-5": {
    label: "Apple Watch Series 5",
    shortLabel: "Series 5",
    defaultFinish: "silver",
    isFoldable: false,
    sceneHeight: 6.4,
    sceneRotationX: 1.92,
    sceneRotationY: -0.18,
  },
  "apple-watch-series-3": {
    label: "Apple Watch Series 3",
    shortLabel: "Series 3",
    defaultFinish: "silver",
    isFoldable: false,
    sceneHeight: 6.35,
    sceneRotationX: 1.92,
    sceneRotationY: -0.18,
  },
  "apple-watch-ultra-3": {
    label: "Apple Watch Ultra 3",
    shortLabel: "Ultra 3",
    defaultFinish: "natural-titanium",
    isFoldable: false,
    sceneHeight: 6.55,
    sceneRotationX: 1.92,
    sceneRotationY: -0.18,
  },
  "apple-watch-ultra-2": {
    label: "Apple Watch Ultra 2",
    shortLabel: "Ultra 2",
    defaultFinish: "black",
    isFoldable: false,
    sceneHeight: 6.55,
    sceneRotationX: 1.92,
    sceneRotationY: -0.18,
  },
  "apple-watch-ultra": {
    label: "Apple Watch Ultra",
    shortLabel: "Ultra",
    defaultFinish: "natural-titanium",
    isFoldable: false,
    sceneHeight: 6.55,
    sceneRotationX: 1.92,
    sceneRotationY: -0.18,
  },
  "apple-watch-se-3": {
    label: "Apple Watch SE 3",
    shortLabel: "SE 3",
    defaultFinish: "midnight",
    isFoldable: false,
    sceneHeight: 6.3,
    sceneRotationX: 1.92,
    sceneRotationY: -0.18,
  },
  "apple-watch-se": {
    label: "Apple Watch SE (1st generation)",
    shortLabel: "SE 1",
    defaultFinish: "silver",
    isFoldable: false,
    sceneHeight: 6.3,
    sceneRotationX: 1.92,
    sceneRotationY: -0.18,
  },
  "airpods-5": {
    label: "AirPods 5",
    shortLabel: "AirPods 5",
    defaultFinish: "white",
    isFoldable: false,
    sceneHeight: 6.1,
    sceneRotationY: 0.18,
  },
  "airpods-5-wireless": {
    label: "AirPods 5 with Wireless Charging Case",
    shortLabel: "5 Wireless",
    defaultFinish: "white",
    isFoldable: false,
    sceneHeight: 6.1,
    sceneRotationY: 0.18,
  },
  "airpods-4": {
    label: "AirPods 4",
    shortLabel: "AirPods 4",
    defaultFinish: "white",
    isFoldable: false,
    sceneHeight: 6.1,
    sceneRotationY: 0.18,
  },
  "airpods-4-anc": {
    label: "AirPods 4 with Active Noise Cancellation",
    shortLabel: "4 ANC",
    defaultFinish: "white",
    isFoldable: false,
    sceneHeight: 6.1,
    sceneRotationY: 0.18,
  },
  "airpods-3": {
    label: "AirPods 3",
    shortLabel: "AirPods 3",
    defaultFinish: "white",
    isFoldable: false,
    sceneHeight: 6.1,
    sceneRotationY: 0.18,
  },
  "airpods-pro-3": {
    label: "AirPods Pro 3",
    shortLabel: "Pro 3",
    defaultFinish: "white",
    isFoldable: false,
    sceneHeight: 6.1,
    sceneRotationY: 0.18,
  },
  "airpods-pro-2": {
    label: "AirPods Pro 2",
    shortLabel: "Pro 2",
    defaultFinish: "white",
    isFoldable: false,
    sceneHeight: 6.1,
    sceneRotationY: 0.18,
  },
  "airpods-pro": {
    label: "AirPods Pro (1st generation)",
    shortLabel: "Pro 1",
    defaultFinish: "white",
    isFoldable: false,
    sceneHeight: 6.1,
    sceneRotationY: 0.18,
    sceneRotationZ: Math.PI / 2,
  },
  "airpods-max-2": {
    label: "AirPods Max 2",
    shortLabel: "Max 2",
    defaultFinish: "midnight",
    isFoldable: false,
    sceneHeight: 6.5,
    sceneRotationY: 0.18,
  },
  "airpods-max": {
    label: "AirPods Max (1st generation)",
    shortLabel: "Max 1",
    defaultFinish: "green",
    isFoldable: false,
    sceneHeight: 6.5,
    sceneRotationY: 0.18,
  },
  "macbook-air-m5": {
    label: "MacBook Air 13″ (M5)",
    shortLabel: "Air 13″",
    defaultFinish: "sky-blue",
    isFoldable: false,
    sceneHeight: 7.3,
    sceneOrientation: "native",
  },
  "macbook-air-15-m5": {
    label: "MacBook Air 15″ (M5)",
    shortLabel: "Air 15″",
    defaultFinish: "sky-blue",
    isFoldable: false,
    sceneHeight: 7.3,
    sceneOrientation: "native",
  },
  "macbook-pro-m5": {
    label: "MacBook Pro 14″ (M5)",
    shortLabel: "Pro 14″",
    defaultFinish: "space-black",
    isFoldable: false,
    sceneHeight: 7.3,
    sceneOrientation: "native",
  },
  "imac-m4": {
    label: "iMac (M4)",
    shortLabel: "iMac M4",
    defaultFinish: "blue",
    isFoldable: false,
    sceneHeight: 7.5,
    sceneOrientation: "native",
  },
  "mac-mini-m6": {
    label: "Mac mini (M6)",
    shortLabel: "mini M6",
    defaultFinish: "silver",
    isFoldable: false,
    sceneHeight: 6.4,
    sceneOrientation: "native",
  },
  "mac-studio-m5": {
    label: "Mac Studio (M5)",
    shortLabel: "Studio M5",
    defaultFinish: "silver",
    isFoldable: false,
    sceneHeight: 6.4,
    sceneOrientation: "native",
  },
  "mac-pro-m2-ultra": {
    label: "Mac Pro (M2 Ultra)",
    shortLabel: "Pro M2 Ultra",
    defaultFinish: "silver",
    isFoldable: false,
    sceneHeight: 7,
    sceneOrientation: "native",
  },
  "apple-vision-pro-m5": {
    label: "Apple Vision Pro (M5)",
    shortLabel: "Vision Pro",
    defaultFinish: "silver",
    isFoldable: false,
    sceneHeight: 6.9,
    sceneRotationX: 0.08,
    sceneRotationY: Math.PI - 0.12,
    sceneOrientation: "native",
  },
};

type SeriesDefinition = {
  label: string;
  shortLabel: string;
  defaultModel: Model;
  models: ReadonlyArray<Model>;
};

export const iphoneSeriesIds = ["18", "17", "16", "15", "14"] as const satisfies ReadonlyArray<IphoneSeries>;
export const ipadSeriesIds = ["ipad-pro", "ipad-air", "ipad", "ipad-mini"] as const satisfies ReadonlyArray<IpadSeries>;
export const appleWatchSeriesIds = [
  "apple-watch-series",
  "apple-watch-ultra",
  "apple-watch-se",
] as const satisfies ReadonlyArray<AppleWatchSeries>;
export const airPodsSeriesIds = [
  "airpods",
  "airpods-pro",
  "airpods-max",
] as const satisfies ReadonlyArray<AirPodsSeries>;
export const macSeriesIds = [
  "macbook-air",
  "macbook-pro",
  "imac",
  "mac-mini",
  "mac-studio",
  "mac-pro",
] as const satisfies ReadonlyArray<MacSeries>;
export const appleVisionSeriesIds = [
  "apple-vision-pro",
] as const satisfies ReadonlyArray<AppleVisionSeries>;
export const seriesIds = [
  ...iphoneSeriesIds,
  ...ipadSeriesIds,
  ...appleWatchSeriesIds,
  ...airPodsSeriesIds,
  ...macSeriesIds,
  ...appleVisionSeriesIds,
] as const satisfies ReadonlyArray<Series>;

export const seriesCatalog: Record<Series, SeriesDefinition> = {
  "18": {
    label: "iPhone 18",
    shortLabel: "18",
    defaultModel: "pro",
    models: ["pro", "duo"],
  },
  "17": {
    label: "iPhone 17",
    shortLabel: "17",
    defaultModel: "17-pro",
    models: ["17-pro", "17-pro-max", "air", "17", "17e"],
  },
  "16": {
    label: "iPhone 16",
    shortLabel: "16",
    defaultModel: "16-pro",
    models: ["16-pro", "16-pro-max", "16", "16-plus", "16e"],
  },
  "15": {
    label: "iPhone 15",
    shortLabel: "15",
    defaultModel: "15-pro",
    models: ["15-pro", "15-pro-max", "15", "15-plus"],
  },
  "14": {
    label: "iPhone 14",
    shortLabel: "14",
    defaultModel: "14-pro",
    models: ["14-pro", "14-pro-max", "14", "14-plus"],
  },
  "ipad-pro": {
    label: "iPad Pro",
    shortLabel: "Pro",
    defaultModel: "ipad-pro-m5",
    models: ["ipad-pro-m5"],
  },
  "ipad-air": {
    label: "iPad Air",
    shortLabel: "Air",
    defaultModel: "ipad-air-m4",
    models: ["ipad-air-m4"],
  },
  ipad: {
    label: "iPad",
    shortLabel: "iPad",
    defaultModel: "ipad-a16",
    models: ["ipad-a16"],
  },
  "ipad-mini": {
    label: "iPad mini",
    shortLabel: "mini",
    defaultModel: "ipad-mini-a17-pro",
    models: ["ipad-mini-a17-pro"],
  },
  "apple-watch-series": {
    label: "Apple Watch Series",
    shortLabel: "Series",
    defaultModel: "apple-watch-series-11",
    models: [
      "apple-watch-series-11",
      "apple-watch-series-10",
      "apple-watch-series-9",
      "apple-watch-series-8",
      "apple-watch-series-7",
      "apple-watch-series-6",
      "apple-watch-series-5",
      "apple-watch-series-3",
    ],
  },
  "apple-watch-ultra": {
    label: "Apple Watch Ultra",
    shortLabel: "Ultra",
    defaultModel: "apple-watch-ultra-3",
    models: ["apple-watch-ultra-3", "apple-watch-ultra-2", "apple-watch-ultra"],
  },
  "apple-watch-se": {
    label: "Apple Watch SE",
    shortLabel: "SE",
    defaultModel: "apple-watch-se-3",
    models: ["apple-watch-se-3", "apple-watch-se"],
  },
  airpods: {
    label: "AirPods",
    shortLabel: "AirPods",
    defaultModel: "airpods-5",
    models: [
      "airpods-5",
      "airpods-5-wireless",
      "airpods-4",
      "airpods-4-anc",
      "airpods-3",
    ],
  },
  "airpods-pro": {
    label: "AirPods Pro",
    shortLabel: "Pro",
    defaultModel: "airpods-pro-3",
    models: ["airpods-pro-3", "airpods-pro-2", "airpods-pro"],
  },
  "airpods-max": {
    label: "AirPods Max",
    shortLabel: "Max",
    defaultModel: "airpods-max-2",
    models: ["airpods-max-2", "airpods-max"],
  },
  "macbook-air": {
    label: "MacBook Air",
    shortLabel: "Air",
    defaultModel: "macbook-air-m5",
    models: ["macbook-air-m5", "macbook-air-15-m5"],
  },
  "macbook-pro": {
    label: "MacBook Pro",
    shortLabel: "Pro",
    defaultModel: "macbook-pro-m5",
    models: ["macbook-pro-m5"],
  },
  imac: {
    label: "iMac",
    shortLabel: "iMac",
    defaultModel: "imac-m4",
    models: ["imac-m4"],
  },
  "mac-mini": {
    label: "Mac mini",
    shortLabel: "mini",
    defaultModel: "mac-mini-m6",
    models: ["mac-mini-m6"],
  },
  "mac-studio": {
    label: "Mac Studio",
    shortLabel: "Studio",
    defaultModel: "mac-studio-m5",
    models: ["mac-studio-m5"],
  },
  "mac-pro": {
    label: "Mac Pro",
    shortLabel: "Pro",
    defaultModel: "mac-pro-m2-ultra",
    models: ["mac-pro-m2-ultra"],
  },
  "apple-vision-pro": {
    label: "Apple Vision Pro",
    shortLabel: "Vision Pro",
    defaultModel: "apple-vision-pro-m5",
    models: ["apple-vision-pro-m5"],
  },
};

export const modelIds: ReadonlyArray<Model> = seriesIds.flatMap(
  (series) => seriesCatalog[series].models,
);

export const finishes: Record<Finish, { name: string; color: string; accent: string }> = {
  burgundy: { name: "Burgundy", color: "#5b1828", accent: "#d38491" },
  glacier: { name: "Glacier", color: "#c7dce1", accent: "#9eeeff" },
  silver: { name: "Silver", color: "#d7d7d2", accent: "#ffffff" },
  black: { name: "Black", color: "#202226", accent: "#737985" },
  "night-sky": { name: "Night Sky", color: "#172231", accent: "#829cc1" },
  "star-white": { name: "Star White", color: "#e9e7df", accent: "#ffffff" },
  "sky-blue": { name: "Sky Blue", color: "#c9d8e5", accent: "#e9f6ff" },
  lavender: { name: "Lavender", color: "#b8afd1", accent: "#eee9ff" },
  "soft-pink": { name: "Soft Pink", color: "#e7c1bd", accent: "#fff0ec" },
  "cosmic-orange": { name: "Cosmic Orange", color: "#e95d22", accent: "#ffad82" },
  "desert-titanium": { name: "Desert Titanium", color: "#b9a08e", accent: "#ead3c1" },
  "natural-titanium": { name: "Natural Titanium", color: "#8f897f", accent: "#d5cec2" },
  "space-black": { name: "Space Black", color: "#3a3a3c", accent: "#a5a5aa" },
  "deep-purple": { name: "Deep Purple", color: "#514f59", accent: "#aaa5b3" },
  "rose-gold": { name: "Rose Gold", color: "#c98978", accent: "#f2c4b7" },
  starlight: { name: "Starlight", color: "#d8d0bf", accent: "#fff8e8" },
  midnight: { name: "Midnight", color: "#20252d", accent: "#858f9f" },
  ultramarine: { name: "Ultramarine", color: "#5463c6", accent: "#a8b0ff" },
  blue: { name: "Blue", color: "#9eb7c6", accent: "#dceef7" },
  green: { name: "Green", color: "#63766d", accent: "#b7d2c4" },
  purple: { name: "Purple", color: "#aaa5bd", accent: "#e8e4f3" },
  pink: { name: "Pink", color: "#e8c2c8", accent: "#fff0f2" },
  white: { name: "White", color: "#f2f1ed", accent: "#ffffff" },
};

export const modelFinishes: Record<Model, ReadonlyArray<Finish>> = {
  pro: ["burgundy", "glacier", "silver", "black"],
  duo: ["night-sky", "star-white"],
  "17-pro": ["cosmic-orange"],
  "17-pro-max": ["cosmic-orange"],
  air: ["sky-blue"],
  "17": ["lavender"],
  "17e": ["soft-pink"],
  "16-pro": ["desert-titanium"],
  "16-pro-max": ["desert-titanium"],
  "16": ["ultramarine"],
  "16-plus": ["ultramarine"],
  "16e": ["white"],
  "15-pro": ["natural-titanium"],
  "15-pro-max": ["natural-titanium"],
  "15": ["pink"],
  "15-plus": ["pink"],
  "14-pro": ["deep-purple"],
  "14-pro-max": ["deep-purple"],
  "14": ["blue"],
  "14-plus": ["blue"],
  "ipad-pro-m5": ["space-black"],
  "ipad-air-m4": ["blue"],
  "ipad-a16": ["pink"],
  "ipad-mini-a17-pro": ["purple"],
  "apple-watch-series-11": ["rose-gold"],
  "apple-watch-series-10": ["black"],
  "apple-watch-series-9": ["starlight"],
  "apple-watch-series-8": ["starlight"],
  "apple-watch-series-7": ["midnight"],
  "apple-watch-series-6": ["silver"],
  "apple-watch-series-5": ["silver"],
  "apple-watch-series-3": ["silver"],
  "apple-watch-ultra-3": ["natural-titanium"],
  "apple-watch-ultra-2": ["black"],
  "apple-watch-ultra": ["natural-titanium"],
  "apple-watch-se-3": ["midnight"],
  "apple-watch-se": ["silver"],
  "airpods-5": ["white"],
  "airpods-5-wireless": ["white"],
  "airpods-4": ["white"],
  "airpods-4-anc": ["white"],
  "airpods-3": ["white"],
  "airpods-pro-3": ["white"],
  "airpods-pro-2": ["white"],
  "airpods-pro": ["white"],
  "airpods-max-2": ["midnight"],
  "airpods-max": ["green"],
  "macbook-air-m5": ["sky-blue"],
  "macbook-air-15-m5": ["sky-blue"],
  "macbook-pro-m5": ["space-black"],
  "imac-m4": ["blue"],
  "mac-mini-m6": ["silver"],
  "mac-studio-m5": ["silver"],
  "mac-pro-m2-ultra": ["silver"],
  "apple-vision-pro-m5": ["silver"],
};

export function isModel(value: string): value is Model {
  return modelIds.some((model) => model === value);
}

export function isSeries(value: string): value is Series {
  return seriesIds.some((series) => series === value);
}

export function getSeriesForModel(model: Model): Series {
  return seriesIds.find((series) =>
    seriesCatalog[series].models.some((candidate) => candidate === model)) ?? "18";
}

export function isIphone16Model(model: Model): model is Iphone16Model {
  return model === "16-pro"
    || model === "16-pro-max"
    || model === "16"
    || model === "16-plus"
    || model === "16e";
}

export function isIphone15Model(model: Model): model is Iphone15Model {
  return model === "15-pro"
    || model === "15-pro-max"
    || model === "15"
    || model === "15-plus";
}

export function isIphone14Model(model: Model): model is Iphone14Model {
  return model === "14-pro"
    || model === "14-pro-max"
    || model === "14"
    || model === "14-plus";
}

export function isIpadModel(model: Model): model is IpadModel {
  return model === "ipad-pro-m5"
    || model === "ipad-air-m4"
    || model === "ipad-a16"
    || model === "ipad-mini-a17-pro";
}

export function isAppleWatchModel(model: Model): model is AppleWatchModel {
  return appleWatchModelIds.includes(model as AppleWatchModel);
}

export function isAirPodsModel(model: Model): model is AirPodsModel {
  return airPodsModelIds.includes(model as AirPodsModel);
}

export function isMacModel(model: Model): model is MacModel {
  return model === "macbook-air-m5"
    || model === "macbook-air-15-m5"
    || model === "macbook-pro-m5"
    || model === "imac-m4"
    || model === "mac-mini-m6"
    || model === "mac-studio-m5"
    || model === "mac-pro-m2-ultra";
}

export function isAppleVisionModel(model: Model): model is AppleVisionModel {
  return model === "apple-vision-pro-m5";
}

export function isFinish(value: string): value is Finish {
  return value in finishes;
}
