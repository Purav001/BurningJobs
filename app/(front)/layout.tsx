export default function FrontLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return <main className="flex-grow container  padding-global">{children}</main>
  }