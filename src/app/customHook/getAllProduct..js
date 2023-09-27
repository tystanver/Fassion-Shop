import { useQuery } from 'react-query';

const fetchTodos = async (limit,offset) => {
  const response = await fetch(`https://64e2fd60bac46e480e77fdc1.mockapi.io/blog-website? offset=${offset}&limit=${limit}`, {
    method: 'GET', 
  });
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

const useTodos = (limit, offset) => {
  return useQuery(['todos', { limit, offset }], () => fetchTodos(limit, offset));
};

export default useTodos;


const createTodo = async (todoData) => {
  const response = await fetch(`https://64e2fd60bac46e480e77fdc1.mockapi.io/blog-website? offset=${offset}&limit=${limit}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(todoData),
  });

  if (!response.ok) {
    throw new Error('Failed to create todo');
  }

  return response.json();
};

// useDeleteItem.js
import { useState } from 'react';





