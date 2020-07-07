import React, {FC} from 'react'
import Pencil from '../assets/img/pencil.jpg'
import {createStyles,makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles(() =>
  createStyles({
    backGround: {
      backgroundImage: `url(${Pencil})`,
      height: '100vh',
      backgroundSize: 'cover',
      color: '#fff'
    }
  })
)

const ResultPage: FC = () => {
  const classes = useStyles()
  return (
    <div className={classes.backGround}>
      ResultPage 検索結果 
    </div>
  )
}

export default ResultPage