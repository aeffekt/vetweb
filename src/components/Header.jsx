import { Link } from "react-router-dom"
import AppBar from "@mui/material/AppBar"
import Toolbar from "@mui/material/Toolbar"
import { Box } from "@mui/material"
import { useTheme } from "@mui/material/styles"
import useMediaQuery from "@mui/material/useMediaQuery"

function Header() {
  const theme = useTheme()
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"))
  const isMediumScreen = useMediaQuery(theme.breakpoints.between("sm", "md"))

  const getImageSize = () => {
    if (isSmallScreen) return { main: "120px", side: "80px" }
    if (isMediumScreen) return { main: "160px", side: "100px" }
    return { main: "200px", side: "120px" }
  }

  const { main, side } = getImageSize()

  const sideImageStyle = {
    height: side,
    maxWidth: "100%",
    objectFit: "contain",
    filter: "sepia(100%) saturate(90%) brightness(70%) hue-rotate(180deg)",
    opacity: 0.8,
  }

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "primary.main",
        backgroundImage: "url('/images/b1.png')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: isSmallScreen ? "column" : "row",
          padding: isSmallScreen ? 1 : 2,
        }}
      >
        <Box
          component={Link}
          to="/"
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textDecoration: "none",
            flexWrap: "wrap",
            gap: 2,
          }}
        >
          <img src="/images/p2b.png" 
            alt="Left Image" 
            style={{sideImageStyle, opacity: 0.7, height: 180, marginTop: '40px'}} />
          <img
            decoding="async"
            src="/images/l1.png"
            alt="Logo DAC"
            style={{
              height: main,
              maxWidth: "100%",
              objectFit: "contain",
            }}
          />
          <img src="/images/g1.png" 
            alt="Right Image" 
            style={{sideImageStyle, opacity: 0.7, height: 170, marginTop: '43px'}} />
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default Header

