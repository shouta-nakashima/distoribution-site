import React,{FC, useState} from 'react'
import Pencil from '../assets/img/pencil.jpg'
import {createStyles,makeStyles} from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import SerachIcon from '@material-ui/icons/Search'
import IconButton from '@material-ui/core/IconButton'
import InputBase from '@material-ui/core/InputBase'
import {useHistory} from 'react-router-dom'

const useStyles = makeStyles(() =>
  createStyles({
    backGround: {
      backgroundImage: `url(${Pencil})`,
      height: '100vh',
      backgroundSize: 'cover'
    },
    paper: {
      position: "relative",
      marginLeft: 'auto',
      marginRight: 'auto',
      top: '33%',
      width: '45%'
    },
    inputbase: {
      width: '80%'
    }
  })
)

const TopMain: FC = () => {
  const classes = useStyles()
  const [keyword, setkeyword] = useState('')
  const history = useHistory()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setkeyword(e.target.value)
  }

  const handleSubmit = () => {
    history.push('/search/' + keyword)
  }

  return (
    <div className={classes.backGround}>
      <Paper className={classes.paper} component="form" onSubmit={handleSubmit}>
        <IconButton type="submit">
          <SerachIcon />
        </IconButton>
        <InputBase 
          className={classes.inputbase}
          placeholder="検索ワードを入力してください。"
          onChange={handleChange}
        />
      </Paper>
    </div>
  )
} 

export default TopMain