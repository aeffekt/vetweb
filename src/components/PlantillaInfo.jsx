import React from 'react'
import { Box, Card, CardContent, Typography, List, ListItem, ListItemText, Divider } from '@mui/material'

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
);

const ContentSection = ({ section }) => {  
  switch (section.type) {
    case 'header':
      return (
        <Card sx={{ bgcolor: 'primary.main', color: 'primary.contrastText', mb: 2 }}>          
          <CardContent>
            <Typography variant="h4" component="h1">
              {section.content}
            </Typography>
          </CardContent>
        </Card>
      );
    case 'text':
      return (
        <Card sx={{ mb: 2 }}>
          <CardContent>
            <Typography variant="h5" component="h2" color="primary" gutterBottom>
              {section.title}
            </Typography>
            <Typography variant="body1">
              {section.content}
            </Typography>
          </CardContent>
        </Card>
      );
    case 'list':
      return (
        <Card sx={{ mb: 2 }}>
          <CardContent>
            <Typography variant="h5" component="h2" color="primary" gutterBottom>
              {section.title}
            </Typography>
            <List>
              {section.items.map((item, index) => (
                <React.Fragment key={index}>
                  <ListItem>
                    <ListItemText
                      primary={<Typography variant="subtitle1">{item.subtitle}</Typography>}
                      secondary={item.text}
                    />
                  </ListItem>
                  {index < section.items.length - 1 && <Divider />}
                </React.Fragment>
              ))}
            </List>
          </CardContent>
        </Card>
      );
    case 'numbered-list':
      return (
        <Card sx={{ mb: 2 }}>
          <CardContent>
            <List>
              {section.items.map((item, index) => (
                <React.Fragment key={index}>
                  <NumberedListItem
                    number={index + 1}
                    title={item.title}
                    content={item.content}
                  />
                  {index < section.items.length - 1 && <Divider />}
                </React.Fragment>
              ))}
            </List>
          </CardContent>
        </Card>
      );
    default:
      return null;
  }
};

export function PlantillaInfo({ content }) {
  return (
    <Box style={{ maxWidth: '64rem', margin: '0 auto', padding: '1rem' }}>
      {content.sections.map((section, index) => (
        <ContentSection key={index} section={section} />
      ))}
      <Box
        component="img"
        src={content.image}
        alt={content.title || ""}
        sx={{
          width: '100%',
          height: 'auto',
          maxWidth: { xs: '100%', sm: '500px', md: '600px' },
          objectFit: 'cover',
          borderRadius: 2,
          boxShadow: 3,
        }}
    />
    </Box>
  );
}

