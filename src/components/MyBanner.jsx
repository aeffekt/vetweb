import { Box } from "@mui/material"

const MyBanner = ({ src, alt = "Banner Image", height = "200px", sx }) => {
  return (
    <Box
      component="img"
      src={src}
      alt={alt}
      sx={{
        my: 4,
        width: "100%",
        height: height,
        objectFit: "cover",
        objectPosition: "center",
        ...sx
      }}
    />
  )
}

export default MyBanner

