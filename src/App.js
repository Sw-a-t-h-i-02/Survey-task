
// import React, { useState, useEffect, useRef } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchTodos, addTodo, updateTodo, deleteTodo } from './todoSlice';
// import { Button, TextField, Checkbox, List, ListItem, ListItemText } from '@mui/material';

// const App = () => {
//   const dispatch = useDispatch();
//   const todos = useSelector((state) => state.todos);
//   const [newTodo, setNewTodo] = useState('');
//   const [editTodoId, setEditTodoId] = useState(null);
//   const todoRefs = useRef({}); // For storing references to each todo item
//   const inputRef = useRef(null); // Reference to the input field
//   const latestTodoRef = useRef(null); // Reference to the latest added/updated todo

//   useEffect(() => {
//     dispatch(fetchTodos());
//   }, [dispatch]);

//   // Scroll to the newly added or updated todo after the todos array updates
//   useEffect(() => {
//     if (latestTodoRef.current) {
//       latestTodoRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
//       latestTodoRef.current = null; // Reset ref after scrolling
//     }
//   }, [todos]);

//   const handleAddTodo = () => {
//     if (newTodo.trim()) {
//       dispatch(addTodo({ todo: newTodo })); // Dispatch the add action
//       setNewTodo('');
//       window.alert('Todo added successfully!'); // Add alert for add action
//       // Set latestTodoRef to scroll to the last todo item
//       latestTodoRef.current = Object.values(todoRefs.current).pop();
//     }
//   };

//   const handleUpdateTodo = () => {
//     if (newTodo.trim() && editTodoId) {
//       dispatch(updateTodo({ id: editTodoId, todo: newTodo, completed: false }));
//       // Set latestTodoRef to scroll to the updated todo item
//       latestTodoRef.current = todoRefs.current[editTodoId];
//       setEditTodoId(null);
//       setNewTodo('');
//       window.alert('Todo updated successfully!'); // Add alert for update action
//     }
//   };

//   const handleToggleComplete = (todo) => {
//     dispatch(updateTodo({ ...todo, completed: !todo.completed }));
//   };

//   const handleDelete = (id) => {
//     dispatch(deleteTodo(id));
//     window.alert('Todo deleted successfully!'); // Add alert for delete action
//   };

//   return (
//     <div style={{ padding: 20, backgroundColor: '#f0f0f0', minHeight: '100vh' }}> {/* App background color */}
//       <center><h1>Todo List</h1></center>
//       <TextField
//         label={editTodoId ? "Update todo" : "Add new todo"}
//         value={newTodo}
//         onChange={(e) => setNewTodo(e.target.value)}
//         fullWidth
//         variant="outlined"
//         inputRef={inputRef} // Attach the input ref
//       />
//       {editTodoId ? (
//         <Button
//           variant="contained"
//           color="primary"
//           onClick={handleUpdateTodo}
//           style={{ marginTop: 10 }}
//         >
//           Update Todo
//         </Button>
//       ) : (
//         <Button
//           variant="contained"
//           color="primary"
//           onClick={handleAddTodo}
//           style={{ marginTop: 10 }}
//         >
//           Add Todo
//         </Button>
//       )}

//       <List>
//         {todos.map((todo) => (
//           <ListItem
//             key={todo.id}
//             ref={el => {
//               todoRefs.current[todo.id] = el;
//             }}
//             style={{
//               backgroundColor: todo.completed ? '#d3ffd3' : '#ffffff', // Background color based on completed status
//               marginBottom: '10px',
//               borderRadius: '8px',
//               boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
//             }} // Individual todo background color
//             secondaryAction={
//               <>
//                 <Button
//                   variant="contained"
//                   color="secondary"
//                   onClick={() => handleDelete(todo.id)}
//                   style={{ marginRight: '10px' }} // Add margin between buttons
//                 >
//                   Delete
//                 </Button>
//                 <Button
//                   variant="contained"
//                   onClick={() => {
//                     setEditTodoId(todo.id);
//                     setNewTodo(todo.todo);
//                     inputRef.current.focus(); // Focus the input field for editing
//                   }}
//                 >
//                   Edit
//                 </Button>
//               </>
//             }
//           >
//             <Checkbox
//               checked={todo.completed}
//               onChange={() => handleToggleComplete(todo)}
//             />
//             <ListItemText primary={todo.todo} />
//           </ListItem>
//         ))}
//       </List>
//     </div>
//   );
// };

// export default App;


// import React, { useState, useEffect, useRef } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchTodos, addTodo, updateTodo, deleteTodo } from './todoSlice';
// import { Button, TextField, Checkbox, List, ListItem, ListItemText } from '@mui/material';

// const App = () => {
//   const dispatch = useDispatch();
//   const todos = useSelector((state) => state.todos);
//   const [newTodo, setNewTodo] = useState('');
//   const [editTodoId, setEditTodoId] = useState(null);
//   const todoRefs = useRef({}); // For storing references to each todo item
//   const inputRef = useRef(null); // Reference to the input field
//   const latestTodoRef = useRef(null); // Reference to the latest added/updated todo

//   useEffect(() => {
//     dispatch(fetchTodos());
//   }, [dispatch]);

//   // Scroll to the newly added or updated todo after the todos array updates
//   useEffect(() => {
//     if (latestTodoRef.current) {
//       latestTodoRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
//       latestTodoRef.current = null; // Reset ref after scrolling
//     }
//   }, [todos]);

//   const handleAddTodo = () => {
//     if (newTodo.trim()) {
//       dispatch(addTodo({ todo: newTodo })); // Dispatch the add action
//       setNewTodo('');
//       window.alert('Todo added successfully!'); // Add alert for add action
//       // Set latestTodoRef to scroll to the last todo item
//       latestTodoRef.current = Object.values(todoRefs.current).pop();
//     }
//   };

//   const handleUpdateTodo = () => {
//     if (newTodo.trim() && editTodoId) {
//       dispatch(updateTodo({ id: editTodoId, todo: newTodo, completed: false }));
//       // Set latestTodoRef to scroll to the updated todo item
//       latestTodoRef.current = todoRefs.current[editTodoId];
//       setEditTodoId(null);
//       setNewTodo('');
//       window.alert('Todo updated successfully!'); // Add alert for update action
//     }
//   };

//   const handleToggleComplete = (todo) => {
//     dispatch(updateTodo({ ...todo, completed: !todo.completed }));
//   };

//   const handleDelete = (id) => {
//     dispatch(deleteTodo(id));
//     window.alert('Todo deleted successfully!'); // Add alert for delete action
//   };

//   return (
//     <div style={{ padding: 20, backgroundColor: '#f0f0f0', minHeight: '100vh' }}> {/* App background color */}
//       <center><h1>Todo List</h1></center>
//       <TextField
//         label={editTodoId ? "Update todo" : "Add new todo"}
//         value={newTodo}
//         onChange={(e) => setNewTodo(e.target.value)}
//         fullWidth
//         variant="outlined"
//         inputRef={inputRef} // Attach the input ref
//         multiline // Allow multiple lines
//         rows={4} // Adjust the number of rows as needed
//         style={{ marginBottom: 20, resize: 'vertical' }} // Allow vertical resizing and add some bottom margin
//       />
//       {editTodoId ? (
//         <Button
//           variant="contained"
//           color="primary"
//           onClick={handleUpdateTodo}
//           style={{ marginTop: 10 }}
//         >
//           Update Todo
//         </Button>
//       ) : (
//         <Button
//           variant="contained"
//           color="primary"
//           onClick={handleAddTodo}
//           style={{ marginTop: 10 }}
//         >
//           Add Todo
//         </Button>
//       )}

//       <List>
//         {todos.map((todo) => (
//           <ListItem
//             key={todo.id}
//             ref={el => {
//               todoRefs.current[todo.id] = el;
//             }}
//             style={{
//               backgroundColor: todo.completed ? '#d3ffd3' : '#ffffff', // Background color based on completed status
//               marginBottom: '10px',
//               borderRadius: '8px',
//               boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
//             }} // Individual todo background color
//             secondaryAction={
//               <>
//                 <Button
//                   variant="contained"
//                   color="secondary"
//                   onClick={() => handleDelete(todo.id)}
//                   style={{ marginRight: '10px' }} // Add margin between buttons
//                 >
//                   Delete
//                 </Button>
//                 <Button
//                   variant="contained"
//                   onClick={() => {
//                     setEditTodoId(todo.id);
//                     setNewTodo(todo.todo);
//                     inputRef.current.focus(); // Focus the input field for editing
//                   }}
//                 >
//                   Edit
//                 </Button>
//               </>
//             }
//           >
//             <Checkbox
//               checked={todo.completed}
//               onChange={() => handleToggleComplete(todo)}
//             />
//             <ListItemText primary={todo.todo} />
//           </ListItem>
//         ))}
//       </List>
//     </div>
//   );
// };

// export default App;


// import React, { useState, useEffect, useRef } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchTodos, addTodo, updateTodo, deleteTodo } from './todoSlice';
// import { Button, TextField, Checkbox, List, ListItem, ListItemText } from '@mui/material';

// const App = () => {
//   const dispatch = useDispatch();
//   const todos = useSelector((state) => state.todos);
//   const [newTodo, setNewTodo] = useState('');
//   const [editTodoId, setEditTodoId] = useState(null);
//   const todoRefs = useRef({}); // For storing references to each todo item
//   const inputRef = useRef(null); // Reference to the input field
//   const latestTodoRef = useRef(null); // Reference to the latest added/updated todo

//   useEffect(() => {
//     dispatch(fetchTodos());
//   }, [dispatch]);

//   // Scroll to the newly added or updated todo after the todos array updates
//   useEffect(() => {
//     if (latestTodoRef.current) {
//       latestTodoRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
//       latestTodoRef.current = null; // Reset ref after scrolling
//     }
//   }, [todos]);

//   const handleAddTodo = () => {
//     if (newTodo.trim()) {
//       dispatch(addTodo({ todo: newTodo })); // Dispatch the add action
//       setNewTodo('');
//       window.alert('Todo added successfully!'); // Add alert for add action
//       // Set latestTodoRef to scroll to the last todo item
//       latestTodoRef.current = Object.values(todoRefs.current).pop();
//     }
//   };

//   const handleUpdateTodo = () => {
//     if (newTodo.trim() && editTodoId) {
//       dispatch(updateTodo({ id: editTodoId, todo: newTodo, completed: false }));
//       // Set latestTodoRef to scroll to the updated todo item
//       latestTodoRef.current = todoRefs.current[editTodoId];
//       setEditTodoId(null);
//       setNewTodo('');
//       window.alert('Todo updated successfully!'); // Add alert for update action
//     }
//   };

//   const handleToggleComplete = (todo) => {
//     dispatch(updateTodo({ ...todo, completed: !todo.completed }));
//   };

//   const handleDelete = (id) => {
//     dispatch(deleteTodo(id));
//     window.alert('Todo deleted successfully!'); // Add alert for delete action
//   };

//   return (
//     <div style={{ padding: 20, backgroundColor: '#f0f0f0', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}> {/* App background color */}
//       <center><h1>Todo List</h1></center>
      
//       {/* Input field section */}
//       <div style={{ marginBottom: '10px' }}>
//         <TextField
//           label={editTodoId ? "Update todo" : "Add new todo"}
//           value={newTodo}
//           onChange={(e) => setNewTodo(e.target.value)}
//           fullWidth
//           variant="outlined"
//           inputRef={inputRef} // Attach the input ref
//           multiline // Allow multiple lines
//           rows={4} // Adjust the number of rows as needed
//           style={{ resize: 'vertical' }} // Allow vertical resizing
//         />
//         <div style={{ marginTop: '10px', textAlign: 'center' }}>
//           {editTodoId ? (
//             <Button variant="contained" color="primary" onClick={handleUpdateTodo}>
//               Update Todo
//             </Button>
//           ) : (
//             <Button variant="contained" color="primary" onClick={handleAddTodo}>
//               Add Todo
//             </Button>
//           )}
//         </div>
//       </div>

//       {/* Todo List */}
//       <div style={{ flexGrow: 1, overflowY: 'auto' }}> {/* Scrollable list */}
//         <List>
//           {todos.map((todo) => (
//             <ListItem
//               key={todo.id}
//               ref={el => {
//                 todoRefs.current[todo.id] = el;
//               }}
//               style={{
//                 backgroundColor: todo.completed ? '#d3ffd3' : '#ffffff', // Background color based on completed status
//                 marginBottom: '10px',
//                 borderRadius: '8px',
//                 boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
//                 display: 'flex',
//                 alignItems: 'center',
//                 justifyContent: 'space-between'
//               }}
//             >
//               <div style={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
//                 <Checkbox
//                   checked={todo.completed}
//                   onChange={() => handleToggleComplete(todo)}
//                 />
//                 <ListItemText primary={todo.todo} />
//               </div>
//               <div>
//                 <Button
//                   variant="contained"
//                   color="secondary"
//                   onClick={() => handleDelete(todo.id)}
//                   style={{ marginRight: '10px' }} // Add margin between buttons
//                 >
//                   Delete
//                 </Button>
//                 <Button
//                   variant="contained"
//                   onClick={() => {
//                     setEditTodoId(todo.id);
//                     setNewTodo(todo.todo);
//                     inputRef.current.focus(); // Focus the input field for editing
//                   }}
//                 >
//                   Edit
//                 </Button>
//               </div>
//             </ListItem>
//           ))}
//         </List>
//       </div>
//     </div>
//   );
// };

// export default App;


// import React, { useState, useEffect, useRef } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchTodos, addTodo, updateTodo, deleteTodo } from './todoSlice';
// import { Button, TextField, Checkbox, List, ListItem, ListItemText } from '@mui/material';

// const App = () => {
//   const dispatch = useDispatch();
//   const todos = useSelector((state) => state.todos);
//   const [newTodo, setNewTodo] = useState('');
//   const [editTodoId, setEditTodoId] = useState(null);
//   const todoRefs = useRef({}); // For storing references to each todo item
//   const inputRef = useRef(null); // Reference to the input field
//   const latestTodoRef = useRef(null); // Reference to the latest added/updated todo

//   useEffect(() => {
//     dispatch(fetchTodos());
//   }, [dispatch]);

//   // Scroll to the newly added or updated todo after the todos array updates
//   useEffect(() => {
//     if (latestTodoRef.current) {
//       latestTodoRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
//       latestTodoRef.current = null; // Reset ref after scrolling
//     }
//   }, [todos]);

//   const handleAddTodo = () => {
//     if (newTodo.trim()) {
//       dispatch(addTodo({ todo: newTodo })); // Dispatch the add action
//       setNewTodo('');
//       window.alert('Todo added successfully!'); // Add alert for add action
//       // Set latestTodoRef to scroll to the last todo item
//       latestTodoRef.current = Object.values(todoRefs.current).pop();
//     }
//   };

//   const handleUpdateTodo = () => {
//     if (newTodo.trim() && editTodoId) {
//       dispatch(updateTodo({ id: editTodoId, todo: newTodo, completed: false }));
//       // Set latestTodoRef to scroll to the updated todo item
//       latestTodoRef.current = todoRefs.current[editTodoId];
//       setEditTodoId(null);
//       setNewTodo('');
//       window.alert('Todo updated successfully!'); // Add alert for update action
//     }
//   };

//   const handleToggleComplete = (todo) => {
//     dispatch(updateTodo({ ...todo, completed: !todo.completed }));
//   };

//   const handleDelete = (id) => {
//     dispatch(deleteTodo(id));
//     window.alert('Todo deleted successfully!'); // Add alert for delete action
//   };

//   return (
//     <div style={{ padding: 20, backgroundColor: '#f0f0f0', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
//       <center><h1>Todo List</h1></center>
      
//       {/* Input field section */}
//       <div style={{ marginBottom: '10px' }}>
//         <TextField
//           label={editTodoId ? "Update todo" : "Add new todo"}
//           value={newTodo}
//           onChange={(e) => setNewTodo(e.target.value)}
//           fullWidth
//           variant="outlined"
//           inputRef={inputRef}
//           multiline
//           // rows={2} // Reduced rows for smaller height
//           style={{ resize: 'vertical' }} // Allow vertical resizing
//         />
//         <div style={{ marginTop: '10px', textAlign: 'center' }}>
//           {editTodoId ? (
//             <Button variant="contained" color="primary" onClick={handleUpdateTodo}>
//               Update Todo
//             </Button>
//           ) : (
//             <Button variant="contained" color="primary" onClick={handleAddTodo}>
//               Add Todo
//             </Button>
//           )}
//         </div>
//       </div>

//       {/* Todo List */}
//       <div style={{ flexGrow: 1, overflowY: 'auto' }}>
//         <List>
//           {todos.map((todo) => (
//             <ListItem
//               key={todo.id}
//               ref={el => {
//                 todoRefs.current[todo.id] = el;
//               }}
//               style={{
//                 backgroundColor: todo.completed ? '#d3ffd3' : '#ffffff',
//                 marginBottom: '10px',
//                 borderRadius: '8px',
//                 boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
//                 display: 'flex',
//                 alignItems: 'center',
//                 justifyContent: 'space-between'
//               }}
//             >
//               <div style={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
//                 <Checkbox
//                   checked={todo.completed}
//                   onChange={() => handleToggleComplete(todo)}
//                 />
//                 <ListItemText primary={todo.todo} />
//               </div>
//               <div>
//                 <Button
//                   variant="contained"
//                   color="secondary"
//                   onClick={() => handleDelete(todo.id)}
//                   style={{ marginRight: '10px' }}
//                 >
//                   Delete
//                 </Button>
//                 <Button
//                   variant="contained"
//                   onClick={() => {
//                     setEditTodoId(todo.id);
//                     setNewTodo(todo.todo);
//                     inputRef.current.focus(); // Focus the input field for editing
//                   }}
//                 >
//                   Edit
//                 </Button>
//               </div>
//             </ListItem>
//           ))}
//         </List>
//       </div>
//     </div>
//   );
// };

// export default App;


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
  transition: 'background-color 0.3s, transform 0.3s', // Add transition effects
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
  const todoRefs = useRef({}); // For storing references to each todo item
  const inputRef = useRef(null); // Reference to the input field
  const latestTodoRef = useRef(null); // Reference to the latest added/updated todo

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  // Scroll to the newly added or updated todo after the todos array updates
  useEffect(() => {
    if (latestTodoRef.current) {
      latestTodoRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
      latestTodoRef.current = null; // Reset ref after scrolling
    }
  }, [todos]);

  const handleAddTodo = () => {
    if (newTodo.trim()) {
      dispatch(addTodo({ todo: newTodo })); // Dispatch the add action
      setNewTodo('');
      window.alert('Todo added successfully!'); // Add alert for add action
      // Set latestTodoRef to scroll to the last todo item
      latestTodoRef.current = Object.values(todoRefs.current).pop();
    }
  };

  const handleUpdateTodo = () => {
    if (newTodo.trim() && editTodoId) {
      dispatch(updateTodo({ id: editTodoId, todo: newTodo, completed: false }));
      // Set latestTodoRef to scroll to the updated todo item
      latestTodoRef.current = todoRefs.current[editTodoId];
      setEditTodoId(null);
      setNewTodo('');
      window.alert('Todo updated successfully!'); // Add alert for update action
    }
  };

  const handleToggleComplete = (todo) => {
    dispatch(updateTodo({ ...todo, completed: !todo.completed }));
  };

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
    window.alert('Todo deleted successfully!'); // Add alert for delete action
  };

  return (
    <div style={{ padding: 20, backgroundColor: '#ffcccb', display: 'flex', flexDirection: 'column' }}>
      <center>
        <h1 style={{ color: '#ff6f61', textShadow: '2px 2px 4px rgba(0,0,0,0.2)' }}>Todo List</h1>
      </center>
      
      {/* Input field section */}
      <div style={{ marginBottom: '10px' }}>
        <TextField
          label={editTodoId ? "Update todo" : "Add new todo"}
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          fullWidth
          variant="outlined"
          inputRef={inputRef}
          multiline
          style={{ resize: 'vertical' }} // Allow vertical resizing
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
                    inputRef.current.focus(); // Focus the input field for editing
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
