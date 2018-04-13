/** 
* All Components related to grid will be here: Container, Row,
* Column, Absolute, View... 
**/ 

import styled from 'styled-components/native';
import { backgroundColor } from './variables';

export const Container = styled.View`
    flex: 1;
    padding-top: 15px;
    padding-left: 20px;
    padding-right: 20px;
    background-color: ${backgroundColor}
`