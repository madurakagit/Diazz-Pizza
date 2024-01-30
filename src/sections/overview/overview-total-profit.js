import PropTypes from 'prop-types';
import ShoppingCartIcon from '@heroicons/react/24/solid/ShoppingCartIcon';
import { Avatar, Card, CardContent, Stack, SvgIcon, Typography,CardMedia,Button } from '@mui/material';

export const OverviewTotalProfit = (props) => {
  const { difference, positive = false, sx, value } = props;

  return (
    <Card sx={sx}>
      <CardContent>
        <Stack
          alignItems="flex-start"
          direction="row"
          justifyContent="space-between"
          spacing={3}
        >
          <Stack spacing={1}>
            <Typography
              color="text.secondary"
              variant="overline"
            >
              Pizza 4
            </Typography>
            <Typography variant="h4">
            <CardMedia
          component="img"
          alt="Sample Image"
          height="200"
          // width="320"
          image="/assets/products/pizza5.jpeg" // Replace with the actual image URL
        />
            </Typography>
          </Stack>
          <Button>
          <Avatar
            sx={{
              backgroundColor: 'error.main',
              height: 26,
              width: 26
            }}
          >
            <SvgIcon>
              <ShoppingCartIcon />
            </SvgIcon>
          </Avatar></Button>
        </Stack>
        {/* {difference && ( */}
          <Stack
            alignItems="center"
            direction="row"
            spacing={2}
            sx={{ mt: 2 }}
          >
            
            <Typography
              color="text.secondary"
              variant="caption"
            >
              Tasty and big pizza with different types of meat
            </Typography>
          </Stack>
        {/* )} */}
      </CardContent>
    </Card>
  );
};

OverviewTotalProfit.propTypes = {
  value: PropTypes.string,
  sx: PropTypes.object
};
