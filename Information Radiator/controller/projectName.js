var UserGist = React.createClass({
    getInitialState: function() {
        return {
            projectName: ''
        };
    },

    componentDidMount: function() {
        $.get(this.props.source, function(result) {
            var item = result.title;
            if (this.isMounted()) {
                this.setState({
                    projectName: item
                });
            }
        }.bind(this));
    },

    render: function() {
        return (
          <div> {this.state.projectName}</div>
      );
    }
});

React.render(
  <UserGist source="http://localhost:10010/projects/0101" />,
  document.getElementById('projectNameID')
);