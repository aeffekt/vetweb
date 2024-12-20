import React from 'react'
import { 
  Typography, 
  List,
  ListItem,
  ListItemText,
  Divider,
  Box,
  Paper
} from '@mui/material'

const ContentSection = ({ section }) => {
  if (section.type === 'header') {
    return null;
  }

  return (
    <Box mb={2}>
      <Typography variant="h6" gutterBottom>{section.title}</Typography>
      {section.type === 'text' && (
        <Typography variant="body1">
          {section.content}
        </Typography>
      )}
      {section.type === 'list' && (
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
      )}
      {section.type === 'numbered-list' && (
        <List>
          {section.items.map((item, index) => (
            <ListItem key={index}>
              <ListItemText
                primary={
                  <Typography variant="subtitle1">
                    <Box component="span" mr={1} fontWeight="bold">
                      {index + 1}.
                    </Box>
                    {item.title}
                  </Typography>
                }
                secondary={item.content}
              />
            </ListItem>
          ))}
        </List>
      )}
    </Box>
  );
};

export function Servicio({ content }) {
  const headerSection = content.sections.find(section => section.type === 'header');
  const contentSections = content.sections.filter(section => section.type !== 'header');

  return (
    <Paper elevation={3} sx={{ mb: 4, p: 3, bgcolor: 'background.paper' }}>
      <Typography 
        variant="h4" 
        component="h2" 
        gutterBottom 
        sx={{ 
          color: 'primary.main',
          borderBottom: '2px solid',
          borderColor: 'primary.main',
          pb: 1
        }}
      >
        {headerSection ? headerSection.content : content.title}
      </Typography>
      <Box sx={{ mt: 3 }}>
        {contentSections.map((section, index) => (
          <ContentSection key={index} section={section} />
        ))}
      </Box>
    </Paper>
  );
}

