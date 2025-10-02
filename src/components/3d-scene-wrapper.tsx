"use client";

import dynamic from "next/dynamic";

const Scene3D = dynamic(
  () => import("./3d-scene").then((mod) => ({ default: mod.Scene3D })),
  {
    ssr: false,
    loading: () => (
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-orange-100/50 via-white/50 to-emerald-100/50" />
    ),
  }
);

export { Scene3D };

