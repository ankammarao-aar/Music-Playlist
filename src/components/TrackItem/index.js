import {AiOutlineDelete} from 'react-icons/ai'

import {
  TrackListItem,
  ImageCard,
  Image,
  NameCard,
  Name,
  Genre,
  DurationCard,
  Duration,
  Button,
} from './styledComponents'

const TrackItem = props => {
  const {trackDetails, deleteItem} = props
  const {id, imageUrl, name, genre, duration} = trackDetails
  const deleteIcon = <AiOutlineDelete size={14} color="#ffffff" />

  const onDeleteItem = () => {
    deleteItem(id)
  }

  return (
    <TrackListItem>
      <ImageCard>
        <Image src={imageUrl} alt="track" />

        <NameCard>
          <Name>{name}</Name>
          <Genre>{genre}</Genre>
        </NameCard>
      </ImageCard>

      <DurationCard>
        <Duration>{duration}</Duration>
        <Button type="button" onClick={onDeleteItem} data-testid="delete">
          {deleteIcon}
        </Button>
      </DurationCard>
    </TrackListItem>
  )
}

export default TrackItem
