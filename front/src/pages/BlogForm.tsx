import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { addBlog, updateBlog } from '../redux/actions/blog';
import blogService from '../services/blogs';
import { Blog } from '../types/blog';

const GroupForm: React.FC = (props: any): JSX.Element => {
  const [id, setId] = useState(null);
  const [title, setTitle] = useState<string>('');
  const [body, setBody] = useState<string>('');
  const [redirect, setRedirect] = useState(false);

  const { groups } = useSelector((state: any) => state.blog);
  
  const dispatch = useDispatch();
  const createGroupAction = (group: any) => dispatch(addBlog(group));
  const updateGroupAction = (group: any) => dispatch(updateBlog(group));
  
  useEffect(() => {
    if (props.match.params.id !== 'new') {
      const group = groups.find((b: Blog) => b.id === Number(props.match.params.id));
      setId(group?.id);
      setTitle(group?.title);
      setBody(group?.body);
    }
  }, []);
  
  const add = async (e: any) => {
    e.preventDefault();
    console.log(title, body);
    if (title === '' || body === '') {
      return;
    }
    
    try {
      const response = await blogService.save(title, body);
      const group = await response.data;
      await createGroupAction(group);
      if (group) {
        setRedirect(true);
      }
    } catch (error) {
      console.log(error);
    }
  };
  
  const update = async (e: any) => {
    e.preventDefault();
    if (title === '' || body === '') {
      return;
    }
    
    try {
      const response = await blogService.update(id, title, body);
      const updatedGroup = await response.data;
      await updateGroupAction(updatedGroup);
      if (updatedGroup) {
        setRedirect(true);
      }
    } catch (error) {
      console.log(error);
    }
  };
  
  if (redirect) {
    return <Redirect to="/" />;
  }
  
  return (
    <form onSubmit={id === null ? add : update}>
      <input
        name="name"
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="title"
      />
      <input
        name="description"
        type="text"
        value={body}
        onChange={(e) => setBody(e.target.value)}
        placeholder="body"
      />
      <button className="btn-block" type="submit">
        {id === null ? '追加' : '修正'}
      </button>
    </form>
  );
};

export default GroupForm;
