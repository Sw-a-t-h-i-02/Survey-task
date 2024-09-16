import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


export const fetchTodos = createAsyncThunk('todos/fetchTodos', async () => {
  const response = await axios.get('https://dummyjson.com/todos');
  return response.data.todos;
});

const todoSlice = createSlice({
  name: 'todos',
  initialState: [],
  reducers: {
    addTodo: (state, action) => {

      state.push({ id: Date.now(), todo: action.payload.todo, completed: false });
    },
    updateTodo: (state, action) => {
      const { id, todo, completed } = action.payload;
      const existingTodo = state.find(t => t.id === id);
      if (existingTodo) {
        existingTodo.todo = todo;
        existingTodo.completed = completed;
      }
    },
    deleteTodo: (state, action) => {
      
      return state.filter(todo => todo.id !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.fulfilled, (state, action) => {
        return action.payload;
      });
  },
});

export const { addTodo, updateTodo, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;



