import type { IconType } from "react-icons";
import {
  FaEnvelope,
  FaHouse,
  FaLinkedin,
  FaPaypal,
  FaPerson,
} from "react-icons/fa6";

type AssetData =
  | {
      label: string;
      path: string;
    }
  | IconType;

type Asset = {
  [key: string]: AssetData | AssetData[] | Asset;
};

export const Assets = {
  logo: {
    gm: {
      white: {
        label: "GM Master Mariner Logo (White)",
        path: "/favicon_white.svg",
      },
      blue: {
        label: "GM Master Mariner Logo (Blue)",
        path: "/favicon_gm_blue.svg",
      },
    },
    payfast: { label: "Payfast Logo", path: "/src/assets/payfast.png" },
    paypal: FaPaypal,
    linkedin: FaLinkedin,
  },
  icons: {
    home: FaHouse,
    about: FaPerson,
    contact: FaEnvelope,
  },
  bg_overlay: {
    label: "Background Overlay",
    path: "/src/assets/background_overlay.svg",
  },
  about: {
    profile: {
      label: "Geordie Mac Kenzie Profile",
      path: "/src/assets/about_profile.png",
    },
    couple: { label: "Couple's photo", path: "/src/assets/about_couple.jpg" },
  },
  book: {
    carousel: [
      { label: "Book Image 1", path: "/src/assets/carousel/book_1.png" },
      { label: "Book Image 2", path: "/src/assets/carousel/book_2.png" },
      { label: "Book Image 3", path: "/src/assets/carousel/book_3.png" },
      { label: "Book Image 4", path: "/src/assets/carousel/book_4.png" },
      { label: "Book Image 5", path: "/src/assets/carousel/book_5.png" },
      { label: "Book Image 6", path: "/src/assets/carousel/book_6.png" },
      { label: "Book Image 7", path: "/src/assets/carousel/book_7.png" },
      { label: "Book Image 8", path: "/src/assets/carousel/book_8.png" },
      { label: "Book Image 9", path: "/src/assets/carousel/book_9.png" },
    ],
    product: {
      label: "The ABC of ASD Book",
      path: "/src/assets/product_book.png",
    },
    product_ebook: {
      label: "The ABC of ASD eBook",
      path: "/src/assets/product_ebook.png",
    },
  },
} satisfies Asset;
