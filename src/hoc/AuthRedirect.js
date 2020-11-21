import React from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

let mapStateToPropsRedirect = (state) => {
    return {
      isAuth: state.login.isAuth
    }
  }

export const AuthRedirect = (Component) => {
    class RedirectComponent extends React.Component {
        render() {
            if(!this.props.isAuth) return <Redirect to={'/'} />
            return <Component {...this.props}/>
        }
    }

    let ConnectwithRedirectComponent = connect(mapStateToPropsRedirect)(RedirectComponent)

    return ConnectwithRedirectComponent
}