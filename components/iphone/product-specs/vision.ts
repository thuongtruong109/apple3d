import type { AppleVisionModel } from "../product-data";
import { fact, type ProductTechnicalSpecCatalog } from "./types";

export const visionTechnicalSpecs = {
  "apple-vision-pro-m5": {
    introduced: "2025",
    sourceUrl: "https://support.apple.com/en-us/125436",
    fields: {
      capacity: "256GB / 512GB / 1TB",
      dimensions: fact("750–800 g including Light Seal and Dual Knit Band; separate battery 353 g; IPD 51–75 mm", "750–800 g gồm Light Seal và Dual Knit Band; pin rời 353 g; khoảng cách đồng tử 51–75 mm"),
      display: fact("Dual micro‑OLED 3D system with 23 million pixels, 7.5µm pixel pitch, 92% DCI‑P3; 90/96/100/120Hz", "Hệ thống 3D micro‑OLED kép với 23 triệu điểm ảnh, pixel pitch 7,5µm, 92% DCI‑P3; 90/96/100/120Hz"),
      chip: fact("M5: 10-core CPU, 10-core GPU, 16-core Neural Engine, 153GB/s; R1: 12ms photon-to-photon latency, 256GB/s", "M5: CPU 10 lõi, GPU 10 lõi, Neural Engine 16 lõi, 153GB/s; R1: độ trễ photon-tới-photon 12ms, 256GB/s"),
      memory: "16GB unified memory",
      camera: fact("Stereoscopic 3D main camera, 18mm ƒ/2.0, 6.5 stereo megapixels; spatial photo and video capture", "Camera chính 3D lập thể, 18 mm ƒ/2.0, 6,5 stereo megapixel; chụp ảnh và quay video không gian"),
      audio: fact("Personalized Spatial Audio with dynamic head tracking and audio ray tracing; six-microphone beamforming array", "Âm Thanh Không Gian cá nhân hóa có theo dõi đầu động và audio ray tracing; cụm sáu micro định hướng"),
      sensors: fact("Two high-resolution cameras, six world-tracking cameras, four eye-tracking cameras, TrueDepth, LiDAR, four IMUs, flicker and ambient-light sensors", "Hai camera độ phân giải cao, sáu camera theo dõi môi trường, bốn camera theo dõi mắt, TrueDepth, LiDAR, bốn IMU, cảm biến nhấp nháy và ánh sáng môi trường"),
      battery: fact("Up to 2.5 hours general use or 3 hours video; usable while charging", "Đến 2,5 giờ dùng thông thường hoặc 3 giờ xem video; có thể dùng trong khi sạc"),
      charging: fact("Separate battery; 40W Dynamic Power Adapter with 60W maximum and 1.5m USB‑C cable included", "Pin rời; kèm bộ sạc Dynamic Power Adapter 40W, tối đa 60W và cáp USB‑C 1,5 m"),
      connectivity: "Wi‑Fi 6, Bluetooth 5.3, AirPlay mirroring up to 1080p",
      authentication: fact("Optic ID iris authentication", "Xác thực mống mắt Optic ID"),
      accessories: fact("Supports keyboards, trackpads, mice, game controllers, Logitech Muse and PlayStation VR2 Sense", "Hỗ trợ bàn phím, trackpad, chuột, tay cầm game, Logitech Muse và PlayStation VR2 Sense"),
      compatibility: fact("Runs visionOS; H2-to-H2 ultra-low-latency audio with supported AirPods", "Chạy visionOS; âm thanh H2-tới-H2 độ trễ cực thấp với AirPods tương thích"),
    },
  },
} as const satisfies Pick<ProductTechnicalSpecCatalog, AppleVisionModel>;
