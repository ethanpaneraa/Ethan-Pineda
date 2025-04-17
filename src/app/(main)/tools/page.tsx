import { ToolCard } from "@/components/tools/tool-card";
import { Laptop, Terminal, Monitor } from "lucide-react";
import { ScrambleText } from "@/components/scramble-text";
import { Metadata } from "next";

export default function ToolsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-white mb-4 animate-fade-in">
        <span className="inline-block">
          <span className="text-textAccent mr-2">*</span>
          <ScrambleText text="software & hardware" />
        </span>
      </h1>

      <p className="text-gray-400 text-lg mb-16">
        here are some of the tools and technologies that i work with on a daily
        in my development workflow.
      </p>

      <section className="mb-16">
        <h2 className="text-3xl font-bold text-white mb-8">
          <span className="inline-block">
            <ScrambleText text="software" />
          </span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ToolCard
            title="visual studio code"
            description="my primary code editor for web development, with a carefully curated set of extensions."
            category="development"
            icon={<Laptop className="w-5 h-5" />}
            link="https://code.visualstudio.com"
          />
          <ToolCard
            title="warp"
            description="modern terminal that enhances my command-line workflow with ai-powered features."
            category="terminal"
            icon={<Terminal className="w-5 h-5" />}
            link="https://www.warp.dev"
          />
          <ToolCard
            title="postman"
            description="essential tool for api development and testing."
            category="development"
            icon={<Laptop className="w-5 h-5" />}
            link="https://www.postman.com"
          />
          <ToolCard
            title="intellij"
            description="powerful ide for java development with excellent debugging capabilities."
            category="development"
            icon={<Laptop className="w-5 h-5" />}
            link="https://www.jetbrains.com/idea"
          />
          <ToolCard
            title="aerospace"
            description="window manager that helps maintain a productive workspace layout."
            category="productivity"
            icon={<Monitor className="w-5 h-5" />}
            link="https://github.com/nikitabobko/AeroSpace"
          />
          <ToolCard
            title="neovim"
            description="modern, extensible vim-based editor for quick edits and text manipulation."
            category="development"
            icon={<Terminal className="w-5 h-5" />}
            link="https://neovim.io"
          />
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-white mb-8">
          <span className="inline-block">
            <ScrambleText text="hardware" />
          </span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ToolCard
            title="MoErgo Glove80"
            description="A split, ortholinear keyboard with cherry MX Brown switches."
            category="input device"
            icon={<Laptop className="w-5 h-5" />}
            link="https://www.moergo.com/collections/glove80-keyboards/products/glove80-split-ergonomic-keyboard-revision-2?variant=47282998739217"
          />
          <ToolCard
            title="hhkb professional 2 type-s"
            description="premium mechanical keyboard with topre switches for the ultimate typing experience."
            category="input device"
            icon={<Laptop className="w-5 h-5" />}
            link="https://www.hhkeyboard.com/uk/products/pro2"
          />
          <ToolCard
            title="apple magic trackpad"
            description="precise control with gesture support for seamless navigation."
            category="input device"
            icon={<Laptop className="w-5 h-5" />}
            link="https://www.apple.com/shop/product/MXK93AM/A/magic-trackpad-usb%E2%80%91c-white-multi-touch-surface"
          />
          <ToolCard
            title="logitech mx master 2s"
            description="ergonomic mouse with customizable buttons and smooth scrolling."
            category="input device"
            icon={<Laptop className="w-5 h-5" />}
            link="https://www.amazon.com/Logitech-Master-Wireless-Mouse-Rechargeable/dp/B071YZJ1G1"
          />
          <ToolCard
            title="16-inch m1 macbook pro"
            description="powerful development machine with excellent battery life and display."
            category="computer"
            icon={<Laptop className="w-5 h-5" />}
            link="https://www.apple.com/macbook-pro"
          />
          <ToolCard
            title="monitor setup"
            description="triple monitor setup: lg vg279q, hp x34, and lg 34wp65g-b 34-inch for maximum productivity."
            category="display"
            icon={<Monitor className="w-5 h-5" />}
            link="https://www.lg.com/us/monitors"
          />
        </div>
      </section>
    </div>
  );
}

export const metadata: Metadata = {
  title: "tools",
  description: "",
  openGraph: {
    images: [
      {
        url: "https://ethan-pineda.vercel.app/og/home?title=tools",
      },
    ],
  },
};
