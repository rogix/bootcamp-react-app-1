import React, { Component } from 'react';

import PostItem from './PostItem';
import '../App.css';

class PostList extends Component {
	state = {
		posts: [
			{
				id: 1,
				author: {
					name: 'João Cambão',
					avatar: 'https://www.gravatar.com/avatar/00000000000000000000000000000000?d=wavatar&f=y'
				},
				date: '04 Jun 2019',
				content: 'Pessoal, alguém sabe se a Rocketseat está contratando?',
				comments: [
					{
						id: 1,
						author: {
							name: 'Diego Fernandes',
							avatar: 'https://www.gravatar.com/avatar/00000000000000000000000000000000?d=retro&f=y'
						},
						content:
							'A Rocketseat está sempre em busca de novos membros para o time, e geralmente ficamos de olho em quem se destaca no Bootcamp, inclusive 80% do nosso time de devs é composto por alunos do Bootcamp. Além disso, se você tem vontade de ensinar gravando vídeos e criando posts, pode me chamar no Discord! (Sério, me chamem mesmo, esse comentário é real)'
					}
				]
			},
			{
				id: 2,
				author: {
					name: 'Pedro Pedreira',
					avatar: 'https://www.gravatar.com/avatar/00000000000000000000000000000000?d=robohash&f=y'
				},
				date: '04 Jun 2019',
				content: 'Pessoal, alguém sabe se a Rocketseat está contratando?',
				comments: [
					{
						id: 1,
						author: {
							name: 'Diego Fernandes',
							avatar: 'https://www.gravatar.com/avatar/00000000000000000000000000000000?d=retro&f=y'
						},
						content:
							'A Rocketseat está sempre em busca de novos membros para o time, e geralmente ficamos de olho em quem se destaca no Bootcamp, inclusive 80% do nosso time de devs é composto por alunos do Bootcamp. Além disso, se você tem vontade de ensinar gravando vídeos e criando posts, pode me chamar no Discord! (Sério, me chamem mesmo, esse comentário é real)'
					}
				]
			},
			{
				id: 3,
				author: {
					name: 'Stive Estiloso',
					avatar: 'https://www.gravatar.com/avatar/00000000000000000000000000000000?d=robohash&f=y'
				},
				date: '04 Jun 2019',
				content: 'Pessoal, alguém sabe se a Rocketseat está contratando?',
				comments: [
					{
						id: 1,
						author: {
							name: 'Diego Fernandes',
							avatar: 'https://www.gravatar.com/avatar/00000000000000000000000000000000?d=retro&f=y'
						},
						content: 'Conteúdo do comentário'
					},
					{
						id: 2,
						author: {
							name: 'Diego Fernandes',
							avatar: 'https://www.gravatar.com/avatar/00000000000000000000000000000000?d=retro&f=y'
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
					return <PostItem key={post.id} {...post} />;
				})}
			</div>
		);
	}
}

export default PostList;
