require("./style.css");
import React from 'react';
import {render} from 'react-dom';
import PanelComponent from './PanelComponent.jsx';
import store from './ItemsStore.jsx'

class App extends React.Component {
  constructor() { 
    super();
    this.state = {
        'wait': store.getAll().filter(function(o) {
                        return (o.state === 'wait');
                        }),
        'progress': store.getAll().filter(function(o) {
                        return (o.state === 'progress');
                        }),
        'complete': store.getAll().filter(function(o) {
                        return (o.state === 'complete');
                        })
    };

    this._onChange = this._onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    store.addChangeListener(this._onChange);
    window.addEventListener('storage', function(e){ store.onStorageChange(e)} );
}

  componentWillUnmount() {
    store.removeChangeListener(this._onChange);
    window.removeEventListener('click', function(e){ store.onStorageChange(e)}, false);
  }
  
  _onChange() { 
    this.setState({      
        'wait': store.getAll().filter(function(o) {
                        return (o.state === 'wait');
                        }),
        'progress': store.getAll().filter(function(o) {
                        return (o.state === 'progress');
                        }),
        'complete': store.getAll().filter(function(o) {
                        return (o.state === 'complete');
                        })
        });
  }

  onSubmit(e) {
      if ( e ) {
        e.preventDefault();
        e.stopPropagation();
        if (this.refs.taskText.value.trim()) {
         store.create(this.refs.taskText.value.trim());
         this.refs.taskText.value = '';
        }
    }
  }

  render () {
    return <div className="panels">
    <form onSubmit={ this.onSubmit }>
    <input  ref="taskText" type="text"  id="newtask" size="50" placeholder="Текст новой задачи <Enter>"/>
    </form>
            <PanelComponent title="Ожидание6" items={this.state.wait}/>
            <PanelComponent title="В процессе" items={this.state.progress}/>
            <PanelComponent title="Завершено" items={this.state.complete}/>
            <div className="clear"></div>
    </div>;
  }
}

render(<App/>, document.getElementById('app'));


