var TeamListWithPhotos = React.createClass({

      render: function() {

        var teamlist = this.props.items;

        return <div>
                        { teamlist.map(function(l){
                            //return <div class='bs-example'>{l.name}<a href={l.url}>{l.url}</a></div>
                            //return <div><img src={l.src} class='img-thumbnail imgsize'/>{l.name}</div>
                           // return <img src={l.src} class='img-thumbnail imgsize' title={l.name} />
                             return  <img src={l.src} title={l.name} />
                        }) }
                </div>;
    }
});

var teamlist = [
    { name: 'Bhavin', src: './src/img/125x125m.jpg'},
    { name: 'Ali', src: './src/img/125x125m.jpg'},
    { name: 'Dhaval',src: './src/img/125x125m.jpg'},
    { name: 'jignesh', src: './src/img/125x125m.jpg'},

    { name: 'Richard Press', src: './src/img/125x125m.jpg'},
    { name: 'Adam',src: './src/img/125x125m.jpg'},
    { name: 'Chris', src: './src/img/125x125m.jpg'},
    { name: 'Amrit', src: './src/img/125x125f.jpg'},
        
    { name: 'Martin', src: './src/img/125x125m.jpg'},
    { name: 'Dhaval',src: './src/img/125x125m.jpg'},
    { name: 'Joy', src: './src/img/125x125m.jpg'},
    { name: 'Martin', src: './src/img/125x125m.jpg'},
];

React.render(
    <TeamListWithPhotos items={ teamlist } />,
    document.getElementById('teamNameWithPics')
);