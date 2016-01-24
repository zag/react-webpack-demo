import React from 'react';
import store from './ItemsStore.jsx'
var assign = require('object-assign');

class ItemComponent extends React.Component {
	constructor(props) {
		super(props);
		this.onSetWait = this.onSetWait.bind(this);
		this.onSetProgress = this.onSetProgress.bind(this);
		this.onSetComplete = this.onSetComplete.bind(this);
         	this.onSetDelete = this.onSetDelete.bind(this);
	}
        updateState(newstate) {
            var attr = assign({}, this.props.attr, { 'state': newstate} );
            store.updateItem( attr.id, attr);
            console.log(attr);
        }
        onSetWait() { this.updateState('wait') }
	onSetProgress() { this.updateState('progress') }
	onSetComplete() { this.updateState('complete') }
	onSetDelete() { this.updateState('deleted') }
	render() {
                console.log(this.props);
                let attr = this.props.attr;
		return <li className="item">
                      <h3 title={attr.text}>{attr.text}</h3>
                      <p className="stateLine">Статус: 
                      {attr.state !== 'wait' ? <a onClick={this.onSetWait} href="#"  title="Сменить на 'Ожидает'">&lt;</a> : '<'}
                      {attr.state !== 'progress' ? <a onClick={this.onSetProgress} href="#"  title="Сменить на 'В роцессе'">*</a> : '*'}
                      {attr.state !== 'complete' ? <a onClick={this.onSetComplete} href="#"  title="Сменить на 'Завершено'">&gt;</a> : '>'}
                       <a onClick={this.onSetDelete} href="#"  title="Удалить">X</a>
                      </p>
                      </li>
	}

}
export default ItemComponent;
