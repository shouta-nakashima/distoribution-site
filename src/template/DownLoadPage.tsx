import React, {FC, useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import {createStyles, makeStyles} from '@material-ui/core/styles'
import firebase from '../firebase'
import {imageData} from '../types/types'
import Pencil from '../assets/img/pencil.jpg'
import Button from '@material-ui/core/Button'



const useStyles = makeStyles(() =>
  createStyles({
    backGround: {
      backgroundImage: `url(${Pencil})`,
      height: '100vh',
      backgroundSize: 'cover',
      color: '#fff'
    },
    tileimage: {
      maxHeight: 500,
      maxWidth: 500,
      paddingTop: 60,
      margin: '0 auto'
    },
    button: {
      textAlign: 'center',
      paddingTop: 60
      
    }
  })
)


const DownLoadPage: FC = () => {
  const {keyword} = useParams()
  const classes = useStyles()
  const [data, setData] = useState<imageData[]>([])
  

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
  
  const downloadButton = () => {
    return (
      <div >
        {data.map((props) => (
          <Button
            variant ="contained"
            href={props.downloadUrl}
            key={props.title}
          >
            ダウンロード
          </Button>
        ))}
      </div>
    )
  }
  


  const displayImage = () => {
    return (
      <div className={classes.tileimage}>
        {data.map((props) => (
          <div>
            <img src={props.image} alt={props.title} key={props.title}/>
          </div>
        ))}
      </div>
    )
  }

  return (
    <div className={classes.backGround}>
      <div className={classes.button}>
        {displayImage()}
        {downloadButton()}
      </div>
    </div>
  )
}

export default DownLoadPage