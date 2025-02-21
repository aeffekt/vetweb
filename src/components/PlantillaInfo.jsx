import React from "react"
import { Box, Card, CardContent, Typography, List, ListItem, ListItemText, Divider } from "@mui/material"
import MyBanner from "./MyBanner"

const NumberedListItem = ({ number, title, content }) => (
  <ListItem>
    <ListItemText
      primary={
        <Typography variant="subtitle1">
          <span className="inline-block w-8 h-8 mr-2 bg-blue-500 text-white rounded-full text-center leading-8">
            {number}-
          </span>
          {title}
        </Typography>
      }
      secondary={content}
    />
  </ListItem>
)

const ContentSection = ({ section }) => {
  const cardStyle = {
    mb: 2,
    backgroundImage: 'url("/images/b1.png")',
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    backgroundBlendMode: "overlay",
  }
  switch (section.type) {
    case "headerText":
      return (
        <Card
          sx={{
            ...cardStyle,
            bgcolor: "transparent",
            color: "primary.contrastText",            
          }}
        >
          <CardContent>
            <Typography variant="h4" component="h1" sx={{ textShadow: "1px 1px 2px rgba(0,0,0,0.6)" }}>
              {section.content}
            </Typography>
          </CardContent>
        </Card>
      )
    case "text":
      return (
        <Card sx={cardStyle}>
          <CardContent>
            <Typography
              variant="h5"
              component="h2"
              color="primary"
              gutterBottom
              sx={{ textShadow: "1px 1px 2px rgba(0,0,0,0.6)" }}
            >
              {section.title}
            </Typography>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Typography
                variant="body1"
                sx={{
                  textAlign: "left",                  
                  maxWidth: "600px",
                  width: "100%",
                }}
              >
                {section.content}
              </Typography>
            </Box>
          </CardContent>
        </Card>
      )
    case "list":
      return (
        <Card sx={cardStyle}>
          <CardContent>
            <Typography
              variant="h5"
              component="h2"
              color="primary"
              gutterBottom
              sx={{ textShadow: "1px 1px 2px rgba(0,0,0,0.4)", letterSpacing: 0.5 }}
            >
              {section.title}
            </Typography>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <List sx={{ maxWidth: "600px", width: "100%" }}>
                {section.items.map((item, index) => (
                  <React.Fragment key={index}>
                    <ListItem>
                      <ListItemText
                        primary={
                          <Typography variant="subtitle1" sx={{ textShadow: "1px 1px 2px rgba(0,0,0,0.4)" }}>
                            {item.subtitle}
                          </Typography>
                        }
                        secondary={
                          <Typography variant="body1" sx={{ lineHeight: 1.6 }}>
                            {item.text}
                          </Typography>
                        }
                      />
                    </ListItem>
                    {index < section.items.length - 1 && <Divider />}
                  </React.Fragment>
                ))}
              </List>
            </Box>
          </CardContent>
        </Card>
      )
    case "numbered-list":
      return (
        <Card sx={cardStyle}>
          <CardContent>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <List sx={{ maxWidth: "600px", width: "100%" }}>
                {section.items.map((item, index) => (
                  <React.Fragment key={index}>
                    <NumberedListItem number={index + 1} title={item.title} content={item.content} />
                    {index < section.items.length - 1 && <Divider />}
                  </React.Fragment>
                ))}
              </List>
            </Box>
          </CardContent>
        </Card>
      )
    default:
      return null
  }
}

export function PlantillaInfo({ content }) {
  return (
    <Box>
      <MyBanner
        src={content.headerImage || "/images/b2.jpg"}
        alt={`${content.title} Header`}
        height={content.headerHeight || "250px"}
      />
      <Box style={{ maxWidth: "64rem", margin: "0 auto", padding: "1rem" }}>
        {content.sections.map((section, index) => (
          <ContentSection key={index} section={section} />
        ))}
        
          <Box
            component="img"
            src={content.image}
            alt={content.title || ""}
            sx={{
              width: "100%",
              height: "auto",
              maxWidth: { xs: "100%", sm: "500px", md: "600px" },
              objectFit: "cover",
              borderRadius: 2,
              boxShadow: 3,
            }}
          />
      </Box>
    </Box>
    
  )
}

