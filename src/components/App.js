import React, {Component} from 'react';
import { Button} from 'antd';
import AddSection from './AddSection';
import AddPaper from './AddPaper';
import '../less/common.less'

class App extends Component {
    save() {
        const paperInfo = this.refs.paper.getPaper();
        console.log(paperInfo)
    }

    render() {
        return (
            <div className='paper-body'>
                <AddPaper ref='paper'/>
                <AddSection ref='section'/>
                <div className='btn-group'>
                    <Button className='button' onClick={this.save.bind(this)}>保存</Button>
                    <Button className='button'>发布</Button>
                </div>
            </div>

        );
    }
}

export default App;
