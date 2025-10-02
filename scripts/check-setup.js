#!/usr/bin/env node

/**
 * Setup verification script for Spinnata
 * Run with: node scripts/check-setup.js
 */

const fs = require("fs");
const path = require("path");

const checks = [
  {
    name: "Node.js version",
    check: () => {
      const version = process.version;
      const major = parseInt(version.slice(1).split(".")[0]);
      return major >= 18;
    },
    message: "Node.js 18+ required",
  },
  {
    name: "package.json exists",
    check: () => fs.existsSync("package.json"),
    message: "package.json not found",
  },
  {
    name: "node_modules exists",
    check: () => fs.existsSync("node_modules"),
    message: "Run: npm install",
  },
  {
    name: ".env file exists",
    check: () => fs.existsSync(".env"),
    message: "Create .env file (see .env.example)",
  },
  {
    name: "Prisma schema exists",
    check: () => fs.existsSync("prisma/schema.prisma"),
    message: "Prisma schema not found",
  },
  {
    name: "Prisma Client generated",
    check: () => fs.existsSync("node_modules/.prisma/client"),
    message: "Run: npm run prisma:init",
  },
];

console.log("🔍 Checking Spinnata setup...\n");

let allPassed = true;

checks.forEach(({ name, check, message }) => {
  const passed = check();
  const icon = passed ? "✅" : "❌";
  console.log(`${icon} ${name}`);
  if (!passed) {
    console.log(`   → ${message}`);
    allPassed = false;
  }
});

console.log("");

if (allPassed) {
  console.log("🎉 Setup looks good! Run: npm run dev");
} else {
  console.log("⚠️  Please fix the issues above");
  process.exit(1);
}
