import React, {memo} from 'react';
import {Button} from 'semantic-ui-react';

const Child = ({handleClick}) => <Button onClick={handleClick}>+</Button>;

export default memo(Child);
