import type { AirPodsModel } from "../product-data";
import { historicalAirPodsTechnicalSpecs } from "./airpods-history";
import { fact, type ProductTechnicalSpecCatalog } from "./types";

export const airPodsTechnicalSpecs = {
  "airpods-5": {
    introduced: "2026",
    sourceUrl: "https://www.apple.com/airpods-5/specs/",
    fields: {
      finishes: fact("White", "Trắng"),
      dimensions: fact("Each earbud: 30.2 × 18.3 × 18.1 mm, 4.3 g; USB‑C case: 46.2 × 50.1 × 21.2 mm, 32.3 g", "Mỗi tai nghe: 30,2 × 18,3 × 18,1 mm, 4,3 g; hộp USB‑C: 46,2 × 50,1 × 21,2 mm, 32,3 g"),
      chip: fact("Apple H2 headphone chip", "Chip tai nghe Apple H2"),
      audio: fact("Active Noise Cancellation, Adaptive Audio, Transparency, Conversation Awareness, Adaptive EQ, personalized Spatial Audio and studio-quality recording", "Chống Ồn Chủ Động, Âm Thanh Thích Ứng, Xuyên Âm, Nhận Biết Cuộc Hội Thoại, Adaptive EQ, Âm Thanh Không Gian cá nhân hóa và thu âm chuẩn studio"),
      sensors: fact("Beamforming and inward-facing microphones, optical in-ear sensor, motion and speech accelerometers, and force control", "Micro định hướng và hướng vào trong, cảm biến quang học trong tai, gia tốc kế chuyển động và giọng nói, điều khiển lực"),
      battery: fact("Up to 4 hours per charge and up to 20 hours total with Active Noise Cancellation", "Đến 4 giờ mỗi lần sạc và tổng đến 20 giờ khi bật Chống Ồn Chủ Động"),
      charging: fact("USB‑C; 5 minutes in the case gives about 1 hour", "USB‑C; 5 phút trong hộp cho khoảng 1 giờ nghe"),
      durability: fact("IP57 dust, sweat, and water resistance", "Kháng bụi, mồ hôi và nước IP57"),
      connectivity: "Bluetooth 5.3",
      compatibility: fact("Latest iOS, iPadOS, watchOS, macOS, tvOS, or visionOS recommended; usable as limited Bluetooth headphones on other devices", "Khuyến nghị iOS, iPadOS, watchOS, macOS, tvOS hoặc visionOS mới nhất; vẫn dùng được như tai nghe Bluetooth với tính năng giới hạn trên thiết bị khác"),
    },
  },
  "airpods-pro-3": {
    introduced: "2025",
    sourceUrl: "https://www.apple.com/airpods-pro/specs/",
    fields: {
      finishes: fact("White; five silicone tip sizes: XXS, XS, S, M, L", "Trắng; năm cỡ nút tai silicone: XXS, XS, S, M, L"),
      dimensions: fact("Each earbud: 30.9 × 19.2 × 27.0 mm, 5.55 g; MagSafe case: 47.2 × 62.2 × 21.8 mm, 43.99 g", "Mỗi tai nghe: 30,9 × 19,2 × 27,0 mm, 5,55 g; hộp MagSafe: 47,2 × 62,2 × 21,8 mm, 43,99 g"),
      chip: fact("Apple H2 headphone chip; second-generation UWB chip in the case", "Chip tai nghe Apple H2; chip UWB thế hệ 2 trong hộp"),
      audio: fact("ANC up to 2× AirPods Pro 2, Adaptive Audio, Transparency, Hearing Test, Hearing Aid, Hearing Protection, Spatial Audio and Live Translation", "ANC mạnh đến 2× AirPods Pro 2, Âm Thanh Thích Ứng, Xuyên Âm, Kiểm Tra Thính Lực, Trợ Thính, Bảo Vệ Thính Giác, Âm Thanh Không Gian và Dịch Trực Tiếp"),
      sensors: fact("Heart rate sensor for workouts, skin detection, motion and speech accelerometers, touch control", "Cảm biến nhịp tim khi tập luyện, nhận biết da, gia tốc kế chuyển động và giọng nói, điều khiển cảm ứng"),
      battery: fact("Up to 8 hours with ANC per charge; 6.5 hours with workout heart-rate sensing; up to 24 hours with case and ANC", "Đến 8 giờ mỗi lần sạc khi bật ANC; 6,5 giờ khi đo nhịp tim lúc tập; tổng đến 24 giờ với hộp và ANC"),
      charging: fact("MagSafe, Apple Watch, Qi, or USB‑C; 5 minutes in the case gives about 1 hour", "MagSafe, bộ sạc Apple Watch, Qi hoặc USB‑C; 5 phút trong hộp cho khoảng 1 giờ nghe"),
      durability: fact("Earbuds and case are IP57 dust, sweat, and water resistant", "Tai nghe và hộp kháng bụi, mồ hôi và nước IP57"),
      connectivity: "Bluetooth 5.3",
      compatibility: fact("Latest Apple operating systems recommended; health, hearing, and translation features vary by region and device", "Khuyến nghị hệ điều hành Apple mới nhất; tính năng sức khỏe, thính giác và dịch thuật thay đổi theo khu vực và thiết bị"),
    },
  },
  "airpods-max-2": {
    introduced: "2026",
    sourceUrl: "https://www.apple.com/airpods-max/specs/",
    fields: {
      finishes: fact("Midnight, Starlight, Blue, Purple, Orange", "Midnight, Starlight, Xanh Dương, Tím, Cam"),
      dimensions: fact("187.3 × 168.6 × 83.4 mm including cushions; 386.2 g; Smart Case 134.5 g", "187,3 × 168,6 × 83,4 mm gồm đệm tai; 386,2 g; Smart Case 134,5 g"),
      chip: fact("Apple H2 headphone chip in each ear cup", "Chip tai nghe Apple H2 trong mỗi chụp tai"),
      audio: fact("Apple dynamic driver, ANC, Adaptive Audio, Transparency, Adaptive EQ, personalized Spatial Audio; lossless and ultra-low latency over USB‑C", "Driver động Apple, ANC, Âm Thanh Thích Ứng, Xuyên Âm, Adaptive EQ, Âm Thanh Không Gian cá nhân hóa; lossless và độ trễ cực thấp qua USB‑C"),
      sensors: fact("Optical, position, case-detect and motion sensors in each cup; gyroscope in left cup; nine microphones", "Cảm biến quang học, vị trí, nhận biết hộp và chuyển động trong mỗi chụp; con quay hồi chuyển ở chụp trái; chín micro"),
      battery: fact("Up to 20 hours with ANC; 5 minutes of charge gives about 1.5 hours", "Đến 20 giờ khi bật ANC; sạc 5 phút cho khoảng 1,5 giờ nghe"),
      charging: fact("USB‑C; Smart Case activates ultra-low-power storage", "USB‑C; Smart Case kích hoạt trạng thái lưu trữ siêu tiết kiệm điện"),
      connectivity: "Bluetooth 5.3",
      compatibility: fact("Latest Apple operating systems recommended; usable as limited Bluetooth headphones on other devices", "Khuyến nghị hệ điều hành Apple mới nhất; vẫn dùng được như tai nghe Bluetooth với tính năng giới hạn trên thiết bị khác"),
    },
  },
  ...historicalAirPodsTechnicalSpecs,
} as const satisfies Pick<ProductTechnicalSpecCatalog, AirPodsModel>;
