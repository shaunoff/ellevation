import React from 'react';
import {Rating, Button, Icon} from 'graphene-ui'

const LessonInformation = ({lesson, updateLesson}) => (
	<div style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
		<div style={{color: '#585858', fontSize: '28px', fontWeight: 700}}>Hanging HashTags</div>
		<div style={{color: '#ccc', fontSize: '16px', fontWeight: 700}}>Building backgrounds, demonstrating experiences</div>
		<Rating/>
		<div style={{display: 'flex'}}>
			<Button icon="star" count={lesson.saves} onClick={()=> updateLesson({saves: lesson.saves + 1})}>Save</Button>
			<Button icon="like" count={12}>Likes</Button>
			{lesson.comments && <Button icon="comment" count={lesson.comments.length}>Comments</Button>}
		</div>
	</div>
)

const Resources = ({}) => (
	<div style={{border: '2px solid #ccc', marginRight: '20px', width: 'calc(100% - 40px)', height: 'calc(100% - 10px)', background: 'white'}}>
		<h2 style={{marginTop: '5px', marginLeft: '10px', marginBottom: '5px', color:'#6bada7'}}>Resources</h2>
		<div style={{display: 'flex', alignItems: 'center',marginLeft: '10px'}}>
			<Icon name='download' size="28px"/>
			<h5 style={{margin: '10px'}}>Download</h5>
			Hanging Hashtag Thinksheet
		</div>
		<div style={{display: 'flex', alignItems: 'center',marginLeft: '10px'}}>
			<Icon name='star' size="28px"/>
			<h5 style={{margin: '10px'}}>Link</h5>
			Using visuals to build understanding
		</div>
	</div>
);

const Header = ({lesson,updateLesson}) => (
	<div style={{borderBottom: '2px solid #ccc', padding: '10px', width: '100%', height: '135px',background: 'rgb(248, 250, 251)', display: 'grid', gridTemplateColumns: '2fr 1fr'}}>
		<LessonInformation lesson={lesson} updateLesson={updateLesson}/>
		<Resources/>
	</div>
);

export default Header;
