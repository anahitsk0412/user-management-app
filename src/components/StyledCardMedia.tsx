import { CardMedia, Card, CardActions } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledCardMedia = styled(CardMedia)(({ theme }) => {
  return {
    maxHeight: '150px',
    backgroundColor: theme.palette.nude.main,
    height: '100%',
    width: 'auto',
    margin: '0 auto',
  };
});

export const StyledCard = styled(Card)(({ theme }) => {
  return {
    minWidth: '400px',
  };
});

export const StyledCardContent = styled(Card)(({ theme }) => {
  return {
    padding: theme.spacing(2),
    '& svg': {
      fontSize: '20px',
      marginRight: theme.spacing(1),
    },
  };
});

export const StyledCardActions = styled(CardActions)(({ theme }) => {
  return {
    display: 'flex',
    justifyContent: 'center',
  };
});
