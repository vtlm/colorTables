import React,{Component} from 'react'
import {connect} from 'react-redux'
import {Button} from 'react-bootstrap'

import ColorDialog from './ColorDialog'
import DialogLauncher from './DialogLauncher'
import EditableColorSwatch from './EditableColorSwatch'
import {getCurrentColorTheme} from "../reducers"


const mapStateToProps=function(state,ownProps){
}

class BoxContainer extends Component{
  state={
    dialogVisible:false
  }

  addColor=(color)=>{
    console.log("Accepted Imm",color)
    this.props.dispatch({type:"addColorImm",val:{key:this.props.colorEntry[0],val:color}})
  }

  onAddColorClick=()=>{
    this.setState({dialogVisible:!this.state.dialogVisible,savedColors:this.props.colorEntry[1]})
  }

  onDialogCancel=()=>{
    this.setState({dialogVisible:false})
    this.props.dispatch({type:"restoreColorImm",val:{key:this.props.colorEntry[0],val:this.state.savedColors}})
  }

  render(){
    // console.log('mapRend:',this.props.color)
  return(
    <div style={{color:'red',
      backgroundColor:'white',
      margin:"1",

      // width:"90%",
      // height:200,
//      float:'left',
      border:'solid black 1px'}}>

      <div style={{border:'solid #ff0000 1px',
        margin:"2",
        // width:"100%",
        // display:"inline-block",
        // textAlign:"center",

        // overflow:"auto"
      }}>
        {this.props.colorEntry[0]}
      </div>

      <div style={{border:'solid #ff0000 1px',
        margin:"2",
        display:"inline-block",
        // overflow:"auto"
      }}>
        {this.props.colorEntry[1].map(x => <EditableColorSwatch sourceKey={this.props.colorEntry[0]} color={x} />)}
      </div>

      <div style={{border:'solid black 1px',
        margin:"2",}}>
        {/*<DialogLauncher dName="Add Color">
          <ColorDialog onAccept={this.addColor}/>
        </DialogLauncher>*/}
        <div style={{backgroundColor:'#222222',
          //textAlign:"center",
          }}>
          <Button onClick={this.onAddColorClick}>
            {this.state.dialogVisible ? "Close" : "Add Color"}
          </Button>

          {this.state.dialogVisible &&
            <div style={{width:"inherit",
                        position:"absolute",
                        display:"flex",
                        justifyContent:"center",
                        // margin:"auto",
                        // align:"center",
                        border:"1px solid #ff0000"
                        }}>
              <ColorDialog onAdd={this.addColor} onCancel={this.onDialogCancel} />
            </div>
          }

        </div>

      </div>

    </div>
  )
}
}

// export default connect(mapStateToProps)(BoxContainer)
export default connect(mapStateToProps)(BoxContainer)
// export default BoxContainer
