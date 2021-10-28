export default function filterActivities(activities, searchTerm) {
  const lowerSearchTerm = searchTerm.toLowerCase()
  return activities.filter(
    activity =>
      activity.name.toLowerCase().includes(lowerSearchTerm) ||
      activity.description.toLowerCase().includes(lowerSearchTerm) ||
      activity.street.toLowerCase().includes(lowerSearchTerm) ||
      activity.city.toLowerCase().includes(lowerSearchTerm) ||
      activity.zipCode.toLowerCase().includes(lowerSearchTerm) ||
      activity.country.toLowerCase().includes(lowerSearchTerm)
  )
}
