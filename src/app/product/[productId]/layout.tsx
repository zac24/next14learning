  export default function ProductLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <html lang="en">
        <body>
          {children}
          <h2>Featured Products</h2>
        </body>
        
      </html>
    )
  }
  