import React from 'react';
import {Rating, Button} from 'graphene-ui'

const LessonInformation = () => (
	<div style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
		<div style={{fontSize: '28px', fontWeight: 700}}>Lesson title</div>
		<div style={{fontSize: '16px', fontWeight: 700}}>dgfhdgfhdsgfhj</div>
		<Rating/>
		<div style={{display: 'flex'}}>
			<Button icon="star" count={12}>Likes</Button>
			<Button icon="star" count={12}>Likes</Button>
			<Button icon="star" count={12}>Likes</Button>
		</div>
	</div>
)

const Resources = ({}) => (
	<div style={{marginRight: '20px', width: 'calc(100% - 40px)', height: '100%', background: 'white'}}>Resources</div>
);

const Header = ({}) => (
	<div style={{padding: '10px', width: '100%', height: '120px',background: 'white', display: 'grid', gridTemplateColumns: '2fr 1fr'}}>
		<LessonInformation/>
		<Resources/>
	</div>
);

export default Header;
