import React from 'react'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '../ui/table';
import posts from '@/data/posts';
import Link from 'next/link';
import { Post } from '@/types/posts';

interface PostsTableProps {
  limit?: number;
  title?: string;
}

const PostsTable = ({ limit, title }: PostsTableProps) => {
  const sortedPosts: Post[] = [...posts].sort((a,b) => new Date(b.date).getTime() - new Date(a.date).getTime())

  // Filtered Posts
  const filteredPosts = limit ? sortedPosts.slice(0, limit) : sortedPosts

  return (
    <div className='mt-10'>
      <h2 className="text-2xl font-semibold mb-4">
        { title ? title : "Posts" }
      </h2>
      <Table>
        <TableCaption>A list of recent posts.</TableCaption>
        <TableHeader>
          <TableHead>Title</TableHead>
          <TableHead className="hidden md:table-cell">Author</TableHead>
          <TableHead className="hidden md:table-cell text-right">Date</TableHead>
          <TableHead>View</TableHead>
        </TableHeader>
        <TableBody>
          {
            filteredPosts.map(post => (
              <TableRow id={post.id}>
                <TableCell>{post.title}</TableCell>
                <TableCell className="hidden md:table-cell">{post.author}</TableCell>
                <TableCell className="hidden md:table-cell text-right">{post.date}</TableCell>
                <TableCell>
                  <Link 
                    className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-3 rounded text-xs'
                    href={`/posts/edit/${post.id}`}
                  >
                    Edit
                  </Link>
                </TableCell>
              </TableRow>
            ))
          }
        </TableBody>
      </Table>
    </div>
  )
}

export default PostsTable