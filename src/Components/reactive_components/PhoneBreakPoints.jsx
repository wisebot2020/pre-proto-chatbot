import React from 'react';
import Breakpoint from './BreakPoints';
export default function PhoneBreakpoint(props) {
 return (
 <Breakpoint name="phone">
    {props.children}
 </Breakpoint>
 );
}