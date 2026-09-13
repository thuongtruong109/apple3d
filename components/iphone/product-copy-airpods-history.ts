import type { ContentLanguage } from "./i18n";
import type { AirPodsModel } from "./product-data";
import type { ProductCopy } from "./product-copy-types";

type AdditionalAirPodsModel = Exclude<
  AirPodsModel,
  "airpods-5" | "airpods-pro-3" | "airpods-max-2"
>;

type AirPodsCopyInput = Omit<
  ProductCopy,
  "primarySpecLabel" | "secondarySpecLabel" | "secondarySectionKicker"
>;

function airPodsCopy(
  input: AirPodsCopyInput,
  labels: { fit: string; audio: string },
): ProductCopy {
  return {
    ...input,
    primarySpecLabel: labels.fit,
    secondarySpecLabel: "ANC",
    secondarySectionKicker: labels.audio,
  };
}

const labels = {
  en: { fit: "FIT", audio: "AUDIO / 02" },
  vi: { fit: "KIỂU ĐEO", audio: "ÂM THANH / 02" },
} as const;

const additionalAirPodsCopy: Record<
  "en" | "vi",
  Record<AdditionalAirPodsModel, ProductCopy>
> = {
  en: {
    "airpods-5-wireless": airPodsCopy({
      name: "AirPods 5 with Wireless Charging Case",
      eyebrow: "OPEN-EAR. WIRELESSLY READY.",
      intro: "AirPods 5 sound and open-ear ANC with longer listening time, wireless charging, and a Find My speaker in the case.",
      display: "Open-ear",
      camera: "50% more",
      battery: "5 hr ANC",
      designTitle: "The same refined fit. A more capable case.",
      designBody: "The compact IP57 design adds a Wireless Charging Case that works with Apple Watch and Qi chargers and includes a speaker for Find My.",
      cameraTitle: "Advanced open-ear noise control.",
      cameraBody: "H2 computational audio powers Active Noise Cancellation, Adaptive Audio, Transparency, and Conversation Awareness without silicone tips.",
      performanceTitle: "More listening, more ways to charge.",
      performanceBody: "The wireless-case configuration reaches up to five hours with ANC and 22 hours total, with USB-C, Apple Watch, and Qi charging.",
    }, labels.en),
    "airpods-4": airPodsCopy({
      name: "AirPods 4",
      eyebrow: "ICONIC. NOW SUPERSONIC.",
      intro: "A redesigned open-ear fit with H2, Personalized Spatial Audio, Voice Isolation, and up to 30 hours with the USB-C case.",
      display: "Open-ear",
      camera: "No ANC",
      battery: "5 hours",
      designTitle: "A more natural open-ear fit.",
      designBody: "A refined contour, shorter stem, force sensor, and IP54 dust, sweat, and water resistance make AirPods 4 comfortable for everyday listening.",
      cameraTitle: "Spatial sound without ear tips.",
      cameraBody: "A custom driver, high-dynamic-range amplifier, Adaptive EQ, and Personalized Spatial Audio create a wide, balanced presentation.",
      performanceTitle: "H2 makes every interaction clearer.",
      performanceBody: "H2 powers Voice Isolation, Siri Interactions, low-latency connectivity, and seamless switching across Apple devices.",
    }, labels.en),
    "airpods-4-anc": airPodsCopy({
      name: "AirPods 4 with Active Noise Cancellation",
      eyebrow: "OPEN-EAR ANC ARRIVES.",
      intro: "The AirPods 4 fit with Active Noise Cancellation, Adaptive Audio, Transparency, and a wireless Find My charging case.",
      display: "Open-ear",
      camera: "Active",
      battery: "4 hr ANC",
      designTitle: "Open comfort with a smarter case.",
      designBody: "The IP54 earbuds pair with a compact USB-C case that supports Apple Watch and Qi chargers and includes a speaker for Find My.",
      cameraTitle: "Noise control, without silicone tips.",
      cameraBody: "H2 combines ANC, Adaptive Audio, Transparency, and Conversation Awareness in an open-ear acoustic architecture.",
      performanceTitle: "H2 listens and adapts.",
      performanceBody: "Voice Isolation and Siri Interactions join up to four hours with ANC, five hours with noise control off, and 20 hours total with ANC.",
    }, labels.en),
    "airpods-3": airPodsCopy({
      name: "AirPods 3",
      eyebrow: "SPATIAL AUDIO TAKES SHAPE.",
      intro: "A contoured open-ear design with H1, Personalized Spatial Audio, Adaptive EQ, and up to six hours per charge.",
      display: "Open-ear",
      camera: "No ANC",
      battery: "6 hours",
      designTitle: "Contoured for sound and comfort.",
      designBody: "Shorter stems, force sensors, a skin-detect sensor, and IPX4 sweat and water resistance modernized the classic AirPods shape.",
      cameraTitle: "Dynamic head tracking comes to AirPods.",
      cameraBody: "A custom high-excursion driver, Adaptive EQ, and Personalized Spatial Audio place music and movies around the listener.",
      performanceTitle: "H1 with longer listening time.",
      performanceBody: "H1 supports hands-free Siri and seamless Apple-device switching, with up to six hours per charge and 30 hours with the case.",
    }, labels.en),
    "airpods-pro-2": airPodsCopy({
      name: "AirPods Pro 2",
      eyebrow: "REBUILT FROM THE SOUND UP.",
      intro: "H2, stronger Active Noise Cancellation, Adaptive Transparency, touch volume control, and up to 30 hours with the MagSafe case.",
      display: "4 tip sizes",
      camera: "2× Pro 1",
      battery: "6 hr ANC",
      designTitle: "A familiar seal with finer control.",
      designBody: "Four silicone tip sizes provide an acoustic seal, while touch control adds volume adjustment directly on the stem.",
      cameraTitle: "H2 brings deeper quiet.",
      cameraBody: "A custom driver, high-dynamic-range amplifier, inward-facing microphone, and H2 deliver up to twice the ANC of the first generation.",
      performanceTitle: "A case you can hear and find.",
      performanceBody: "The MagSafe case adds a speaker, lanyard loop, U1 Precision Finding, and charging by MagSafe, Apple Watch, Qi, or Lightning.",
    }, labels.en),
    "airpods-pro": airPodsCopy({
      name: "AirPods Pro (1st generation)",
      eyebrow: "MAGIC LIKE YOU HAVE NEVER HEARD.",
      intro: "The first in-ear AirPods with Active Noise Cancellation, Transparency, Adaptive EQ, and customizable silicone tips.",
      display: "3 tip sizes",
      camera: "Active",
      battery: "4.5 hr ANC",
      designTitle: "The first sealed AirPods fit.",
      designBody: "Three silicone tip sizes and a vent system balance pressure and create the acoustic seal required for effective noise cancellation.",
      cameraTitle: "The AirPods that introduced ANC.",
      cameraBody: "H1, outward- and inward-facing microphones, Adaptive EQ, and a custom driver continuously shape sound and reduce outside noise.",
      performanceTitle: "Force control and wireless charging.",
      performanceBody: "Stem presses control playback and listening modes, while the Wireless Charging Case works with Qi or Lightning and supplies more than 24 hours.",
    }, labels.en),
    "airpods-max": airPodsCopy({
      name: "AirPods Max (1st generation)",
      eyebrow: "A RADICALLY ORIGINAL COMPOSITION.",
      intro: "Apple's original over-ear headphones with dual H1 chips, high-fidelity audio, ANC, Transparency, and a Lightning connector.",
      display: "Over-ear",
      camera: "Active",
      battery: "20 hours",
      designTitle: "Mesh, aluminum, and memory foam.",
      designBody: "A breathable knit-mesh canopy, stainless-steel frame, anodized aluminum cups, and memory-foam cushions distribute weight and seal in sound.",
      cameraTitle: "Computational audio in each ear cup.",
      cameraBody: "An Apple dynamic driver, nine microphones, Adaptive EQ, ANC, Transparency, and Personalized Spatial Audio are coordinated by two H1 chips.",
      performanceTitle: "Digital Crown control. Lightning charging.",
      performanceBody: "The Digital Crown handles volume and playback, while the Lightning-charged battery lasts up to 20 hours with noise control enabled.",
    }, labels.en),
  },
  vi: {
    "airpods-5-wireless": airPodsCopy({
      name: "AirPods 5 với Hộp Sạc Không Dây", eyebrow: "THIẾT KẾ MỞ. SẴN SÀNG SẠC KHÔNG DÂY.", intro: "Âm thanh và ANC open-ear của AirPods 5 với thời gian nghe dài hơn, sạc không dây và loa Tìm trong hộp.", display: "Open-ear", camera: "Hơn 50%", battery: "5 giờ ANC", designTitle: "Độ vừa vặn tinh chỉnh. Hộp sạc đa năng hơn.", designBody: "Thiết kế IP57 nhỏ gọn đi cùng Hộp Sạc Không Dây hỗ trợ bộ sạc Apple Watch, Qi và có loa cho ứng dụng Tìm.", cameraTitle: "Điều khiển tiếng ồn open-ear tiên tiến.", cameraBody: "Âm thanh điện toán H2 vận hành Chống Ồn Chủ Động, Âm Thanh Thích Ứng, Xuyên Âm và Nhận Biết Cuộc Hội Thoại mà không cần nút tai silicone.", performanceTitle: "Nghe lâu hơn, sạc theo nhiều cách hơn.", performanceBody: "Phiên bản hộp không dây đạt đến năm giờ với ANC, tổng 22 giờ và hỗ trợ sạc USB-C, Apple Watch hoặc Qi.",
    }, labels.vi),
    "airpods-4": airPodsCopy({
      name: "AirPods 4", eyebrow: "BIỂU TƯỢNG. NAY VƯỢT TRỘI.", intro: "Dáng open-ear thiết kế lại với H2, Âm Thanh Không Gian cá nhân hóa, Tách Lời Nói và tổng thời lượng đến 30 giờ.", display: "Open-ear", camera: "Không ANC", battery: "5 giờ", designTitle: "Độ vừa vặn open-ear tự nhiên hơn.", designBody: "Đường nét tinh chỉnh, thân ngắn, cảm biến lực và chuẩn IP54 kháng bụi, mồ hôi, nước tạo sự thoải mái mỗi ngày.", cameraTitle: "Âm thanh không gian không cần nút tai.", cameraBody: "Driver tùy chỉnh, bộ khuếch đại dải động cao, Adaptive EQ và Âm Thanh Không Gian cá nhân hóa tạo âm trường rộng, cân bằng.", performanceTitle: "H2 làm mọi tương tác rõ ràng hơn.", performanceBody: "H2 vận hành Tách Lời Nói, Tương Tác Siri, kết nối độ trễ thấp và chuyển đổi liền mạch giữa các thiết bị Apple.",
    }, labels.vi),
    "airpods-4-anc": airPodsCopy({
      name: "AirPods 4 với Chống Ồn Chủ Động", eyebrow: "ANC OPEN-EAR ĐÃ ĐẾN.", intro: "Dáng AirPods 4 với Chống Ồn Chủ Động, Âm Thanh Thích Ứng, Xuyên Âm và hộp sạc không dây có loa Tìm.", display: "Open-ear", camera: "Chủ động", battery: "4 giờ ANC", designTitle: "Thoải mái mở với hộp sạc thông minh hơn.", designBody: "Tai nghe IP54 đi cùng hộp USB-C nhỏ gọn hỗ trợ sạc Apple Watch, Qi và có loa cho ứng dụng Tìm.", cameraTitle: "Điều khiển tiếng ồn, không cần nút silicone.", cameraBody: "H2 kết hợp ANC, Âm Thanh Thích Ứng, Xuyên Âm và Nhận Biết Cuộc Hội Thoại trong kiến trúc âm học open-ear.", performanceTitle: "H2 lắng nghe và thích ứng.", performanceBody: "Tách Lời Nói và Tương Tác Siri đi cùng 4 giờ khi bật ANC, 5 giờ khi tắt kiểm soát tiếng ồn và tổng 20 giờ với ANC.",
    }, labels.vi),
    "airpods-3": airPodsCopy({
      name: "AirPods 3", eyebrow: "ÂM THANH KHÔNG GIAN THÀNH HÌNH.", intro: "Thiết kế open-ear ôm gọn với H1, Âm Thanh Không Gian cá nhân hóa, Adaptive EQ và đến sáu giờ mỗi lần sạc.", display: "Open-ear", camera: "Không ANC", battery: "6 giờ", designTitle: "Ôm gọn cho âm thanh và sự thoải mái.", designBody: "Thân ngắn hơn, cảm biến lực, nhận biết da và chuẩn IPX4 kháng mồ hôi, nước hiện đại hóa dáng AirPods cổ điển.", cameraTitle: "Theo dõi đầu động đến với AirPods.", cameraBody: "Driver biên độ cao tùy chỉnh, Adaptive EQ và Âm Thanh Không Gian cá nhân hóa đặt âm nhạc, phim ảnh quanh người nghe.", performanceTitle: "H1 với thời gian nghe dài hơn.", performanceBody: "H1 hỗ trợ Siri rảnh tay, chuyển đổi thiết bị Apple, đến sáu giờ mỗi lần sạc và tổng 30 giờ với hộp.",
    }, labels.vi),
    "airpods-pro-2": airPodsCopy({
      name: "AirPods Pro 2", eyebrow: "TÁI THIẾT TỪ ÂM THANH.", intro: "H2, ANC mạnh hơn, Xuyên Âm Thích Ứng, vuốt chỉnh âm lượng và tổng thời lượng đến 30 giờ với hộp MagSafe.", display: "4 cỡ nút tai", camera: "Gấp 2× Pro 1", battery: "6 giờ ANC", designTitle: "Độ kín quen thuộc, điều khiển tinh tế hơn.", designBody: "Bốn cỡ nút silicone tạo độ kín âm; điều khiển cảm ứng cho phép chỉnh âm lượng ngay trên thân tai nghe.", cameraTitle: "H2 đem đến tĩnh lặng sâu hơn.", cameraBody: "Driver tùy chỉnh, bộ khuếch đại dải động cao, micro hướng vào trong và H2 tạo ANC mạnh đến gấp đôi thế hệ đầu.", performanceTitle: "Chiếc hộp có thể phát tiếng và được tìm thấy.", performanceBody: "Hộp MagSafe thêm loa, móc dây, Tìm Chính Xác bằng U1 và sạc qua MagSafe, Apple Watch, Qi hoặc Lightning.",
    }, labels.vi),
    "airpods-pro": airPodsCopy({
      name: "AirPods Pro (thế hệ 1)", eyebrow: "PHÉP MÀU BẠN CHƯA TỪNG NGHE.", intro: "AirPods in-ear đầu tiên với Chống Ồn Chủ Động, Xuyên Âm, Adaptive EQ và nút tai silicone tùy chỉnh.", display: "3 cỡ nút tai", camera: "Chủ động", battery: "4,5 giờ ANC", designTitle: "Độ vừa vặn kín đầu tiên của AirPods.", designBody: "Ba cỡ nút silicone và hệ thống thông hơi cân bằng áp suất, tạo độ kín âm cần thiết cho chống ồn hiệu quả.", cameraTitle: "AirPods đầu tiên giới thiệu ANC.", cameraBody: "H1, micro hướng ra/vào trong, Adaptive EQ và driver tùy chỉnh liên tục định hình âm thanh, giảm tiếng ồn bên ngoài.", performanceTitle: "Điều khiển lực và sạc không dây.", performanceBody: "Nhấn thân tai nghe để điều khiển phát và chế độ nghe; Hộp Sạc Không Dây hỗ trợ Qi hoặc Lightning, cho tổng hơn 24 giờ.",
    }, labels.vi),
    "airpods-max": airPodsCopy({
      name: "AirPods Max (thế hệ 1)", eyebrow: "MỘT CẤU TRÚC HOÀN TOÀN ĐỘC ĐÁO.", intro: "Tai nghe over-ear nguyên bản của Apple với hai chip H1, âm thanh hi-fi, ANC, Xuyên Âm và cổng Lightning.", display: "Over-ear", camera: "Chủ động", battery: "20 giờ", designTitle: "Lưới dệt, nhôm và memory foam.", designBody: "Vòm lưới dệt thoáng khí, khung thép không gỉ, chụp nhôm anod hóa và đệm memory foam phân bổ trọng lượng, giữ âm thanh.", cameraTitle: "Âm thanh điện toán trong mỗi chụp tai.", cameraBody: "Driver động Apple, chín micro, Adaptive EQ, ANC, Xuyên Âm và Âm Thanh Không Gian được phối hợp bởi hai chip H1.", performanceTitle: "Điều khiển Digital Crown. Sạc Lightning.", performanceBody: "Digital Crown điều khiển âm lượng, nội dung; pin sạc Lightning hoạt động đến 20 giờ khi bật kiểm soát tiếng ồn.",
    }, labels.vi),
  },
};

export function getAdditionalAirPodsProductCopy(
  language: ContentLanguage,
  model: AirPodsModel,
): ProductCopy | undefined {
  if (!(model in additionalAirPodsCopy.en)) return undefined;
  const localizedLanguage = language === "vi" ? "vi" : "en";
  return additionalAirPodsCopy[localizedLanguage][model as AdditionalAirPodsModel];
}
