import React, { useEffect, useState } from 'react';
import Footer from '../components/organisms/footer'
import '../App.css';
import Header from '../components/organisms/header';
import Card from '../components/organisms/card';
import blogService from '../services/blogs';
import { Blog } from '../types/blog';

export default function Home() {
  const [blogs, setBlogs] = useState<Array<Blog>>([]);

  useEffect(() => {
    let mounted = false;
    const f = async () => {
      if (!mounted) {
        const response = await blogService.findAll();
        const { data } = response.data;
        setBlogs(data);
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
      {
        blogs.map((blog) => <Card key={blog.id} title={blog.title}/>)
      }
      <Footer />
    </>
  );
}
