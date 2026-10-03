import type { LucideIcon } from "lucide-react";
import {
  CreditCard,
  MapPin,
  RefreshCcw,
  ShieldCheck,
  ShoppingBag,
  Truck,
  Wrench,
} from "lucide-react";
import type { Language } from "./i18n";

export type StoreLink = {
  label: string;
  title: string;
  description: string;
  href: string;
  icon: LucideIcon;
};

export type PolicyLink = StoreLink & {
  index: string;
};

type StorePolicyCopy = {
  eyebrow: string;
  title: string;
  description: string;
  storeLabel: string;
  policyEyebrow: string;
  policyTitle: string;
  policyDescription: string;
  marquee: string;
  stores: ReadonlyArray<StoreLink>;
  policies: ReadonlyArray<PolicyLink>;
};

const links = {
  onlineStore: "https://www.apple.com/vn/store",
  resellers: "https://locate.apple.com/vn/en/sales",
  support: "https://support.apple.com/vi-vn",
  shipping: "https://www.apple.com/vn/shop/help/shipping_delivery",
  returns: "https://www.apple.com/vn/shop/help/returns_refund",
  financing: "https://www.apple.com/vn/shop/browse/financing",
} as const;

const copy: Record<"vi" | "en", StorePolicyCopy> = {
  vi: {
    eyebrow: "STORE / SERVICE",
    title: "Từ khám phá đến sở hữu.",
    description:
      "Chọn cách mua phù hợp, tìm đại lý được ủy quyền hoặc kết nối trực tiếp với hệ thống hỗ trợ của Apple.",
    storeLabel: "Điểm đến",
    policyEyebrow: "POLICY / CARE",
    policyTitle: "Rõ ràng ở từng bước.",
    policyDescription:
      "Thông tin chính thức về giao hàng, sản phẩm lỗi, thanh toán và dịch vụ sau mua tại Việt Nam.",
    marquee: "STORE  ·  SERVICE  ·  SUPPORT  ·  POLICY  ·  CARE  ·  ",
    stores: [
      {
        label: "TRỰC TUYẾN",
        title: "Apple Store Online",
        description: "Khám phá sản phẩm, phụ kiện và các lựa chọn mua trực tiếp từ Apple.",
        href: links.onlineStore,
        icon: ShoppingBag,
      },
      {
        label: "GẦN BẠN",
        title: "Đại lý ủy quyền",
        description: "Tìm địa điểm bán hàng được Apple ủy quyền theo khu vực và sản phẩm.",
        href: links.resellers,
        icon: MapPin,
      },
      {
        label: "HỖ TRỢ",
        title: "Dịch vụ & sửa chữa",
        description: "Kết nối với hỗ trợ kỹ thuật và những lựa chọn dịch vụ chính thức.",
        href: links.support,
        icon: Wrench,
      },
    ],
    policies: [
      {
        index: "01",
        label: "GIAO NHẬN",
        title: "Vận chuyển & giao hàng",
        description: "Theo dõi quy trình giao hàng và những thông tin cần biết khi nhận thiết bị.",
        href: links.shipping,
        icon: Truck,
      },
      {
        index: "02",
        label: "SAU MUA",
        title: "Sản phẩm lỗi & hoàn tiền",
        description: "Xem điều kiện áp dụng cho sản phẩm lỗi, thay thế và hoàn tiền tại Việt Nam.",
        href: links.returns,
        icon: RefreshCcw,
      },
      {
        index: "03",
        label: "BẢO VỆ",
        title: "Bảo hành & hỗ trợ",
        description: "Kiểm tra phạm vi bảo hành và tìm phương án hỗ trợ phù hợp cho thiết bị.",
        href: links.support,
        icon: ShieldCheck,
      },
      {
        index: "04",
        label: "THANH TOÁN",
        title: "Tài chính & trả góp",
        description: "Khám phá các lựa chọn thanh toán và chương trình tài chính trên Apple Store Online.",
        href: links.financing,
        icon: CreditCard,
      },
    ],
  },
  en: {
    eyebrow: "STORE / SERVICE",
    title: "From discovery to ownership.",
    description:
      "Choose how to buy, find an authorized reseller, or connect directly with Apple Support.",
    storeLabel: "Destinations",
    policyEyebrow: "POLICY / CARE",
    policyTitle: "Clarity at every step.",
    policyDescription:
      "Official information for delivery, defective products, payment, and after-sales service in Vietnam.",
    marquee: "STORE  ·  SERVICE  ·  SUPPORT  ·  POLICY  ·  CARE  ·  ",
    stores: [
      {
        label: "ONLINE",
        title: "Apple Store Online",
        description: "Explore products, accessories, and ways to buy directly from Apple.",
        href: links.onlineStore,
        icon: ShoppingBag,
      },
      {
        label: "NEAR YOU",
        title: "Authorized resellers",
        description: "Find Apple Authorized Resellers by location and product.",
        href: links.resellers,
        icon: MapPin,
      },
      {
        label: "SUPPORT",
        title: "Service & repair",
        description: "Connect with technical support and official service options.",
        href: links.support,
        icon: Wrench,
      },
    ],
    policies: [
      {
        index: "01",
        label: "DELIVERY",
        title: "Shipping & delivery",
        description: "Review the delivery process and what to know when your device arrives.",
        href: links.shipping,
        icon: Truck,
      },
      {
        index: "02",
        label: "AFTER PURCHASE",
        title: "Defects & refunds",
        description: "Review Vietnam terms for defective products, replacements, and refunds.",
        href: links.returns,
        icon: RefreshCcw,
      },
      {
        index: "03",
        label: "PROTECTION",
        title: "Warranty & support",
        description: "Check warranty coverage and find the right support path for your device.",
        href: links.support,
        icon: ShieldCheck,
      },
      {
        index: "04",
        label: "PAYMENT",
        title: "Financing options",
        description: "Explore payment and financing options on the Apple Store Online.",
        href: links.financing,
        icon: CreditCard,
      },
    ],
  },
};

export function getStorePolicyCopy(language: Language) {
  return copy[language === "vi" ? "vi" : "en"];
}
