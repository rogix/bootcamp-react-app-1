import React, { Component } from 'react';

import PostItem from './PostItem';
import '../App.css';

class PostList extends Component {
	state = {
		posts: [
			{
				id: 1,
				author: {
					name: 'Diego Fernandes',
					avatar: 'http://url-da-imagem.com/imagem.jpg'
				},
				date: '04 Jun 2019',
				content: 'Pessoal, alguém sabe se a Rocketseat está contratando?',
				comments: [
					{
						id: 1,
						author: {
							name: 'Diego Fernandes',
							avatar: 'http://url-da-imagem.com/imagem.jpg'
						},
						content: 'Conteúdo do comentário'
					}
				]
			},
			{
				id: 2,
				author: {
					name: 'Diego Fernandes',
					avatar: 'http://url-da-imagem.com/imagem.jpg'
				},
				date: '04 Jun 2019',
				content: 'Pessoal, alguém sabe se a Rocketseat está contratando?',
				comments: [
					{
						id: 1,
						author: {
							name: 'Diego Fernandes',
							avatar: 'http://url-da-imagem.com/imagem.jpg'
						},
						content: 'Conteúdo do comentário'
					}
				]
			}
		]
	};
	render() {
		const { posts } = this.state;

		return (
			<div className="container-list">
				{posts.map(post => {
					<PostItem key={post.id} {...post} />;
				})}
			</div>
		);
	}
}

export default PostList;
