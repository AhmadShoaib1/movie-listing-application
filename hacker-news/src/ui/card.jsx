export function Card({ className = "", children, ...props }) {
    return (
      <div className={`rounded-lg border bg-white text-black shadow-sm ${className}`} {...props}>
        {children}
      </div>
    )
  }
  
  export function CardHeader({ className = "", children, ...props }) {
    return (
      <div className={`flex flex-col space-y-1.5 p-4 ${className}`} {...props}>
        {children}
      </div>
    )
  }
  
  export function CardContent({ className = "", children, ...props }) {
    return (
      <div className={`p-4 pt-0 ${className}`} {...props}>
        {children}
      </div>
    )
  }
  