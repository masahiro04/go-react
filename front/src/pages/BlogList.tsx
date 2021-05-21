import React, { useEffect, useState } from 'react';
import Footer from '../components/organisms/footer'
import '../App.css';
import Header from '../components/organisms/header';
import Card from '../components/organisms/card';
import blogService from '../services/blogs';
import { Blog } from '../types/blog';
import {Link} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addBlogs } from '../redux/actions/blog';

export default function BlogList() {
  // const [blogs, setBlogs] = useState<Array<Blog>>([]);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const { blogs } = useSelector((state: any) => state.blog);
  const addBlogsAction = (gs: Blog[]) => dispatch(addBlogs(gs));

  useEffect(() => {
    let mounted = false;
    const f = async () => {
      if (!mounted) {
        const response = await blogService.findAll();
        const { data } = response.data;
        addBlogsAction(data);
      }
    };
    f();
    return () => {
      mounted = true;
    };
  }, []);

  return (
    <>
      <Header />
      <Link to={'/blogs/new/form'}>新規作成</Link>
  
      {
        blogs.map((blog: Blog) => <Card key={blog.id} title={blog.title}/>)
      }
      <Footer />
    </>
  );
}
