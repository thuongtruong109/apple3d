import type { ContentLanguage, Language } from "../i18n";
import type { Model } from "../product-data";

export type LocalizedFact = string | Readonly<{
  en: string;
  vi: string;
}>;

export type SpecFieldKey =
  | "availability"
  | "finishes"
  | "capacity"
  | "dimensions"
  | "display"
  | "chip"
  | "memory"
  | "camera"
  | "frontCamera"
  | "audio"
  | "sensors"
  | "battery"
  | "charging"
  | "durability"
  | "connectivity"
  | "ports"
  | "authentication"
  | "accessories"
  | "compatibility";

export type SpecGroupKey =
  | "design"
  | "performance"
  | "media"
  | "power";

export type ProductTechnicalSpec = Readonly<{
  introduced: string;
  sourceUrl: string;
  fields: Partial<Record<SpecFieldKey, LocalizedFact>>;
}>;

export type ProductTechnicalSpecCatalog = Partial<
  Record<Model, ProductTechnicalSpec>
>;

export function fact(en: string, vi: string): LocalizedFact {
  return { en, vi };
}

export function localizeFact(value: LocalizedFact, language: Language) {
  if (typeof value === "string") return value;
  return language === "vi" ? value.vi : value.en;
}

export type TechnicalSpecsUiCopy = Readonly<{
  eyebrow: string;
  title: string;
  description: string;
  introduced: string;
  official: string;
  verified: string;
  source: string;
  disclaimer: string;
  groups: Record<SpecGroupKey, string>;
  fields: Record<SpecFieldKey, string>;
}>;

const englishTechnicalSpecsCopy: TechnicalSpecsUiCopy = {
    eyebrow: "OFFICIAL TECHNICAL PROFILE",
    title: "The details, without the guesswork.",
    description: "Key specifications checked against Apple’s published technical documentation.",
    introduced: "Introduced",
    official: "Apple-published specifications",
    verified: "Verified September 13, 2026",
    source: "View complete specs at Apple",
    disclaimer: "Storage, weight, battery life, cellular support, and included accessories can vary by configuration, market, software, settings, and use.",
    groups: { design: "Design & display", performance: "Performance & capacity", media: "Cameras, audio & sensors", power: "Power, ports & connectivity" },
    fields: {
      availability: "Availability", finishes: "Finishes", capacity: "Storage", dimensions: "Size & weight",
      display: "Display", chip: "Chip", memory: "Memory", camera: "Rear camera / imaging",
      frontCamera: "Front camera", audio: "Audio", sensors: "Sensors & health", battery: "Battery",
      charging: "Charging", durability: "Durability", connectivity: "Wireless", ports: "Ports",
      authentication: "Authentication", accessories: "Accessories", compatibility: "Compatibility",
    },
};

export const technicalSpecsCopy: Record<ContentLanguage, TechnicalSpecsUiCopy> = {
  en: englishTechnicalSpecsCopy,
  vi: {
    eyebrow: "HỒ SƠ KỸ THUẬT CHÍNH THỨC",
    title: "Thông tin chi tiết, không phỏng đoán.",
    description: "Các thông số quan trọng đã được đối chiếu với tài liệu kỹ thuật do Apple công bố.",
    introduced: "Năm ra mắt",
    official: "Thông số do Apple công bố",
    verified: "Kiểm chứng ngày 13/09/2026",
    source: "Xem toàn bộ thông số tại Apple",
    disclaimer: "Dung lượng, khối lượng, thời lượng pin, kết nối di động và phụ kiện trong hộp có thể khác theo cấu hình, thị trường, phần mềm, cài đặt và cách sử dụng.",
    groups: { design: "Thiết kế & màn hình", performance: "Hiệu năng & dung lượng", media: "Camera, âm thanh & cảm biến", power: "Pin, cổng & kết nối" },
    fields: {
      availability: "Tình trạng", finishes: "Màu hoàn thiện", capacity: "Dung lượng", dimensions: "Kích thước & khối lượng",
      display: "Màn hình", chip: "Chip", memory: "Bộ nhớ", camera: "Camera sau / hình ảnh",
      frontCamera: "Camera trước", audio: "Âm thanh", sensors: "Cảm biến & sức khỏe", battery: "Pin",
      charging: "Sạc", durability: "Độ bền", connectivity: "Kết nối không dây", ports: "Cổng kết nối",
      authentication: "Xác thực", accessories: "Phụ kiện", compatibility: "Tương thích",
    },
  },
  pt: englishTechnicalSpecsCopy,
  es: englishTechnicalSpecsCopy,
  zh: englishTechnicalSpecsCopy,
  ja: englishTechnicalSpecsCopy,
};
