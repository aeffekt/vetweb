import React from 'react'
import { 
  Typography, 
  Accordion, 
  AccordionSummary, 
  AccordionDetails,
  List,
  ListItem,
  ListItemText,
  Divider,
  Box
} from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

const ContentSection = ({ section }) => {


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

export function Acordion({ content }) {
  const headerSection = content.sections.find(section => section.type === 'header');
  const contentSections = content.sections.filter(section => section.type !== 'header');

  return (
    <Accordion sx={{ mb: 2 }}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel-content"
        id="panel-header"
        sx={{ bgcolor: 'primary.main', color: 'primary.contrastText' }}
      >
        <Typography variant="h5">
          {headerSection ? headerSection.content : content.title}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Box sx={{ mt: 2 }}>
          {contentSections.map((section, index) => (
            <ContentSection key={index} section={section} />
          ))}
        </Box>
      </AccordionDetails>
    </Accordion>
  );
}
