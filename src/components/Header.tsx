import React,　{FC} from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import {createStyles, makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles(() =>
  createStyles({
    backGround: {
      backgroundColor: '#fff' ,
      color: '#444'
    }
  })
)


const Header: FC = () => {
  const classes = useStyles()
  return (
    <AppBar className={classes.backGround} position="static">
      <Toolbar>
        <h2>タイトル</h2>
      </Toolbar>
    </AppBar>
  )
}

export default Header