import React, {FC, useState, useEffect} from 'react'
import firebase from '../firebase'
import {imageData} from '../../src/types/types'
import {useParams, useHistory} from 'react-router-dom'
import {createStyles, makeStyles} from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'

const useStyles = makeStyles(() =>
  createStyles({
    image: {
      maxHeight: '300px',
      maxWidth: '300px',
      padding: '0 10px'
    },
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      width: '95%',
      textAlign: 'center',
      padding: '2% 50px'
    }
  })
)


const ResultImageList: FC = () => {
  const classes = useStyles()

  const [data, setData] = useState<imageData[]>([])
  const {keyword} = useParams()
  const history = useHistory()

  const getData = async(searchWord: string | undefined) => {
    const db = firebase.firestore()
    const imageDataRef = db.collection('imageData')
    const searchedData = imageDataRef.where('keyword', 'array-contains', searchWord)
    const snapShot = await searchedData.get()
    const temporaryData: object[] = []

    snapShot.docs.map(doc => {
      temporaryData.push(doc.data())
    })
    setData(temporaryData as imageData[])
  }

  useEffect (() => {
    getData(keyword)
  },[])

  return (
    <div className={classes.root}>
      {data.map((props) => (
        <div key={props.title} >
          <Button
            onClick={() => history.push("/download/" + props.title)}
          >
            <img className={classes.image} src={props.image} alt={props.title} />
          </Button>
          <h3>{props.title}</h3>
        </div>
      ))}
    </div>
  )
}

export default ResultImageList