
import { Injectable } from '@angular/core';
import { Comment } from '../Interfaces/comment.interface';


@Injectable({
  providedIn: 'root'
})
export class CommentService {

  async addComment(productId: number, comment: string): Promise<Comment> {
    const response = await fetch(`http://localhost:3000/comments `, {
      method: 'POST',
      headers:{'Content-Type' : 'application/json'},
      body: JSON.stringify({productId, comment}),
    });

    if(!response.ok) {
      throw new Error('Failed to add Commetn');
    }

    const data = await response.json();
      return data;
  }

  async getComments(productId:number): Promise<Comment[]> {
  const response = await fetch(`http://localhost:3000/comments?productId=${productId}`)

  if(!response.ok) {
    throw new Error ('Failed to fetch comment');
  }
  const data = await response.json();

  return data;
  }

  async deleteComment (id: number):Promise<void> {
    const response = await fetch(`http://localhost:3000/comments/${id}`, {
       method: 'DELETE',
    });

    if(!response.ok) {
      throw new Error ('Failed comment')
    }
  }
  
}
