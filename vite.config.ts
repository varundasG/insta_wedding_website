export default defineConfig({
  base: './', // ✅ for HashRouter
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
