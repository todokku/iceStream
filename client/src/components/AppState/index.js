import { connect } from 'react-redux';
import React, { Fragment } from 'react'
import Header from '../Header'
import Container from '../Container';
import Footer from '../Footer';
import {Client, TrackHandler} from 'spotify-sdk'

const AppState = ({done}) => (
    <Fragment>
        <Header></Header>
        <Container></Container>
        <Footer></Footer>
    </Fragment>
)

export default connect(
    undefined,
    undefined
)(AppState)