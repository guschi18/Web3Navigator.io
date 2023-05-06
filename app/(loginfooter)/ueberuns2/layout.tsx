import LoginHeader from "@/components/LoginHeader";
import LoginBanner from "@/components/LoginBanner";
import '../../../styles/globals.css';
import LoginFooter from "@/components/LoginFooter";

export const metadata = {
  title: 'Web3Navigator',
  description: 'Generated by Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="max-w-7xl mx-auto">
      <LoginHeader />
      <LoginBanner />
      {children}
      <LoginFooter />
      </body>
      
    </html>
  )
}
