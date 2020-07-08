import React, {FC} from 'react'
import Pencil from '../assets/img/pencil.jpg'
import {createStyles,makeStyles} from '@material-ui/core/styles'
import ResultImageList from '../components/ResultImageList'

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
      <ResultImageList /> 
    </div>
  )
}

export default ResultPage