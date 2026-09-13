import type { ContentLanguage } from "./i18n";
import type { AppleWatchModel } from "./product-data";
import type { ProductCopy } from "./product-copy-types";

type HistoricalAppleWatchModel = Exclude<
  AppleWatchModel,
  "apple-watch-series-11" | "apple-watch-ultra-3" | "apple-watch-se-3"
>;

type WatchCopyInput = Omit<
  ProductCopy,
  "camera" | "secondarySpecLabel" | "secondarySectionKicker"
> & {
  sensors: string;
};

function watchCopy(
  input: WatchCopyInput,
  labels: { sensors: string; health: string },
): ProductCopy {
  const { sensors, ...copy } = input;
  return {
    ...copy,
    camera: sensors,
    secondarySpecLabel: labels.sensors,
    secondarySectionKicker: labels.health,
  };
}

const labels = {
  en: { sensors: "SENSORS", health: "HEALTH / 02" },
  vi: { sensors: "CẢM BIẾN", health: "SỨC KHỎE / 02" },
} as const;

const historicalAppleWatchCopy: Record<
  "en" | "vi",
  Record<HistoricalAppleWatchModel, ProductCopy>
> = {
  en: {
    "apple-watch-series-10": watchCopy({
      name: "Apple Watch Series 10",
      eyebrow: "THINNER. BRIGHTER. MIGHTIER.",
      intro: "A thinner 42mm or 46mm design with a wide-angle Always-On display, depth sensing, and faster charging.",
      display: "42mm / 46mm",
      sensors: "Heart + depth",
      battery: "18 hours",
      designTitle: "The biggest display in the thinnest Series case.",
      designBody: "A 9.7mm aluminum or titanium case surrounds a wide-angle OLED display that stays readable from more angles and reaches 2,000 nits.",
      cameraTitle: "More health and water insight.",
      cameraBody: "Electrical and optical heart sensors, wrist temperature, a depth gauge, and water temperature sensing support health, sleep, and shallow-water activities.",
      performanceTitle: "S10. Double tap. Faster charging.",
      performanceBody: "The S10 SiP enables on-device Siri and double tap, while fast charging reaches about 80 percent in 30 minutes.",
    }, labels.en),
    "apple-watch-series-9": watchCopy({
      name: "Apple Watch Series 9",
      eyebrow: "SMARTER. BRIGHTER. MIGHTIER.",
      intro: "The S9 SiP, a display up to 2,000 nits, double tap, and precision finding in familiar 41mm and 45mm sizes.",
      display: "41mm / 45mm",
      sensors: "Heart + temperature",
      battery: "18 hours",
      designTitle: "Familiar form. Twice the peak brightness.",
      designBody: "The edge-to-edge Always-On Retina display reaches 2,000 nits, with aluminum or stainless-steel cases and 50-meter water resistance.",
      cameraTitle: "Meaningful signals from the wrist.",
      cameraBody: "Third-generation optical and electrical heart sensors combine with wrist temperature and motion sensing for ECG, cycle, sleep, and safety features.",
      performanceTitle: "The first S9 generation.",
      performanceBody: "S9 introduced a 4-core Neural Engine, double tap, on-device Siri, and second-generation Ultra Wideband for Precision Finding.",
    }, labels.en),
    "apple-watch-series-8": watchCopy({
      name: "Apple Watch Series 8",
      eyebrow: "A HEALTHY LEAP AHEAD.",
      intro: "Temperature sensing, Crash Detection, ECG, and blood oxygen in 41mm and 45mm Always-On designs.",
      display: "41mm / 45mm",
      sensors: "ECG + temperature",
      battery: "18 hours",
      designTitle: "A large, durable edge-to-edge display.",
      designBody: "Its crack-resistant front crystal, IP6X dust resistance, and WR50 swimproof construction are built for everyday wear.",
      cameraTitle: "Temperature sensing joins the health suite.",
      cameraBody: "Wrist temperature, ECG, blood oxygen, heart rate, and advanced motion sensors support cycle insights, sleep tracking, Fall Detection, and Crash Detection.",
      performanceTitle: "S8, fast charging, and cellular freedom.",
      performanceBody: "The S8 SiP, optional LTE, Bluetooth 5.3, and USB-C magnetic fast charging keep core watch experiences responsive and connected.",
    }, labels.en),
    "apple-watch-series-7": watchCopy({
      name: "Apple Watch Series 7",
      eyebrow: "BIGGER SCREEN. TOUGHER FRONT.",
      intro: "A larger 41mm or 45mm Always-On display, stronger front crystal, IP6X protection, and fast charging.",
      display: "41mm / 45mm",
      sensors: "ECG + blood oxygen",
      battery: "18 hours",
      designTitle: "More screen with softer corners.",
      designBody: "Narrow borders create a larger edge-to-edge display, while the redesigned front crystal adds crack resistance and IP6X dust protection.",
      cameraTitle: "A broad health toolkit.",
      cameraBody: "Electrical and third-generation optical heart sensors support ECG, blood oxygen, heart-rate alerts, sleep, and activity tracking.",
      performanceTitle: "S7 with a faster way to refuel.",
      performanceBody: "The S7 SiP, U1 chip, dual-band Wi-Fi, optional LTE, and the first Apple Watch USB-C fast-charging system power the experience.",
    }, labels.en),
    "apple-watch-series-6": watchCopy({
      name: "Apple Watch Series 6",
      eyebrow: "THE FUTURE OF HEALTH IS ON YOUR WRIST.",
      intro: "Blood oxygen sensing, ECG, an Always-On display, and the S6 SiP in 40mm and 44mm cases.",
      display: "40mm / 44mm",
      sensors: "ECG + blood oxygen",
      battery: "18 hours",
      designTitle: "Always-On, now brighter outdoors.",
      designBody: "The LTPO OLED display remains visible at a glance, with aluminum, stainless-steel, and titanium choices rated water resistant to 50 meters.",
      cameraTitle: "Blood oxygen joins ECG.",
      cameraBody: "A blood oxygen sensor, electrical heart sensor, third-generation optical heart sensor, compass, and always-on altimeter broaden wellness and fitness tracking.",
      performanceTitle: "S6 and the first U1-equipped Watch.",
      performanceBody: "A 64-bit dual-core S6 SiP, U1 Ultra Wideband chip, dual-band Wi-Fi, GPS, and optional LTE improve speed and connectivity.",
    }, labels.en),
    "apple-watch-series-5": watchCopy({
      name: "Apple Watch Series 5",
      eyebrow: "THIS WATCH TELLS TIME. AND SO MUCH MORE.",
      intro: "The first Always-On Apple Watch display, a built-in compass, ECG, and 32GB of storage.",
      display: "40mm / 44mm",
      sensors: "ECG + compass",
      battery: "18 hours",
      designTitle: "The display that never sleeps.",
      designBody: "An Always-On LTPO OLED display shows time and complications without a wrist raise, in aluminum, steel, titanium, or ceramic cases.",
      cameraTitle: "Heart insights and direction.",
      cameraBody: "Electrical and second-generation optical heart sensors enable ECG and heart-rate alerts, while the compass and altimeter improve navigation.",
      performanceTitle: "S5 with 32GB throughout the lineup.",
      performanceBody: "The dual-core S5 SiP, W3 wireless chip, GPS, optional LTE, and international emergency calling support everyday independence.",
    }, labels.en),
    "apple-watch-series-3": watchCopy({
      name: "Apple Watch Series 3",
      eyebrow: "CELLULAR FREEDOM ARRIVES.",
      intro: "Built-in GPS and altimeter, an optical heart sensor, and the first Apple Watch option with LTE.",
      display: "38mm / 42mm",
      sensors: "Heart + altimeter",
      battery: "18 hours",
      designTitle: "The original 38mm and 42mm silhouette.",
      designBody: "The Retina OLED display reaches 1,000 nits, while a swimproof WR50 enclosure keeps the classic Apple Watch proportions.",
      cameraTitle: "Activity, elevation, and heart rate.",
      cameraBody: "The optical heart sensor, barometric altimeter, accelerometer, gyroscope, and GPS track workouts, movement, elevation, and safety events.",
      performanceTitle: "S3 puts LTE on the wrist.",
      performanceBody: "The dual-core S3 and W2 wireless chip deliver faster apps, GPS, Bluetooth 4.2, and optional cellular calling away from iPhone.",
    }, labels.en),
    "apple-watch-ultra-2": watchCopy({
      name: "Apple Watch Ultra 2",
      eyebrow: "NEXT LEVEL ADVENTURE.",
      intro: "A 49mm Grade 5 titanium watch with a 3,000-nit display, S9, precision dual-frequency GPS, and up to 72 hours in Low Power Mode.",
      display: "49mm OLED",
      sensors: "Health + depth",
      battery: "36 hours",
      designTitle: "Titanium, sapphire, and 3,000 nits.",
      designBody: "The raised Grade 5 titanium case protects a flat sapphire crystal, with WR100, IP6X, MIL-STD 810H testing, and diving support to 40 meters.",
      cameraTitle: "Built for altitude and depth.",
      cameraBody: "Electrical and optical heart sensors, wrist temperature, a depth gauge, water temperature, compass, and precision GPS cover health and expedition metrics.",
      performanceTitle: "S9 intelligence for the outdoors.",
      performanceBody: "S9 brings double tap and on-device Siri, while dual-frequency GPS, a siren, Action button, UWB, and LTE help off the beaten path.",
    }, labels.en),
    "apple-watch-ultra": watchCopy({
      name: "Apple Watch Ultra",
      eyebrow: "ADVENTURE AWAITS.",
      intro: "The original 49mm titanium Ultra with Action button, precision dual-frequency GPS, a depth gauge, and 36-hour battery life.",
      display: "49mm OLED",
      sensors: "Health + depth",
      battery: "36 hours",
      designTitle: "A new titanium class of Apple Watch.",
      designBody: "A raised titanium case, flat sapphire crystal, WR100, IP6X, and MIL-STD 810H testing protect the 2,000-nit display in demanding environments.",
      cameraTitle: "From trailhead to 40 meters deep.",
      cameraBody: "Precision dual-frequency GPS, compass, altimeter, depth, water temperature, heart, blood oxygen, and temperature sensors build a wide expedition toolkit.",
      performanceTitle: "Action button. Siren. S8.",
      performanceBody: "The customizable Action button, 86-decibel siren, dual speakers, three-microphone array, S8 SiP, and LTE are purpose-built for adventure.",
    }, labels.en),
    "apple-watch-se": watchCopy({
      name: "Apple Watch SE (1st generation)",
      eyebrow: "HEAVY ON FEATURES. LIGHT ON PRICE.",
      intro: "Core activity, heart-rate, safety, and cellular features in 40mm and 44mm recycled-aluminum cases.",
      display: "40mm / 44mm",
      sensors: "Heart + motion",
      battery: "18 hours",
      designTitle: "The essential Apple Watch shape.",
      designBody: "A 1,000-nit Retina LTPO OLED display sits in a lightweight aluminum case with 50-meter water resistance.",
      cameraTitle: "Essential health and safety sensing.",
      cameraBody: "A second-generation optical heart sensor, compass, always-on altimeter, accelerometer, and gyroscope support workouts, Fall Detection, and Emergency SOS.",
      performanceTitle: "S5 speed with optional cellular.",
      performanceBody: "The S5 SiP, W3 wireless chip, GPS, 32GB of storage, and optional LTE cover the core connected-watch experience.",
    }, labels.en),
  },
  vi: {
    "apple-watch-series-10": watchCopy({
      name: "Apple Watch Series 10", eyebrow: "MỎNG HƠN. SÁNG HƠN. MẠNH MẼ HƠN.", intro: "Thiết kế 42 mm hoặc 46 mm mỏng hơn, màn hình Always-On góc rộng, đo độ sâu và sạc nhanh hơn.", display: "42 mm / 46 mm", sensors: "Tim + độ sâu", battery: "18 giờ", designTitle: "Màn hình lớn nhất trong thân Series mỏng nhất.", designBody: "Vỏ nhôm hoặc titanium dày 9,7 mm bao quanh màn hình OLED góc rộng, dễ đọc từ nhiều góc và sáng đến 2.000 nit.", cameraTitle: "Hiểu thêm về sức khỏe và hoạt động dưới nước.", cameraBody: "Cảm biến tim điện/quang học, nhiệt độ cổ tay, độ sâu và nhiệt độ nước hỗ trợ sức khỏe, giấc ngủ và hoạt động vùng nước nông.", performanceTitle: "S10. Chạm hai lần. Sạc nhanh hơn.", performanceBody: "S10 hỗ trợ Siri trên thiết bị và chạm hai lần; sạc nhanh đạt khoảng 80% trong 30 phút.",
    }, labels.vi),
    "apple-watch-series-9": watchCopy({
      name: "Apple Watch Series 9", eyebrow: "THÔNG MINH HƠN. SÁNG HƠN. MẠNH MẼ HƠN.", intro: "Chip S9, màn hình sáng đến 2.000 nit, chạm hai lần và Tìm Chính Xác trong hai cỡ 41 mm và 45 mm.", display: "41 mm / 45 mm", sensors: "Tim + nhiệt độ", battery: "18 giờ", designTitle: "Dáng quen thuộc. Độ sáng tối đa gấp đôi.", designBody: "Màn hình Retina Always-On tràn viền đạt 2.000 nit, với vỏ nhôm hoặc thép không gỉ và khả năng chống nước 50 mét.", cameraTitle: "Những tín hiệu ý nghĩa từ cổ tay.", cameraBody: "Cảm biến tim quang học thế hệ 3, cảm biến tim điện, nhiệt độ cổ tay và chuyển động hỗ trợ ECG, chu kỳ, giấc ngủ và an toàn.", performanceTitle: "Thế hệ đầu tiên với S9.", performanceBody: "S9 đem đến Neural Engine 4 lõi, chạm hai lần, Siri trên thiết bị và Ultra Wideband thế hệ 2 cho Tìm Chính Xác.",
    }, labels.vi),
    "apple-watch-series-8": watchCopy({
      name: "Apple Watch Series 8", eyebrow: "BƯỚC TIẾN LỚN CHO SỨC KHỎE.", intro: "Cảm biến nhiệt độ, Phát Hiện Va Chạm, ECG và oxy trong máu trong thiết kế Always-On 41 mm và 45 mm.", display: "41 mm / 45 mm", sensors: "ECG + nhiệt độ", battery: "18 giờ", designTitle: "Màn hình tràn viền lớn và bền.", designBody: "Kính trước chống nứt, kháng bụi IP6X và khả năng bơi WR50 được thiết kế cho việc đeo hàng ngày.", cameraTitle: "Cảm biến nhiệt độ gia nhập bộ công cụ sức khỏe.", cameraBody: "Nhiệt độ cổ tay, ECG, oxy máu, nhịp tim và cảm biến chuyển động hỗ trợ chu kỳ, giấc ngủ, Phát Hiện Ngã và Va Chạm.", performanceTitle: "S8, sạc nhanh và kết nối di động.", performanceBody: "S8, LTE tùy chọn, Bluetooth 5.3 và sạc nhanh từ tính USB-C giữ trải nghiệm mượt mà, kết nối.",
    }, labels.vi),
    "apple-watch-series-7": watchCopy({
      name: "Apple Watch Series 7", eyebrow: "MÀN HÌNH LỚN HƠN. MẶT KÍNH BỀN HƠN.", intro: "Màn hình Always-On 41 mm hoặc 45 mm lớn hơn, kính trước chắc hơn, IP6X và sạc nhanh.", display: "41 mm / 45 mm", sensors: "ECG + oxy máu", battery: "18 giờ", designTitle: "Nhiều màn hình hơn, góc bo mềm mại hơn.", designBody: "Viền hẹp tạo màn hình tràn cạnh lớn hơn; kính trước thiết kế lại tăng khả năng chống nứt và đạt chuẩn kháng bụi IP6X.", cameraTitle: "Bộ công cụ sức khỏe đa dạng.", cameraBody: "Cảm biến tim điện và quang học thế hệ 3 hỗ trợ ECG, oxy máu, cảnh báo nhịp tim, giấc ngủ và hoạt động.", performanceTitle: "S7 và cách nạp pin nhanh hơn.", performanceBody: "S7, chip U1, Wi-Fi hai băng tần, LTE tùy chọn và hệ thống sạc nhanh USB-C đầu tiên trên Apple Watch vận hành trải nghiệm.",
    }, labels.vi),
    "apple-watch-series-6": watchCopy({
      name: "Apple Watch Series 6", eyebrow: "TƯƠNG LAI SỨC KHỎE TRÊN CỔ TAY.", intro: "Đo oxy trong máu, ECG, màn hình Always-On và chip S6 trong vỏ 40 mm hoặc 44 mm.", display: "40 mm / 44 mm", sensors: "ECG + oxy máu", battery: "18 giờ", designTitle: "Always-On, nay sáng hơn ngoài trời.", designBody: "Màn hình LTPO OLED luôn dễ xem, với lựa chọn vỏ nhôm, thép không gỉ hoặc titanium và chống nước 50 mét.", cameraTitle: "Oxy trong máu kết hợp ECG.", cameraBody: "Cảm biến oxy máu, tim điện, tim quang học thế hệ 3, la bàn và cao độ luôn bật mở rộng theo dõi sức khỏe, luyện tập.", performanceTitle: "S6 và Apple Watch đầu tiên có U1.", performanceBody: "S6 hai lõi 64-bit, U1 Ultra Wideband, Wi-Fi hai băng tần, GPS và LTE tùy chọn cải thiện tốc độ, kết nối.",
    }, labels.vi),
    "apple-watch-series-5": watchCopy({
      name: "Apple Watch Series 5", eyebrow: "XEM GIỜ. VÀ CÒN NHIỀU HƠN THẾ.", intro: "Apple Watch đầu tiên có màn hình Always-On, la bàn tích hợp, ECG và dung lượng 32GB.", display: "40 mm / 44 mm", sensors: "ECG + la bàn", battery: "18 giờ", designTitle: "Màn hình không bao giờ ngủ.", designBody: "Màn hình LTPO OLED Always-On hiển thị giờ và biến chứng mà không cần nâng cổ tay, trên vỏ nhôm, thép, titanium hoặc gốm.", cameraTitle: "Thông tin tim mạch và phương hướng.", cameraBody: "Cảm biến tim điện và quang học thế hệ 2 hỗ trợ ECG, cảnh báo nhịp tim; la bàn cùng cao độ kế hỗ trợ định hướng.", performanceTitle: "S5 với 32GB trên mọi phiên bản.", performanceBody: "S5 hai lõi, chip không dây W3, GPS, LTE tùy chọn và gọi khẩn cấp quốc tế hỗ trợ trải nghiệm độc lập mỗi ngày.",
    }, labels.vi),
    "apple-watch-series-3": watchCopy({
      name: "Apple Watch Series 3", eyebrow: "TỰ DO KẾT NỐI DI ĐỘNG.", intro: "GPS và cao độ kế tích hợp, cảm biến tim quang học và tùy chọn LTE đầu tiên trên Apple Watch.", display: "38 mm / 42 mm", sensors: "Tim + cao độ", battery: "18 giờ", designTitle: "Dáng Apple Watch 38 mm và 42 mm nguyên bản.", designBody: "Màn hình Retina OLED sáng 1.000 nit, trong thân máy WR50 phù hợp bơi lội và giữ tỷ lệ Apple Watch cổ điển.", cameraTitle: "Hoạt động, độ cao và nhịp tim.", cameraBody: "Cảm biến tim quang học, cao độ khí áp, gia tốc kế, con quay và GPS theo dõi luyện tập, chuyển động, độ cao và an toàn.", performanceTitle: "S3 đưa LTE lên cổ tay.", performanceBody: "S3 hai lõi và chip W2 đem lại ứng dụng nhanh hơn, GPS, Bluetooth 4.2 và tùy chọn gọi di động khi không có iPhone.",
    }, labels.vi),
    "apple-watch-ultra-2": watchCopy({
      name: "Apple Watch Ultra 2", eyebrow: "PHIÊU LƯU LÊN TẦM CAO MỚI.", intro: "Đồng hồ titanium Grade 5 49 mm với màn hình 3.000 nit, S9, GPS hai tần số chính xác và đến 72 giờ ở Chế Độ Nguồn Điện Thấp.", display: "OLED 49 mm", sensors: "Sức khỏe + độ sâu", battery: "36 giờ", designTitle: "Titanium, sapphire và 3.000 nit.", designBody: "Vỏ titanium Grade 5 nhô cao bảo vệ kính sapphire phẳng, với WR100, IP6X, thử nghiệm MIL-STD 810H và lặn đến 40 mét.", cameraTitle: "Thiết kế cho cả độ cao và độ sâu.", cameraBody: "Cảm biến tim điện/quang học, nhiệt độ cổ tay, độ sâu, nhiệt độ nước, la bàn và GPS chính xác bao quát sức khỏe lẫn thám hiểm.", performanceTitle: "Trí thông minh S9 cho ngoài trời.", performanceBody: "S9 đem đến chạm hai lần và Siri trên thiết bị; GPS hai tần số, còi báo động, nút Tác Vụ, UWB và LTE hỗ trợ hành trình.",
    }, labels.vi),
    "apple-watch-ultra": watchCopy({
      name: "Apple Watch Ultra", eyebrow: "PHIÊU LƯU ĐANG CHỜ.", intro: "Ultra titanium 49 mm nguyên bản với nút Tác Vụ, GPS hai tần số chính xác, đo độ sâu và pin 36 giờ.", display: "OLED 49 mm", sensors: "Sức khỏe + độ sâu", battery: "36 giờ", designTitle: "Một đẳng cấp Apple Watch titanium mới.", designBody: "Vỏ titanium nhô cao, kính sapphire phẳng, WR100, IP6X và thử nghiệm MIL-STD 810H bảo vệ màn hình 2.000 nit trong môi trường khắc nghiệt.", cameraTitle: "Từ đường mòn đến độ sâu 40 mét.", cameraBody: "GPS hai tần số, la bàn, cao độ, độ sâu, nhiệt độ nước, tim, oxy máu và nhiệt độ tạo nên bộ công cụ thám hiểm rộng.", performanceTitle: "Nút Tác Vụ. Còi báo động. S8.", performanceBody: "Nút Tác Vụ tùy chỉnh, còi 86 decibel, loa kép, cụm ba micro, S8 và LTE được thiết kế chuyên cho phiêu lưu.",
    }, labels.vi),
    "apple-watch-se": watchCopy({
      name: "Apple Watch SE (thế hệ 1)", eyebrow: "NHIỀU TÍNH NĂNG. GIÁ NHẸ NHÀNG.", intro: "Các tính năng cốt lõi về hoạt động, nhịp tim, an toàn và di động trong vỏ nhôm tái chế 40 mm hoặc 44 mm.", display: "40 mm / 44 mm", sensors: "Tim + chuyển động", battery: "18 giờ", designTitle: "Dáng Apple Watch thiết yếu.", designBody: "Màn hình Retina LTPO OLED 1.000 nit nằm trong vỏ nhôm nhẹ, có khả năng chống nước 50 mét.", cameraTitle: "Cảm biến sức khỏe và an toàn thiết yếu.", cameraBody: "Cảm biến tim quang học thế hệ 2, la bàn, cao độ luôn bật, gia tốc kế và con quay hỗ trợ luyện tập, Phát Hiện Ngã và SOS.", performanceTitle: "Tốc độ S5 với kết nối di động tùy chọn.", performanceBody: "S5, chip không dây W3, GPS, 32GB và LTE tùy chọn đáp ứng trải nghiệm đồng hồ kết nối cốt lõi.",
    }, labels.vi),
  },
};

export function getHistoricalAppleWatchProductCopy(
  language: ContentLanguage,
  model: AppleWatchModel,
): ProductCopy | undefined {
  if (!(model in historicalAppleWatchCopy.en)) return undefined;
  const localizedLanguage = language === "vi" ? "vi" : "en";
  return historicalAppleWatchCopy[localizedLanguage][model as HistoricalAppleWatchModel];
}
