import React, {FC, useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import {createStyles, makeStyles} from '@material-ui/core/styles'
import firebase from '../firebase'
import {imageData} from '../types/types'

const useStyles = makeStyles(() =>
  createStyles({
    image:{
      height: 436,
      width: 436
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

  const displayImage = () => {
    return (
      <div>
        {data.map((tile) => (
          <div>
            <img className={classes.image} src={tile.image} alt={tile.title} />
          </div>
        ))}
      </div>
    )
  }

  return (
    <div>
      {displayImage()}
    </div>
  )
}

export default DownLoadPage