import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-props',
  templateUrl: './props.component.html',
  styleUrls: ['./props.component.scss']
})
export class PropsComponent implements OnInit {
  codes: any = {}
  constructor() { }

  ngOnInit() {
    this.gethighlihtcodes()
  }

  gethighlihtcodes() {
    this.codes.propssimple_aboutjs =
      `
import React from 'react'
import List from '../components/List'

function about() {
  return (
    <div>
      <h3>Example of props</h3>
      <List name="Jamsheer" description="React developer" />
      <List name="Roshan" description=".net developer" />
      <List name="Nithin" description="Angular developer" />
    </div>
  )
}

export default about
 `;
    this.codes.propssimple_listjs =
      `
import React from 'react'

function List(props) {
    return (
        <div>
            <div className='list'>
              <h4>{props.name}</h4>
              <p>{ props.description}</p>
            </div>
        </div>
    )
}

export default List
 `;

 this.codes.propssimple_aboutjs2 =
 `
 import React from 'react'
 import List from '../components/List'
 
 function about() {
   const data = { name: 'jamsheer', age: 30, 'place': "Pattambi" }
   return (
     <div>
       <h3>Example of props</h3>
       <List userdata={data} />
     </div>
   )
 }
 
 export default about
`;
this.codes.propssimple_listjs2 =
 `
 import React from 'react'

 function List(props) {
     const name = props.userdata.name
     const age = props.userdata.age
     const place = props.userdata.place
     return (
         <div>
             <div className='list'>
                 <h4>{name}</h4>
                 <p>{age}</p>
                 <p>{place}</p>
             </div>
         </div>
     )
 }
 
 export default List
`;



this.codes.props_destructure_aboutjs2 =
`
import React from 'react'
import List from '../components/List'

function about() {
  return (
    <div>
      <h3>Example of props</h3>
      <List name="Jamsheer" description="React developer" />
      <List name="Roshan" description=".net developer" />
      <List name="Nithin" description="Angular developer" />
    </div>
  )
}

export default about
`;
this.codes.prop_destructure_listjs2 =
`
function List({name,description}) {
  return (
      <div>
          <div className='list'>
              <h4>{name}</h4>
              <p>{description}</p>
          </div>
      </div>
  )
}

export default List
`;



this.codes.props_defaultvalue_aboutjs =
`
import React from 'react'
import List from '../components/List'

function about() {
  return (
    <div>
      <h3>Example of props</h3>
      <List />
      <List name="Roshan" description=".net developer" />
      <List name="Nithin" description="Angular developer" />
    </div>
  )
}

export default about
`;
this.codes.prop_defaultvalue_listjs =
`
import React from 'react'

function List({name,description}) {
    return (
        <div>
            <div className='list'>
                <h4>{name}</h4>
                <p>{description}</p>
            </div>
        </div>
    )
}

List.defaultProps = {
    name: "Default name",
    description: "Default description"
  }
export default List
`;



this.codes.props_propTypes_aboutjs =
`
import React from 'react'
import List from '../components/List'

function about() {
  return (
    <div>
      <h3>Example of props</h3>
      <List name="Jamsheer" description="React developer" experiance={1} />
      <List name="Roshan" description=".net developer" experiance={5} />
      <List name="Nithin" description="Angular developer" experiance={3} />
    </div>
  )
}

export default about
`;
this.codes.prop_propTypes_listjs =
`
import React from 'react';
import PropTypes from 'prop-types';

function List({ name, description, experiance }) {
    return (
        <div>
            <div className='list'>
                <h4>{name}</h4>
                <p>{description}</p>
                <p>{experiance}</p>
            </div>
        </div>
    )
}
List.propTypes = {
    name: PropTypes.string,
    description: PropTypes.string,
    experiance: PropTypes.number,
}

List.defaultProps = {
    name: "Default name",
    description: "Default description",
    experiance:6
}
export default List
`;

  }
}



