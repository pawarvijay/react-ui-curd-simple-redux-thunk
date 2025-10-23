## Simplest Implementation of Redux Thunk

#### Old
- It uses google font
- global.css & page.module.css for css
- page.tsx & layout.tsx for main app structure
#### New
 - It uses THUNK
 - ***double thunk await works*** in component & also in service
 - ***naming thunk functions as service*** as Naming Convention

### Note

 - No need to use `createAsyncThunk` from [rkt](https://redux-toolkit.js.org/api/createAsyncThunk)
	 - because its response has below signature
		 - `pending`:  `users/requestStatus/pending`
		 - `fulfilled`:  `users/requestStatus/fulfilled`
		 - `rejected`:  `users/requestStatus/rejected`
	- and later in actual usage it had created further complexity in reducer
	- also added complexity in component usage
