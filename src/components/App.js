import React, {Component} from 'react';
import AddSection from './AddSection';
import AddPaper from './AddPaper';
import {Row, Button} from 'antd';
import '../less/app.less'

class App extends Component {
    save(){
        const paperInfo = this.refs.paper.getPaper();
        // const section = this.refs.section.method();
        console.log(paperInfo)
    }
    render() {
        return (<div className='paper-body'>
                <AddPaper ref='paper'/>
                <AddSection ref='section'/>
                <div>
                    <Row className='type'>
                        <Button className='button' onClick={this.save.bind(this)}>保存</Button>
                        <Button className='button'>发布</Button>
                    </Row>
                </div>
            </div>

        );
    }
}

export default App;
