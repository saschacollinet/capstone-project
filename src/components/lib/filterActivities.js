export default function filterActivities(activities, searchTerm) {
  return activities.filter(
    activity =>
      activity.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      activity.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      activity.street.toLowerCase().includes(searchTerm.toLowerCase()) ||
      activity.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
      activity.zipCode.toLowerCase().includes(searchTerm.toLowerCase()) ||
      activity.country.toLowerCase().includes(searchTerm.toLowerCase())
  )
}
