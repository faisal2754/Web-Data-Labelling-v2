import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
  Card,
  Typography,
  CardContent,
  CardMedia,
  CardActionArea,
  CardActions,
  Button,
  Grid,
  TextField,
} from '@material-ui/core'
import SaveIcon from '@material-ui/icons/Save';

const useStyles = makeStyles({
  profileCard: {
    maxWidth: 345,
    marginTop: 20,
    marginLeft: 200,
  },
  media: {
    height: 140,
  },

  form: {
    maxWidth: '90%',
    marginTop: 20,
    height: '150%'
  },
})

export const Dashboard = (props) => {
  const classes = useStyles()

  return (
    <Grid container>
      <Grid item md={6}>
        <Card className={classes.profileCard}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image="/static/images/cards/contemplative-reptile.jpg"
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Lizard
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button variant="contained" size="large" color="primary" startIcon={<SaveIcon />}>
              Share
            </Button>
            <Button size="small" color="primary">
              Learn More
            </Button>
          </CardActions>
        </Card>
      </Grid>

      {/* Input fields */}
      <Grid item md={6}>
        <Card className={classes.form}>
          <CardContent>
            <Grid container justifyContent="center" spacing={2}>
              <Grid item md={6}>
                <TextField fullWidth id="name" label="Name"/>
              </Grid>
              <Grid item md={6}>
                <TextField fullWidth id="Surname" label="Surname"/>
              </Grid>
              <Grid item md={12}>
                <TextField fullWidth id="name" label="City"/>
              </Grid>
              <Grid item md={4}>
                <TextField fullWidth id="name" label="Country"/>
              </Grid>
              <Grid item md={4}>
                <TextField fullWidth id="name" label="Postal Code"/>
              </Grid>
              <Grid item md={4}>
                <TextField fullWidth id="name" label="Company"/>
              </Grid>
            </Grid>
          </CardContent>

          <CardActions>
          <Button variant="contained" size="large" color="primary" startIcon={<SaveIcon />}>
              Update Profile
            </Button>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  )
}

export default Dashboard
