import React from 'react';
import {Avatar,Input,Select} from 'graphene-ui'
import moment from 'moment'

const  CommentList= ({comments,changeSearch,commentFilter}) => (
	<div style={{minHeight: '100px',margin: '10px', display: 'flex', flexDirection: 'column'}}>
		<div style={{display: 'flex', justifyContent: 'space-between'}}>
			<div>
				<Input label="search" onChange={(name,text)=>{changeSearch(text)}}/>
			</div>
			<div><Select default="newest" onChange={(selection)=>commentFilter(selection)}>
      {({selection,open,onChange})=>(
        <React.Fragment>
          <Select.Selection name="newest" label="Newest" onChange={onChange}/>
          <Select.Selection name="oldest" label="Oldest" onChange={onChange}/>
        </React.Fragment>
      )}
    </Select></div>
		</div>
		{comments.map(comment => (
			<div key={comment.id} style={{display: 'flex', flexDirection: 'column', padding: '10px', border: '2px solid #ccc', marginBottom: '10px'}}>
				<div style={{display: 'flex', alignItems: 'center'}}>
					<Avatar size="mini"/>
					<div style={{color: "#6bada7", margin: "0px 10px"}}>{comment.user.email}</div>
					<div style={{color: "#ccc"}}>{moment(comment.createdAt).format('ddd MMM YY')}</div>
				</div>
				<div style={{marginTop: '10px'}}>
					{comment.text}
				</div>

			</div>
		))}

	</div>
);

export default CommentList;
