

import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTodos, addTodo, updateTodo, deleteTodo } from './todoSlice';
import { Button, TextField, Checkbox, List, ListItem, ListItemText } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledListItem = styled(ListItem)(({ theme }) => ({
  backgroundColor: '#ffffff',
  marginBottom: '10px',
  borderRadius: '8px',
  boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  transition: 'background-color 0.3s, transform 0.3s', 
  '&:hover': {
    backgroundColor: '#f1f1f1', // Background color on hover
    transform: 'scale(1.02)', // Scale effect on hover
  },
}));

const App = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);
  const [newTodo, setNewTodo] = useState('');
  const [editTodoId, setEditTodoId] = useState(null);
  const todoRefs = useRef({}); 
  const inputRef = useRef(null); 
  const latestTodoRef = useRef(null);

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

 
  useEffect(() => {
    if (latestTodoRef.current) {
      latestTodoRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
      latestTodoRef.current = null; 
    }
  }, [todos]);

  const handleAddTodo = () => {
    if (newTodo.trim()) {
      dispatch(addTodo({ todo: newTodo })); 
      setNewTodo('');
      window.alert('Todo added successfully!'); //  alert for add action
     
      latestTodoRef.current = Object.values(todoRefs.current).pop();
    }
  };

  const handleUpdateTodo = () => {
    if (newTodo.trim() && editTodoId) {
      dispatch(updateTodo({ id: editTodoId, todo: newTodo, completed: false }));
      
      latestTodoRef.current = todoRefs.current[editTodoId];
      setEditTodoId(null);
      setNewTodo('');
      window.alert('Todo updated successfully!'); //  alert for update action
    }
  };

  const handleToggleComplete = (todo) => {
    dispatch(updateTodo({ ...todo, completed: !todo.completed }));
  };

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
    window.alert('Todo deleted successfully!'); // alert for delete action
  };

  return (
    <div style={{ padding: 20, backgroundColor: '#ffcccb', display: 'flex', flexDirection: 'column' }}>
      <center>
        <h1 style={{ color: '#ff6f61', textShadow: '2px 2px 4px rgba(0,0,0,0.2)' }}>Todo List</h1>
      </center>
      
     
      <div style={{ marginBottom: '10px' }}>
        <TextField
          label={editTodoId ? "Update todo" : "Add new todo"}
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          fullWidth
          variant="outlined"
          inputRef={inputRef}
          multiline
          style={{ resize: 'vertical' }} 
        />
        <div style={{ marginTop: '10px', textAlign: 'center' }}>
          {editTodoId ? (
            <Button variant="contained" color="primary" onClick={handleUpdateTodo}>
              Update Todo
            </Button>
          ) : (
            <Button variant="contained" color="primary" onClick={handleAddTodo}>
              Add Todo
            </Button>
          )}
        </div>
      </div>

      {/* Todo List */}
      <div style={{ flexGrow: 1, overflowY: 'auto' }}>
        <List>
          {todos.map((todo) => (
            <StyledListItem
              key={todo.id}
              ref={el => {
                todoRefs.current[todo.id] = el;
              }}
              style={{
                backgroundColor: todo.completed ? '#d3ffd3' : '#ffffff',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
                <Checkbox
                  checked={todo.completed}
                  onChange={() => handleToggleComplete(todo)}
                />
                <ListItemText primary={todo.todo} />
              </div>
              <div>
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={() => handleDelete(todo.id)}
                  style={{ marginRight: '10px' }}
                >
                  Delete
                </Button>
                <Button
                  variant="contained"
                  onClick={() => {
                    setEditTodoId(todo.id);
                    setNewTodo(todo.todo);
                    inputRef.current.focus(); 
                  }}
                >
                  Edit
                </Button>
              </div>
            </StyledListItem>
          ))}
        </List>
      </div>
    </div>
  );
};

export default App;
