import ClientLayout from "./layout";

export const metadata = {
  title: "LingNorsk",
  description: "Добро пожаловать в LingNorsk!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}