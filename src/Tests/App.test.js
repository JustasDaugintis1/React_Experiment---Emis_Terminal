import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import AppRouter from '../Components/AppRouter';
import {configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {shallow} from 'enzyme';
import App from '../Components/App';
import LoginPage from '../Components/LoginPage';
import Home from '../Components/Home';
import PatientViewer from '../Components/PatientViewer';

configure({adapter: new Adapter()});

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <App/>, div);
    ReactDOM.unmountComponentAtNode(div);
});

it('Snapshot of AppRouter', () => {
    const tree = renderer
        .create(<AppRouter/>)
        .toJSON();
    expect(tree).toMatchSnapshot();
})

it('Snapshot of LoginPage', () => {
    const tree = renderer
        .create(<LoginPage/>)
        .toJSON();
    expect(tree).toMatchSnapshot();
})

it('Renders welcome message', () => {
    const wrapper = shallow(<Home/>);
    const welcome = <h2>Welcome to Emis</h2>;
    expect(wrapper.contains(welcome)).toBe(true);
    //  expect(wrapper.contains(welcome)).toEqual(true);
});

it('Renders Login Header', () => {
    const wrapper = shallow(<LoginPage/>);
    const welcome = <h2>Login</h2>;
    expect(wrapper.contains(welcome)).toBe(true);
    //  expect(wrapper.contains(welcome)).toEqual(true);
});

it('Renders Button in PatientViewer', () => {
    const wrapper = shallow(<PatientViewer/>);
    const welcome = <button type="submit" style={{
        margin: 10
    }}>
        Find</button>
    expect(wrapper.contains(welcome)).toBe(true);
    //  expect(wrapper.contains(welcome)).toEqual(true);
});