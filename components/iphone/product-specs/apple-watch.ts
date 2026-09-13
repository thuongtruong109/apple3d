import type { AppleWatchModel } from "../product-data";
import { historicalAppleWatchTechnicalSpecs } from "./apple-watch-history";
import { fact, type ProductTechnicalSpecCatalog } from "./types";

export const appleWatchTechnicalSpecs = {
  "apple-watch-series-11": {
    introduced: "2025",
    sourceUrl: "https://support.apple.com/en-us/125093",
    fields: {
      finishes: fact("Aluminum: Rose Gold, Silver, Space Gray, Jet Black; Titanium: Gold, Natural, Slate", "Nhôm: Vàng Hồng, Bạc, Xám Không Gian, Đen Bóng; Titanium: Vàng, Tự Nhiên, Slate"),
      capacity: "64GB",
      dimensions: fact("42mm or 46mm case; 9.7 mm deep; from 29.7 g depending on size, material, and connectivity", "Vỏ 42 mm hoặc 46 mm; dày 9,7 mm; từ 29,7 g tùy kích thước, vật liệu và kết nối"),
      display: fact("Always-On LTPO3 OLED; 1–2000 nits; 374×446 (42mm) or 416×496 (46mm)", "OLED LTPO3 Always-On; 1–2.000 nit; 374×446 (42 mm) hoặc 416×496 (46 mm)"),
      chip: fact("S10 dual-core 64-bit chip; 4-core Neural Engine", "S10 hai lõi 64-bit; Neural Engine 4 lõi"),
      sensors: fact("Electrical and third-generation optical heart sensors, blood oxygen, temperature, depth to 6 m, water temperature, compass, altimeter, motion sensors", "Cảm biến tim điện và quang học thế hệ 3, oxy máu, nhiệt độ, độ sâu 6 m, nhiệt độ nước, la bàn, cao độ và chuyển động"),
      battery: fact("Up to 24 hours normal use; up to 38 hours in Low Power Mode", "Đến 24 giờ sử dụng thường; đến 38 giờ ở Chế Độ Nguồn Điện Thấp"),
      charging: fact("Up to 80% in about 30 minutes; 15 minutes gives up to 8 hours", "Đến 80% trong khoảng 30 phút; sạc 15 phút dùng đến 8 giờ"),
      durability: "WR50 swimproof; IP6X dust resistant",
      connectivity: "Wi‑Fi 4, Bluetooth 5.3, L1 GPS, second-generation UWB; optional 5G RedCap and LTE",
      compatibility: fact("Requires iPhone 11 or later with iOS 26 or later; health features vary by region", "Cần iPhone 11 trở lên với iOS 26 trở lên; tính năng sức khỏe thay đổi theo khu vực"),
    },
  },
  "apple-watch-ultra-3": {
    introduced: "2025",
    sourceUrl: "https://support.apple.com/en-us/125095",
    fields: {
      finishes: fact("Natural or Black Grade 5 titanium", "Titanium Grade 5 màu Tự Nhiên hoặc Đen"),
      capacity: "64GB",
      dimensions: fact("49 × 44 × 12 mm; 61.6 g Natural or 61.8 g Black", "49 × 44 × 12 mm; 61,6 g màu Tự Nhiên hoặc 61,8 g màu Đen"),
      display: fact("Always-On wide-angle LTPO3 OLED; 422×514, 1245 mm²; 1–3000 nits; sapphire crystal", "OLED LTPO3 góc rộng Always-On; 422×514, 1.245 mm²; 1–3.000 nit; kính sapphire"),
      chip: fact("S10 dual-core 64-bit chip; 4-core Neural Engine", "S10 hai lõi 64-bit; Neural Engine 4 lõi"),
      sensors: fact("Electrical and optical heart, blood oxygen, temperature, depth and water temperature; precision dual-frequency GPS, altimeter and compass", "Tim điện và quang học, oxy máu, nhiệt độ, độ sâu và nhiệt độ nước; GPS hai tần số chính xác, cao độ và la bàn"),
      battery: fact("Up to 42 hours normal use; up to 72 hours in Low Power Mode", "Đến 42 giờ sử dụng thường; đến 72 giờ ở Chế Độ Nguồn Điện Thấp"),
      charging: fact("Up to 80% in about 45 minutes; 15 minutes gives up to 12 hours", "Đến 80% trong khoảng 45 phút; sạc 15 phút dùng đến 12 giờ"),
      durability: fact("WR100; recreational scuba to 40 m; IP6X; MIL‑STD 810H tested", "WR100; lặn giải trí đến 40 m; IP6X; thử nghiệm theo MIL‑STD 810H"),
      connectivity: "Wi‑Fi 4, Bluetooth 5.3, precision dual-frequency GPS, second-generation UWB, 5G RedCap/LTE, satellite communications",
      compatibility: fact("Requires iPhone 11 or later with iOS 26 or later; health and satellite features vary by region", "Cần iPhone 11 trở lên với iOS 26 trở lên; tính năng sức khỏe và vệ tinh thay đổi theo khu vực"),
    },
  },
  "apple-watch-se-3": {
    introduced: "2025",
    sourceUrl: "https://support.apple.com/en-us/125094",
    fields: {
      finishes: fact("Midnight or Starlight aluminum", "Nhôm màu Midnight hoặc Starlight"),
      capacity: "64GB",
      dimensions: fact("40mm: 40 × 34 × 10.7 mm, from 26.3 g; 44mm: 44 × 38 × 10.7 mm, from 32.9 g", "40 mm: 40 × 34 × 10,7 mm, từ 26,3 g; 44 mm: 44 × 38 × 10,7 mm, từ 32,9 g"),
      display: fact("Always-On LTPO OLED; up to 1000 nits; 324×394 (40mm) or 368×448 (44mm)", "OLED LTPO Always-On; đến 1.000 nit; 324×394 (40 mm) hoặc 368×448 (44 mm)"),
      chip: fact("S10 dual-core 64-bit chip; 4-core Neural Engine", "S10 hai lõi 64-bit; Neural Engine 4 lõi"),
      sensors: fact("Second-generation optical heart sensor, temperature sensor, compass, always-on altimeter and motion sensors", "Cảm biến tim quang học thế hệ 2, nhiệt độ, la bàn, cao độ luôn bật và cảm biến chuyển động"),
      battery: fact("Up to 18 hours normal use; up to 32 hours in Low Power Mode", "Đến 18 giờ sử dụng thường; đến 32 giờ ở Chế Độ Nguồn Điện Thấp"),
      charging: fact("Up to 80% in about 45 minutes; 15 minutes gives up to 8 hours", "Đến 80% trong khoảng 45 phút; sạc 15 phút dùng đến 8 giờ"),
      durability: "WR50 swimproof; Ion‑X front glass",
      connectivity: "Wi‑Fi 4, Bluetooth 5.3, L1 GPS; optional 5G RedCap and LTE",
      compatibility: fact("Requires iPhone 11 or later with iOS 26 or later; health features vary by region", "Cần iPhone 11 trở lên với iOS 26 trở lên; tính năng sức khỏe thay đổi theo khu vực"),
    },
  },
  ...historicalAppleWatchTechnicalSpecs,
} as const satisfies Pick<ProductTechnicalSpecCatalog, AppleWatchModel>;
