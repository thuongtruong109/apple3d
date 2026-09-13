import { resolveContentLanguage, type ContentLanguage, type Language } from "./i18n";
import type { Iphone14Model } from "./product-data";
import type { ProductCopy } from "./product-copy-types";

type ProductCopyBase = Omit<ProductCopy, "name" | "display" | "battery">;
type ProductCopyVariant = Pick<ProductCopy, "name" | "display" | "battery">;

function productVariants<ModelId extends Iphone14Model>(
  base: ProductCopyBase,
  variants: Record<ModelId, ProductCopyVariant>,
): Record<ModelId, ProductCopy> {
  return Object.fromEntries(
    (Object.keys(variants) as ModelId[]).map((model) => [
      model,
      { ...base, ...variants[model] },
    ]),
  ) as Record<ModelId, ProductCopy>;
}

const iphone14ProductCopy: Record<ContentLanguage, Record<Iphone14Model, ProductCopy>> = {
  en: {
    ...productVariants(
      {
        eyebrow: "PRO. BEYOND.",
        intro: "Dynamic Island, an Always-On display, A16 Bionic, and the first 48MP Main camera on iPhone.",
        camera: "48MP Pro",
        designTitle: "Meet Dynamic Island.",
        designBody: "A surgical-grade stainless steel frame, textured matte glass, Ceramic Shield, and IP68 protection form a distinctly Pro design.",
        cameraTitle: "The Pro camera system gets massively more Pro.",
        cameraBody: "A 48MP Main camera joins Ultra Wide, 2x optical-quality framing, and a dedicated 3x Telephoto, with ProRAW and ProRes workflows.",
        performanceTitle: "A16 Bionic. The ultimate smartphone chip of its generation.",
        performanceBody: "A 6-core CPU, 5-core GPU, and 16-core Neural Engine power computational photography, smooth graphics, and efficient all-day use.",
      },
      {
        "14-pro": { name: "iPhone 14 Pro", display: "6.1″ ProMotion", battery: "23 hours" },
        "14-pro-max": { name: "iPhone 14 Pro Max", display: "6.7″ ProMotion", battery: "29 hours" },
      },
    ),
    ...productVariants(
      {
        eyebrow: "BIG AND BIGGER.",
        intro: "Two Super Retina XDR sizes, A15 Bionic, an advanced dual-camera system, and essential satellite safety features.",
        camera: "Dual 12MP",
        designTitle: "Durable by design.",
        designBody: "Aerospace-grade aluminum, a glass back, Ceramic Shield up front, and IP68 water resistance protect the 6.1-inch and 6.7-inch designs.",
        cameraTitle: "A huge leap for low-light photos.",
        cameraBody: "A new 12MP Main camera, Ultra Wide, Photonic Engine, sensor-shift stabilization, and an autofocus TrueDepth camera improve every shot.",
        performanceTitle: "A15 Bionic. Fast that lasts.",
        performanceBody: "The 5-core GPU, 6-core CPU, and 16-core Neural Engine drive demanding apps, Cinematic mode, and Action mode efficiently.",
      },
      {
        "14": { name: "iPhone 14", display: "6.1″ XDR", battery: "20 hours" },
        "14-plus": { name: "iPhone 14 Plus", display: "6.7″ XDR", battery: "26 hours" },
      },
    ),
  },
  vi: {
    ...productVariants(
      {
        eyebrow: "PRO. VƯỢT TRỘI.",
        intro: "Dynamic Island, màn hình Luôn Bật, A16 Bionic và camera Chính 48MP đầu tiên trên iPhone.",
        camera: "Pro 48MP",
        designTitle: "Làm quen với Dynamic Island.",
        designBody: "Khung thép không gỉ chuẩn phẫu thuật, kính nhám, Ceramic Shield và chuẩn IP68 tạo nên thiết kế đậm chất Pro.",
        cameraTitle: "Hệ thống camera Pro nay còn Pro hơn nữa.",
        cameraBody: "Camera Chính 48MP kết hợp Ultra Wide, khung hình 2x chất lượng quang học và Telephoto 3x chuyên dụng, hỗ trợ quy trình ProRAW và ProRes.",
        performanceTitle: "A16 Bionic. Chip điện thoại đỉnh cao của thế hệ.",
        performanceBody: "CPU 6 lõi, GPU 5 lõi và Neural Engine 16 lõi vận hành nhiếp ảnh điện toán, đồ họa mượt và hiệu suất tiết kiệm cả ngày.",
      },
      {
        "14-pro": { name: "iPhone 14 Pro", display: "6,1″ ProMotion", battery: "23 giờ" },
        "14-pro-max": { name: "iPhone 14 Pro Max", display: "6,7″ ProMotion", battery: "29 giờ" },
      },
    ),
    ...productVariants(
      {
        eyebrow: "LỚN. VÀ LỚN HƠN.",
        intro: "Hai kích thước Super Retina XDR, A15 Bionic, hệ thống camera kép tiên tiến và các tính năng an toàn vệ tinh thiết yếu.",
        camera: "Kép 12MP",
        designTitle: "Bền bỉ ngay từ thiết kế.",
        designBody: "Nhôm chuẩn hàng không vũ trụ, mặt lưng kính, Ceramic Shield phía trước và chuẩn kháng nước IP68 bảo vệ hai thiết kế 6,1 và 6,7 inch.",
        cameraTitle: "Bước nhảy lớn cho ảnh thiếu sáng.",
        cameraBody: "Camera Chính 12MP mới, Ultra Wide, Photonic Engine, chống rung dịch chuyển cảm biến và TrueDepth lấy nét tự động cải thiện mọi khung hình.",
        performanceTitle: "A15 Bionic. Nhanh và bền bỉ.",
        performanceBody: "GPU 5 lõi, CPU 6 lõi và Neural Engine 16 lõi xử lý hiệu quả ứng dụng nặng, chế độ Điện Ảnh và chế độ Hành Động.",
      },
      {
        "14": { name: "iPhone 14", display: "6,1″ XDR", battery: "20 giờ" },
        "14-plus": { name: "iPhone 14 Plus", display: "6,7″ XDR", battery: "26 giờ" },
      },
    ),
  },
  pt: {
    ...productVariants(
      {
        eyebrow: "PRO. ALÉM.",
        intro: "Dynamic Island, tela Sempre Ativa, A16 Bionic e a primeira câmera principal de 48 MP em um iPhone.",
        camera: "Pro de 48 MP",
        designTitle: "Conheça a Dynamic Island.",
        designBody: "Aço inoxidável cirúrgico, vidro fosco texturizado, Ceramic Shield e proteção IP68 formam um design inconfundivelmente Pro.",
        cameraTitle: "O sistema de câmera Pro ficou muito mais Pro.",
        cameraBody: "A principal de 48 MP une-se à ultra-angular, ao enquadramento 2x de qualidade óptica e à teleobjetiva 3x, com fluxos ProRAW e ProRes.",
        performanceTitle: "A16 Bionic. O chip definitivo da sua geração.",
        performanceBody: "CPU de 6 núcleos, GPU de 5 núcleos e Neural Engine de 16 núcleos impulsionam fotografia computacional e gráficos eficientes.",
      },
      {
        "14-pro": { name: "iPhone 14 Pro", display: "6,1″ ProMotion", battery: "23 horas" },
        "14-pro-max": { name: "iPhone 14 Pro Max", display: "6,7″ ProMotion", battery: "29 horas" },
      },
    ),
    ...productVariants(
      {
        eyebrow: "GRANDE E AINDA MAIOR.",
        intro: "Dois tamanhos Super Retina XDR, A15 Bionic, câmera dupla avançada e recursos essenciais de segurança via satélite.",
        camera: "Dupla de 12 MP",
        designTitle: "Resistente desde o projeto.",
        designBody: "Alumínio aeroespacial, traseira de vidro, Ceramic Shield e resistência IP68 protegem os designs de 6,1 e 6,7 polegadas.",
        cameraTitle: "Um grande salto nas fotos com pouca luz.",
        cameraBody: "Nova principal de 12 MP, ultra-angular, Photonic Engine, estabilização por deslocamento do sensor e TrueDepth com foco automático melhoram cada foto.",
        performanceTitle: "A15 Bionic. Velocidade duradoura.",
        performanceBody: "GPU de 5 núcleos, CPU de 6 núcleos e Neural Engine de 16 núcleos movem apps exigentes, modo Cinema e modo Ação.",
      },
      {
        "14": { name: "iPhone 14", display: "6,1″ XDR", battery: "20 horas" },
        "14-plus": { name: "iPhone 14 Plus", display: "6,7″ XDR", battery: "26 horas" },
      },
    ),
  },
  es: {
    ...productVariants(
      {
        eyebrow: "PRO. MUY PRO.",
        intro: "Dynamic Island, pantalla Siempre Activa, A16 Bionic y la primera cámara principal de 48 MP en un iPhone.",
        camera: "Pro de 48 MP",
        designTitle: "Conoce la Dynamic Island.",
        designBody: "Acero inoxidable de calidad quirúrgica, vidrio mate texturizado, Ceramic Shield y protección IP68 crean un diseño inequívocamente Pro.",
        cameraTitle: "El sistema de cámaras Pro es mucho más Pro.",
        cameraBody: "La principal de 48 MP se suma al ultra gran angular, al encuadre 2x de calidad óptica y al teleobjetivo 3x, con ProRAW y ProRes.",
        performanceTitle: "A16 Bionic. El chip definitivo de su generación.",
        performanceBody: "CPU de 6 núcleos, GPU de 5 núcleos y Neural Engine de 16 núcleos impulsan fotografía computacional y gráficos eficientes.",
      },
      {
        "14-pro": { name: "iPhone 14 Pro", display: "6,1″ ProMotion", battery: "23 horas" },
        "14-pro-max": { name: "iPhone 14 Pro Max", display: "6,7″ ProMotion", battery: "29 horas" },
      },
    ),
    ...productVariants(
      {
        eyebrow: "GRANDE Y MÁS GRANDE.",
        intro: "Dos tamaños Super Retina XDR, A15 Bionic, cámara dual avanzada y funciones esenciales de seguridad vía satélite.",
        camera: "Dual de 12 MP",
        designTitle: "Duro por diseño.",
        designBody: "Aluminio aeroespacial, parte trasera de vidrio, Ceramic Shield y resistencia IP68 protegen los diseños de 6,1 y 6,7 pulgadas.",
        cameraTitle: "Un gran salto para las fotos con poca luz.",
        cameraBody: "Nueva principal de 12 MP, ultra gran angular, Photonic Engine, estabilización por desplazamiento del sensor y TrueDepth con enfoque automático mejoran cada toma.",
        performanceTitle: "A15 Bionic. Velocidad que perdura.",
        performanceBody: "GPU de 5 núcleos, CPU de 6 núcleos y Neural Engine de 16 núcleos mueven apps exigentes, modo Cine y modo Acción.",
      },
      {
        "14": { name: "iPhone 14", display: "6,1″ XDR", battery: "20 horas" },
        "14-plus": { name: "iPhone 14 Plus", display: "6,7″ XDR", battery: "26 horas" },
      },
    ),
  },
  zh: {
    ...productVariants(
      {
        eyebrow: "Pro，更进一步。",
        intro: "灵动岛、全天候显示、A16 仿生，以及 iPhone 首款 4800 万像素主摄。",
        camera: "4800 万像素 Pro",
        designTitle: "灵动岛，登场。",
        designBody: "手术级不锈钢、质感哑光玻璃、Ceramic Shield 和 IP68 防护，构成鲜明的 Pro 设计。",
        cameraTitle: "Pro 级摄像头系统，更 Pro。",
        cameraBody: "4800 万像素主摄搭配超广角、光学品质 2 倍构图和专用 3 倍长焦，并支持 ProRAW 与 ProRes 工作流。",
        performanceTitle: "A16 仿生，当代旗舰芯片。",
        performanceBody: "6 核中央处理器、5 核图形处理器和 16 核神经网络引擎驱动计算摄影、流畅图形与高效续航。",
      },
      {
        "14-pro": { name: "iPhone 14 Pro", display: "6.1″ ProMotion", battery: "23 小时" },
        "14-pro-max": { name: "iPhone 14 Pro Max", display: "6.7″ ProMotion", battery: "29 小时" },
      },
    ),
    ...productVariants(
      {
        eyebrow: "大，再大。",
        intro: "两种超视网膜 XDR 尺寸、A15 仿生、先进双摄系统，以及重要的卫星安全功能。",
        camera: "双 1200 万像素",
        designTitle: "耐用，融入设计。",
        designBody: "航空级铝金属、玻璃背板、正面 Ceramic Shield 和 IP68 防护，守护 6.1 英寸与 6.7 英寸设计。",
        cameraTitle: "低光拍摄，大步跃升。",
        cameraBody: "全新 1200 万像素主摄、超广角、光像引擎、传感器位移式防抖和自动对焦原深感摄像头，让每一拍都更出色。",
        performanceTitle: "A15 仿生，持久飞快。",
        performanceBody: "5 核图形处理器、6 核中央处理器和 16 核神经网络引擎高效驱动大型应用、电影效果模式和运动模式。",
      },
      {
        "14": { name: "iPhone 14", display: "6.1″ XDR", battery: "20 小时" },
        "14-plus": { name: "iPhone 14 Plus", display: "6.7″ XDR", battery: "26 小时" },
      },
    ),
  },
  ja: {
    ...productVariants(
      {
        eyebrow: "Pro。その先へ。",
        intro: "Dynamic Island、常時表示ディスプレイ、A16 Bionic、iPhone初の48MPメインカメラ。",
        camera: "48MP Pro",
        designTitle: "Dynamic Island、登場。",
        designBody: "医療に使われるレベルのステンレススチール、テクスチャードマットガラス、Ceramic Shield、IP68がProらしいデザインを形作ります。",
        cameraTitle: "Proのカメラが、圧倒的にProへ。",
        cameraBody: "48MPメイン、超広角、光学品質の2倍、専用3倍望遠を組み合わせ、ProRAWとProResのワークフローに対応します。",
        performanceTitle: "A16 Bionic。世代を代表するチップ。",
        performanceBody: "6コアCPU、5コアGPU、16コアNeural Engineがコンピュテーショナルフォトグラフィと効率的な性能を支えます。",
      },
      {
        "14-pro": { name: "iPhone 14 Pro", display: "6.1″ ProMotion", battery: "23時間" },
        "14-pro-max": { name: "iPhone 14 Pro Max", display: "6.7″ ProMotion", battery: "29時間" },
      },
    ),
    ...productVariants(
      {
        eyebrow: "大きく。さらに大きく。",
        intro: "2つのSuper Retina XDRサイズ、A15 Bionic、進化したデュアルカメラ、衛星経由の重要な安全機能。",
        camera: "デュアル12MP",
        designTitle: "耐久性を、デザインの中に。",
        designBody: "航空宇宙産業レベルのアルミニウム、ガラス背面、Ceramic Shield、IP68が6.1インチと6.7インチのボディを守ります。",
        cameraTitle: "暗い場所の写真が、大きく進化。",
        cameraBody: "新しい12MPメイン、超広角、Photonic Engine、センサーシフト手ぶれ補正、オートフォーカスTrueDepthがすべての写真を向上させます。",
        performanceTitle: "A15 Bionic。長く続く速さ。",
        performanceBody: "5コアGPU、6コアCPU、16コアNeural Engineが負荷の高いアプリ、シネマティックモード、アクションモードを効率よく動かします。",
      },
      {
        "14": { name: "iPhone 14", display: "6.1″ XDR", battery: "20時間" },
        "14-plus": { name: "iPhone 14 Plus", display: "6.7″ XDR", battery: "26時間" },
      },
    ),
  },
};

export function getIphone14ProductCopy(
  language: Language,
  model: Iphone14Model,
): ProductCopy {
  return iphone14ProductCopy[resolveContentLanguage(language)][model];
}
