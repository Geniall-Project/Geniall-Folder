import './Background.css'

function Background({ children }) {
  return (
    <div className="screen-background">
      <div className="animated-mural"></div>
      {children}
    </div>
  )
}

export default Background


