import React from 'react';
import ItemComponent from './ItemComponent.jsx';
class PanelComponent extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
     const ItemComponents = [];
     let items = this.props.items || [];
     items.forEach(function (item, index, array) {
              ItemComponents.push( <ItemComponent 
                                attr  = {item}
                                key = {index}
                                />
                            );
    })

                console.log(this.props.title);
                console.log(this.props.items);
		return <div className="panel">
                      <h2>{this.props.title}</h2>
                      <ul>
                      {ItemComponents}
                      </ul>
                    </div>
	}

}
export default PanelComponent;
