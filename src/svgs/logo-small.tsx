export const LogoSmall = () => {
    return (
        <svg
        width="200"
        height="100%"
        viewBox="0 0 150 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="gradient" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#ecdb43" />
            <stop offset="100%" stopColor="#FFFFFF" />
          </linearGradient>
        </defs>
        <text
          x="10"
          y="35"
          fontSize="30"
          fontWeight="bold"
          fill="url(#gradient)"
          fontFamily="'Arial', sans-serif"
        >
          ChatFlux
        </text>
        <path
          d="M50 10C55 15, 65 15, 70 10"
          stroke="url(#gradient)"
          strokeWidth="2"
          fill="none"
        />
      </svg>
    )
  }