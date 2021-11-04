import ErrorMessage from '../ErrorMessage/ErrorMessage'
import FlipCard from '../FlipCard/FlipCard'

export default function ActivitiesList({ activities, onClickBookmark }) {
  if (!activities.length) {
    return <ErrorMessage />
  }

  return activities.map(activity => (
    <FlipCard
      id={activity.id}
      name={activity.name}
      description={activity.description}
      street={activity.street}
      city={activity.city}
      zipCode={activity.zipCode}
      country={activity.country}
      openingHours={activity.openingHours}
      website={activity.website}
      isFreeOfCharge={activity.isFreeOfCharge}
      isBookmarked={activity.isBookmarked}
      key={activity.id}
      onClickBookmark={onClickBookmark}
    />
  ))
}
