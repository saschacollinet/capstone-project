import FlipCard from '../flipCard/FlipCard'

export default function ActivitiesList({ activities, onClickBookmark }) {
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
