const major = parseInt(process.versions.node.split('.')[0], 10);

if (major < 20) {
  console.error(
    `\n❌ Oops! Node.js lu masih jadul tuh 😹\n` +
    `   Versi sekarang : ${process.versions.node}\n` +
    `   Minimal        : Node.js 20+\n\n` +
    `   Upgrade dulu cik biar lancar ✨\n`
  );
  process.exit(1);
}
