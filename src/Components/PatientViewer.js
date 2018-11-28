import React from 'react';
import NavItem from 'react-bootstrap/lib/NavItem';
import Nav from 'react-bootstrap/lib/Nav';
const API_KEY = 'J293eaukD9AfLzXrgRuSkPHrTyz0WxVL';

let id = "";
let dateCrated = "";
let title = "";
let imgURL = '';


const Picture = () => (
    <div>
        <img src={imgURL} alt={imgURL}/>
    </div>
)

class PatientViewer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activekey: 1,
            hideElement1: true,
            hideElement2: true,
            hideElement3: true,
            hideElement4: true,
            id: "",
            title:"",
            dateCrated:"",
            imgURL: '',
        }
        this.handleSelect = this
            .handleSelect
            .bind(this);
        this.showElement = this
            .showElement
            .bind(this);
        this.fetchData = this
            .fetchData
            .bind(this);
    }

    handleSelect(selectedKey) {
        this.setState({activekey: selectedKey},
             function () {this.showElement()}.bind(this));
    }

    fetchData = async(e) => {

        e.preventDefault();
        const search = e.target.elements.search.value;

        const API_CALL = await fetch(`http://api.giphy.com/v1/gifs/search?q=${search}&api_key=${API_KEY}`);
        const data = await API_CALL.json();
        console.log(data.data)


        this.setState({
            id: data.data[0].id,
            title: data.data[0].title,
            dateCrated: data.data[0].import_datetime,
            imgURL: data.data[0].bitly_gif_url
        })
        id = this.state.id
        title = this.state.title
        dateCrated = this.state.dateCrated
        imgURL = this.state.imgURL
      }

    showElement() {
        switch (this.state.activekey) {
            case 1:
                this.setState({hideElement1: false, hideElement2: true, hideElement3: true, hideElement4: true})
                break;
            case 2:
                this.setState({hideElement1: true, hideElement2: false, hideElement3: true, hideElement4: true})
                break;
            case 3:
                this.setState({hideElement1: true, hideElement2: true, hideElement3: false, hideElement4: true})
                break;
            case 4:
                this.setState({hideElement1: true, hideElement2: true, hideElement3: true, hideElement4: false})
                break;
            default:
        }
    }
    render() {
        const style1 = this.state.hideElement1 ? {display: 'none'} : {};
        const style2 = this.state.hideElement2 ? {display: 'none'} : {};
        const style3 = this.state.hideElement3 ? {display: 'none'} : {};
        const style4 = this.state.hideElement4 ? {display: 'none'} : {};

        return (
            <div className="container patientview">
                <h2>Patient Record Viewer</h2>
                <hr/>
                <form style={{
                    margin: 10
                }} onSubmit={this.fetchData}>
                    <input type="text" placeholder="Patient Name" name="search"></input>
                    <button
                        type="submit"
                        style={{
                        margin: 10
                    }}>Find</button>
                </form>
                <Nav
                    bsStyle="pills"
                    activeKey={this.state.activekey}
                    onSelect={this.handleSelect}
                    style={{
                    margin: 10
                }}>
                    <NavItem
                        eventKey={1}
                        style={{
                        fontSize: 15
                    }}>
                        Some Data 
                    </NavItem>
                    <NavItem
                        eventKey={2}
                        style={{
                        fontSize: 15
                    }}>
                        Problems
                    </NavItem>
                    <NavItem
                        eventKey={3}
                        style={{
                        fontSize: 15
                    }}>
                        Medications
                    </NavItem>
                    <NavItem
                        eventKey={4}
                        style={{
                        fontSize: 15
                    }}>
                        Allergies
                    </NavItem>
                </Nav>
                <div className="summary" style={style1}>
                <div className="container" style={{
                        margin: 10}}>
                    <header style={{
                       fontSize: 20
                    }}>Here is Some Data</header>
                    <hr/>
                    <h4 style={{}}>
                       The id of a thing is: {id}
                    </h4>
                    <br/>
                    <h4>
                        name of thing is: {title}
                    </h4>
                    <br/>
                    <h4 style={{}}>
                       The date of creation: {dateCrated}
                    </h4>
                    <br/>
                    <h4>
                        picture: 
                        
                    </h4>
                   <Picture/>
                    </div>

                </div>
                <div className="Problems" style={style2}>
                <div className="container" style={{
                        margin: 10}}>
                    <header style={{
                       fontSize: 20
                    }}>Problems</header>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Varius quam quisque id diam.
                        Cursus in hac habitasse platea dictumst quisque sagittis. Suspendisse ultrices
                        gravida dictum fusce ut placerat orci nulla pellentesque. Consectetur lorem
                        donec massa sapien faucibus et molestie ac. Viverra accumsan in nisl nisi
                        scelerisque eu ultrices. Dolor sed viverra ipsum nunc aliquet bibendum. Praesent
                        tried euismod nisi porta lorem mollis aliquam
                        ut porttitor leo. Quis imperdiet massa tincidunt nunc pulvinar sapien et ligula.
                        At lectus urna duis convallis convallis tellus. Aliquam id diam maecenas
                        ultricies. Bibendum est ultricies integer quis auctor elit sed. Augue ut lectus
                        arcu bibendum.</p>
                    </div>
                </div>
                <div className="Medications" style={style3}>
                <div className="container" style={{
                        margin: 10}}>
                    <header style={{
                       fontSize: 20
                    }}>Medications</header>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Varius quam quisque id diam.
                        Cursus in hac habitasse platea dictumst quisque sagittis. Suspendisse ultrices
                        gravida dictum fusce ut placerat orci nulla pellentesque. Consectetur lorem
                        donec massa sapien faucibus et molestie ac. Viverra accumsan in nisl nisi
                        scelerisque eu ultrices. Dolor sed viverra ipsum nunc aliquet bibendum. Praesent
                        tristique magna sit amet purus. Eget est lorem ipsum dolor sit amet consectetur
                        adipiscing. Et sollicitudin ac orci phasellus egestas tellus. Est ante in nibh
                        mauris. Aenean sed adipiscing diam donec adipiscing tristique risus. Aliquet
                        bibendum enim facilisis gravida neque convallis a cras. Malesuada bibendum arcu
                        vitae elementum curabitur vitae nunc sed velit. Faucibus purus in massa tempor
                        nec feugiat nisl pretium. Malesuada pellentesque elit eget gravida cum sociis
                        natoque penatibus et. Convallis aenean et tortor at risus viverra adipiscing at.
                        Sed arcu non odio euismod lacinia at quis. Sem viverra aliquet eget sit amet
                        tellus cras adipiscing. Eleifend donec pretium vulputate sapien. Metus vulputate
                        eu scelerisque felis imperdiet proin. Facilisi nullam vehicula ipsum a. Nunc
                        congue nisi vitae suscipit tellus mauris a diam maecenas. Hac habitasse platea
                        dictumst quisque sagittis purus sit amet. Ornare massa eget egestas purus
                        viverra. Ligula ullamcorper malesuada proin libero. Faucibus pulvinar elementum
                        integer enim neque volutpat. Tortor aliquam nulla facilisi cras fermentum odio
                        eu feugiat pretium. Metus aliquam eleifend mi in nulla posuere. Ultricies mi
                        quis hendrerit dolor magna eget est. Sed euismod nisi porta lorem mollis aliquam
                        ut porttitor leo. Quis imperdiet massa tincidunt nunc pulvinar sapien et ligula.
                        At lectus urna duis convallis convallis tellus. Aliquam id diam maecenas
                        ultricies. Bibendum est ultricies integer quis auctor elit sed. Augue ut lectus
                        arcu bibendum.m enim facilisis gravida neque convallis a cras. Malesuada bibendum arcu
                        vitae elementum curabitur vitae nunc sed velit. Faucibus purus in massa tempor
                        nec feugiat nisl pretium. Malesuada pellentesque elit eget gravida cum sociis
                        natoque penatibus et. Convallis aenean et tortor at risus viverra adipiscing at.
                        Sed arcu non odio euismod lacinia at quis. Sem viverra aliquet eget sit amet
                        tellus cras adipiscing. Eleifend donec pretium vulputate sapien. Metus vulputate
                        eu scelerisque felis imperdiet proin. Facilisi nullam vehicula ipsum a. Nunc
                        congue nisi vitae suscipit tellus mauris a diam maecenas. Hac habitasse platea
                        dictumst quisque sagittis purus sit amet. Ornare massa eget egestas purus
                        viverra. Ligula ullamcorper malesuada proin libero. Faucibus pulvinar elementum
                        integer enim neque volutpat. Tortor aliquam nulla facilisi cras fermentum odio
                        eu feugiat pretium. Metus aliquam eleifend mi in nulla posuere. Ultricies mi
                        quis hendrerit dolor magna eget est. Sed euismod nisi porta lorem mollis aliquam
                        ut porttitor leo. Quis imperdiet massa tincidunt nunc pulvinar sapien et ligula.
                        At lectus urna duis convallis convallis tellus. Aliquam id diam maecenas
                        ultricies. Bibendum est ultricies integer quis auc</p>
                    </div>
                </div>
                <div className="Allergies" style={style4}>
                <div className="container" style={{
                        margin: 10}}>
                    <header style={{
                       fontSize: 20
                    }}>Allergies</header>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Varius quam quisque id diam.
                        Cursus in hac habitasse platea dictumst quisque sagittis. Suspendisse ultrices
                        gravida dictum fusce ut placerat orci nulla pellentesque. Consectetur lorem
                        donec massa sapien faucibus et molestie ac. Viverra accumsan in nisl nisi
                        scelerisque eu ultrices. Dolor sed viverra ipsum nunc aliquet bibendum. Praesent
                        tristique magna sit amet purus. Eget est lorem ipsum dolor sit amet consectetur
                        adipiscing. Et sollicitudin ac orci phasellus egestas tellus. Est ante in nibh
                        mauris. Aenean sed adipiscing diam donec adipiscing tristique risus. Aliquet
                        bibendum enim facilisis gravida neque convallis a cras. Malesuada bibendum arcu
                        vitae elementum curabitur vitae nunc sed velit. Faucibus purus in massa tempor
                        nec feugiat nisl pretium. Malesuada pellentesque elit eget gravida cum sociis
                        natoque penatibus et. Convallis aenean et tortor at risus viverra adipiscing at.
                        Sed arcu non odio euismod lacinia at quis. Sem viverra aliquet eget sit amet
                        tellus cras adipiscing. Eleifend done fermentum odio
                        eu feugiat pretium. Metus aliquam eleifend mi in nulla posuere. Ultricies mi
                        quis hendrerit dolor magna eget est. Sed euismod nisi porta lorem mollis aliquam
                        ut porttitor leo. Quis imperdiet massa tincidunt nunc pulvinar sapien et ligula.
                        At lectus urna duis convallis convallis tellus. Aliquam id diam maecenas
                        ultricies. Bibendum est ultricies integer quis auctor elit sed. Augue ut lectus
                        arcu bibendum.</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default PatientViewer;
