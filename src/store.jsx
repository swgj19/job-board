import { configureStore } from '@reduxjs/toolkit';
import userSlice from './features/user/userSlice';
import jobSlice from './features/job/jobSlice';

/* store: the library that contains books
This is where the entire state of your application is stored. Think of it as a big bookshelf that has information about everything. */

/* reducer: They manage the state, similar to how library rules manage book transactions. When someone wants to borrow or return a book, the rules determine what updates to make to the inventory. */

/* slice: library department managing books and has specific rules and processes. The portion of the state that focuses on a specific feature or domain of your application. For example, a user slice handles user authentication and profile information, a cart slice manages shopping cart operations, and so on.
Each slice is responsible for managing its own state and has its own reducer logic */

/* actions (Simple Requests):
Think of standard actions as straightforward requests in the library, such as asking to borrow a specific book or return one. These requests are simple and direct, like saying, "I would like to check out this book" or "I am returning this book."
Example: Dispatching an action like { type: 'BORROW_BOOK', payload: bookId }. */

/* thunks, complex or Asynchronous Requests (multi-step requests):
Thunks in this context are like asking the library to handle a request that might involve multiple steps, checking several things, or needing to wait for something to happen (like waiting for a book to be returned by someone else before you can borrow it). */

/* dispatch (making a book request): Dispatching an action is like going to the library and saying, "I want to borrow this book" or "I am returning this book". It’s the process of making the request. */

/* selectors (finding books): Selectors are used to retrieve specific pieces of information from the store. Like asking, "Where is this book?" or "What books are currently borrowed?" */

/* Redux maintains clear boundaries between different slices of state by utilizing a combination of reducers and the way the Redux store is structured. Each slice is managed by its own reducer, and Redux combines these reducers into a single root reducer. */
export const store = configureStore({
	reducer: {
		user: userSlice,
		job: jobSlice,
	},
});
