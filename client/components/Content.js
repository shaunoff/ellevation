import React from 'react';
import {Tabs,Button,Input} from 'graphene-ui'
import text from './text'
import AddComment from './AddComment'
import CommentList from './CommentList'
import SupportLevels from './SupportLevels'
import Youtube from 'react-youtube'

const Content = ({addComment,lesson,comments,changeSearch,commentFilter, students}) => (
	<div style={{width: '100%', display: 'flex'}}>
		<div style={{flex: 2,display: 'flex', flexDirection: 'column', margin: '10px'}}>
			<div>
				<Tabs>
					<Tabs.TabList>
						<Tabs.Tab title="About"/>
						<Tabs.Tab title="Activity Plan"/>
						<Tabs.Tab title="Examples"/>
					</Tabs.TabList>
					<Tabs.TabPanel>
						<Tabs.Panel>
							<div style={{height: '300px',margin: '15px'}}>{text.first}</div>
						</Tabs.Panel>
						<Tabs.Panel>
							<div style={{height: '300px',margin: '15px'}}>{text.second}</div>
						</Tabs.Panel>
						<Tabs.Panel>
							<div style={{height: '300px',margin: '15px'}}>{text.third}</div>
						</Tabs.Panel>
					</Tabs.TabPanel>
				</Tabs>
				<AddComment addComment={addComment}/>
				<Tabs>
					<Tabs.TabList>
						<Tabs.Tab title="Comments"/>
						<Tabs.Tab title="Notes"/>
					</Tabs.TabList>
					<Tabs.TabPanel>
						<Tabs.Panel>
							{lesson.comments && <CommentList commentFilter={commentFilter} changeSearch={changeSearch} comments={comments}/>}
						</Tabs.Panel>
						<Tabs.Panel>
							<div style={{height: '300px'}}>{text.third}</div>
						</Tabs.Panel>
					</Tabs.TabPanel>
				</Tabs>
			</div>
		</div>
		<div style={{flex: 1}}>
			<div style={{margin: '10px'}}>
				<Youtube videoId="8aGhZQkoFbQ&t" />
			</div>

			<SupportLevels students={students}/>
		</div>
	</div>
);

export default Content;
