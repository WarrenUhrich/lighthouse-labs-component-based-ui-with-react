import React from 'react';
import { storiesOf } from '@storybook/react';
import ListItem from './ListItem';

const incompleteProps = {
    toDo: 'Study React',
    completed: false
};

const completeProps = {
    toDo: 'Study React',
    completed: true
};

storiesOf('ListItem', module)
    .add('incomplete', () => <ListItem {...incompleteProps} />)
    .add('complete', () => <ListItem {...completeProps} />);
 