# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# REDUX - TOOLKIT

`npm install @reduxjs/toolkit react-redux`

1. Crear archivo store.js

```
import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
  reducer: {},
})
```

2. Proveemos a la app del store mediante un Provider

3. Creamos los slices donde irán cada redux (slice), estos se formarán mediante la función createSlice de Redux

4. Añadimos este Slice al store

```
import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
})
```

5. Usamos el estado y las acciones de Redux en el componente

usamos -> `useSelector()` para coger algo del store
y --> `useDispatch()` para despachar acciones
