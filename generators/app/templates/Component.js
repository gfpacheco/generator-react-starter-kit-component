import React, { Component } from 'react';
<% if (componentStyleExtension !== 'none') { -%>
import withStyles from '../withStyles';
import s from './<%= componentName %>.<%= componentStyleExtension %>';
<% } -%>

class <%= componentName %> extends Component {

  render() {
    return <div></div>;
  }

}

<% if (componentStyleExtension !== 'none') { -%>
export default withStyles(<%= componentName %>, s);
<% } else { -%>
export default <%= componentName %>;
<% } -%>
