import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Image from "next/image";
import styles from "./page.module.css";
export default function Home() {
  return _jsxs("div", {
    className: styles.page,
    children: [
      _jsxs("main", {
        className: styles.main,
        children: [
          _jsx(Image, {
            className: styles.logo,
            src: "/next.svg",
            alt: "Next.js logo",
            width: 180,
            height: 38,
            priority: true,
          }),
          _jsxs("ol", {
            children: [
              _jsxs("li", {
                children: [
                  "Get started by editing ",
                  _jsx("code", { children: "src/app/page.tsx" }),
                  ".",
                ],
              }),
              _jsx("li", { children: "Save and see your changes instantly." }),
            ],
          }),
          _jsxs("div", {
            className: styles.ctas,
            children: [
              _jsxs("a", {
                className: styles.primary,
                href: "https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app",
                target: "_blank",
                rel: "noopener noreferrer",
                children: [
                  _jsx(Image, {
                    className: styles.logo,
                    src: "/vercel.svg",
                    alt: "Vercel logomark",
                    width: 20,
                    height: 20,
                  }),
                  "Deploy now",
                ],
              }),
              _jsx("a", {
                href: "https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app",
                target: "_blank",
                rel: "noopener noreferrer",
                className: styles.secondary,
                children: "Read our docs",
              }),
            ],
          }),
        ],
      }),
      _jsxs("footer", {
        className: styles.footer,
        children: [
          _jsxs("a", {
            href: "https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app",
            target: "_blank",
            rel: "noopener noreferrer",
            children: [
              _jsx(Image, {
                "aria-hidden": true,
                src: "/file.svg",
                alt: "File icon",
                width: 16,
                height: 16,
              }),
              "Learn",
            ],
          }),
          _jsxs("a", {
            href: "https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app",
            target: "_blank",
            rel: "noopener noreferrer",
            children: [
              _jsx(Image, {
                "aria-hidden": true,
                src: "/window.svg",
                alt: "Window icon",
                width: 16,
                height: 16,
              }),
              "Examples",
            ],
          }),
          _jsxs("a", {
            href: "https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app",
            target: "_blank",
            rel: "noopener noreferrer",
            children: [
              _jsx(Image, {
                "aria-hidden": true,
                src: "/globe.svg",
                alt: "Globe icon",
                width: 16,
                height: 16,
              }),
              "Go to nextjs.org \u2192",
            ],
          }),
        ],
      }),
    ],
  });
}
//# sourceMappingURL=page.js.map
