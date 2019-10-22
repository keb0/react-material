/* eslint-disable no-nested-ternary */
import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import Avatar from '@material-ui/core/Avatar'
import ImageIcon from '@material-ui/icons/Image'
import Divider from '@material-ui/core/Divider'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  list: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  button: {
    margin: theme.spacing(1),
  },
}))

export default function SearchResult(props) {
  const classes = useStyles()
  const { data } = props

  const handleClick = e => {
    e.preventDefault()
    props.handleSubmit({ size: data.total + 10 })
  }

  return (
    <div>
      <Container className={classes.list} maxWidth="md">
        {data.list.map((row, idx) => (
          <List className={classes.root} key={idx.toString()}>
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <ImageIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={row.title} secondary={row.description} />
            </ListItem>
            <Divider variant="inset" component="li" />
          </List>
        ))}
        <div>
          <Grid container direction="column" alignItems="center">
            {data.total === 0 ? (
              <div />
            ) : data.total <= data.current ? (
              <div />
            ) : (
              <Button
                className={classes.button}
                variant="outlined"
                color="primary"
                onClick={handleClick}
              >
                More
              </Button>
            )}
          </Grid>
        </div>
      </Container>
    </div>
  )
}
