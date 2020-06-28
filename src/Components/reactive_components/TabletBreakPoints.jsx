import React from 'react';
import Breakpoint from './BreakPoints';
export default function TabletBreakpoint(props) {
 return (
 <Breakpoint name="tablet">
    {props.children}
 </Breakpoint>
 );
}