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

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}))

export default function SearchResult(props) {
  const classes = useStyles()
  const { data } = props

  return (
    <div>
      <Container className={classes.cardGrid} maxWidth="md">
        {data.map((row, idx) => (
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
      </Container>
    </div>
  )
}
