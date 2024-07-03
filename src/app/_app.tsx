// app/layout.tsx or app/_app.tsx
import '../app/globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body>{children}</body>
    </html>
  );
}
