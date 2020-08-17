# list-react-app: api 💿 
The API is responsible for all data operations performed on the app. It manages everything related to lists and list items.

## Routes 📍
### List
* `/list/new` Creates a new list and returns it's id.
* `/list/:id` Returns all list related data for given id.
* `/list/delete` Deletes a list from the database.
* `/list/rename` Renames a list.
  
### Item
* `/item/new` Creates a new list item and returns it's id.
* `/item/update` Updates a list item.
* `item/delete` Deletes a list item from the database.

## Todo ⚠
* Figure out why mysql isn't connecting.
