
  export default function AuthLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <html lang="en">
        <body>
            <h2>Inner layout</h2>
          {children}
        </body> 
      </html>
    )
  }
  